"use client";

import * as motion from "motion/react-client";
import { useForm, useFormState } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type * as z from "zod";
import { startTransition, useActionState } from "react";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { type ActionState, contactFormSchema } from "@/app/lib/definitions";
import { sendContactEmail } from "@/app/lib/contact";
import { useSiteOwnerProfileStore } from "@/app/lib/store";
import { formatPhoneNumber } from "@/app/lib/utils";

const initialActionState: ActionState = {
	status: "idle",
	message: "",
};

export default function Contact() {
	const { profile } = useSiteOwnerProfileStore();

	const form = useForm<z.infer<typeof contactFormSchema>>({
		resolver: zodResolver(contactFormSchema),
		defaultValues: {
			name: "",
			phone: "",
			email: "",
			message: "",
			service: undefined,
		},
	});
	const { isSubmitting } = useFormState({ control: form.control });
	const [actionState, formAction] = useActionState(
		sendContactEmail,
		initialActionState,
	);

	const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
		const formData = new FormData();
		for (const [key, value] of Object.entries(values)) {
			if (typeof value === "string") {
				formData.append(key, value);
			}
		}

		return formData;
	};

	return (
		<motion.div
			className="min-h-screen bg-gray-50"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{/* Hero Section */}
			<motion.section
				className="bg-[var(--color-neutral)] text-white py-24"
				variants={heroVariants}
			>
				<div className="container mx-auto px-4 pt-6">
					<motion.h1
						className="text-4xl font-bold mb-4"
						variants={itemVariants}
					>
						문의하기
					</motion.h1>
					<motion.p className="text-xl opacity-90" variants={itemVariants}>
						궁금하신 점이나 상담 요청을 남겨주세요
					</motion.p>
				</div>
			</motion.section>

			{/* Main Content */}
			<div className="container mx-auto px-4 py-12">
				<div className="max-w-4xl mx-auto">
					{/* Contact Form */}
					<motion.div
						className="bg-white rounded-xl shadow-lg p-8 mb-8"
						variants={itemVariants}
					>
						<Form {...form}>
							<form
								className="space-y-6"
								action={formAction}
								onSubmit={(e) => {
									e.preventDefault();
									form.handleSubmit(() => {
										startTransition(() =>
											formAction(onSubmit(form.getValues())),
										);
									})(e);
								}}
							>
								<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
									{/* Name Input */}
									<FormField
										control={form.control}
										name="name"
										render={({ field }) => (
											<FormItem>
												<FormLabel>이름 *</FormLabel>
												<FormControl>
													<Input placeholder="이름을 입력해주세요" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									{/* Phone Input */}
									<FormField
										control={form.control}
										name="phone"
										render={({ field }) => (
											<FormItem>
												<FormLabel>연락처 *</FormLabel>
												<FormControl>
													<Input placeholder="010-0000-0000" {...field} />
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									{/* Email Input */}
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>이메일</FormLabel>
												<FormControl>
													<Input
														type="email"
														placeholder="이메일을 입력해주세요"
														{...field}
													/>
												</FormControl>
												<FormMessage />
											</FormItem>
										)}
									/>

									{/* Service Select */}
									<FormField
										control={form.control}
										name="service"
										render={({ field }) => (
											<FormItem>
												<FormLabel>문의 서비스 *</FormLabel>
												<Select
													onValueChange={field.onChange}
													defaultValue={field.value}
												>
													<FormControl>
														<SelectTrigger className="w-full">
															<SelectValue placeholder="문의 서비스를 선택해주세요" />
														</SelectTrigger>
													</FormControl>
													<SelectContent>
														<SelectItem value="컨설팅">1:1 컨설팅</SelectItem>
														<SelectItem value="강의">강의 문의</SelectItem>
														<SelectItem value="행사">행사 진행</SelectItem>
														<SelectItem value="기타">기타 문의</SelectItem>
													</SelectContent>
												</Select>
												<FormMessage />
											</FormItem>
										)}
									/>
								</div>

								{/* Message Input */}
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel>문의 내용 *</FormLabel>
											<FormControl>
												<Textarea
													placeholder="문의 내용을 입력해주세요"
													className="resize-none h-48"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Submit Button */}
								<div className="flex justify-end">
									<Button
										type="submit"
										disabled={
											isSubmitting || actionState.status === "submitting"
										}
									>
										{actionState.status === "submitting"
											? "문의 접수 중..."
											: "문의하기"}
									</Button>
								</div>
								{actionState.status === "success" && (
									<div className="text-green-500">{actionState.message}</div>
								)}
								{actionState.status === "error" && (
									<div className="text-red-500">{actionState.message}</div>
								)}
							</form>
						</Form>
					</motion.div>

					{/* Additional Contact Information */}
					<motion.div
						className="grid grid-cols-1 md:grid-cols-3 gap-6"
						variants={containerVariants}
					>
						<motion.div
							className="bg-white p-6 rounded-lg shadow text-center"
							variants={contactInfoVariants}
						>
							<h3 className="font-semibold mb-2">이메일</h3>
							<p className="text-gray-600">{profile?.email}</p>
						</motion.div>
						<motion.div
							className="bg-white p-6 rounded-lg shadow text-center"
							variants={contactInfoVariants}
						>
							<h3 className="font-semibold mb-2">전화</h3>
							<p className="text-gray-600">
								{formatPhoneNumber(profile?.phone)}
							</p>
						</motion.div>
						<motion.div
							className="bg-white p-6 rounded-lg shadow text-center"
							variants={contactInfoVariants}
						>
							<h3 className="font-semibold mb-2">SNS</h3>
							<p className="text-gray-600">{profile?.name}</p>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</motion.div>
	);
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const heroVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeInOut",
		},
	},
};

const contactInfoVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: "easeInOut",
		},
	},
};
