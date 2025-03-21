"use client";

import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileFormSchema, type ActionState, type Profile } from "@/app/lib/definitions";
import { useActionState, useRef, useState } from "react";
import { updateProfile } from "@/app/lib/profile";
import { toast } from "sonner";
import { notoSansKR } from "@/app/ui/fonts";
import { useEffect } from "react";
import { startTransition } from "react";
import type { z } from "zod";

export default function ProfileForm({
	initialProfile,
}: { initialProfile: Profile }) {
	const [profile, setProfile] = useState(() => initialProfile);
	useEffect(() => {
		setProfile(initialProfile);
	}, [initialProfile]);

	const [state, formAction] = useActionState(updateProfile, {
		message: null,
	} as ActionState);
  const formRef = useRef<HTMLFormElement>(null);

	const form = useForm<Profile>({
		resolver: zodResolver(profileFormSchema),
		defaultValues: profile,
	});

	useEffect(() => {
    if (state?.errors){
      toast.error(state.message);
    }
		else if (state?.message) {
			toast.success(state.message);
		}
	}, [state]);

	const onSubmit = (values: z.infer<typeof profileFormSchema>) => {
		const formData = new FormData();
		for (const [key, value] of Object.entries(values)) {
			if (typeof value === "string") {
				formData.append(key, value);
			}
		}
    formData.append("id", `${profile.id}`);

		return formData;
	};

	return (
		<div className="w-full">
			<div className="flex w-full items-center justify-between mb-4 ml-8">
				<h1 className={`${notoSansKR.className} text-2xl`}>프로필 관리</h1>
			</div>
			<Form {...form}>
				<form
					ref={formRef}
					action={formAction}
					onSubmit={(e) => {
						e.preventDefault();
						form.handleSubmit(() => {
							startTransition(() => formAction(onSubmit(form.getValues())));
						})(e);
					}}
					className="space-y-8 w-2/3 mx-auto"
				>
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel>이름</FormLabel>
								<FormControl>
									<Input
										placeholder="이름을 입력하세요"
										{...field}
										value={field.value ?? ""}
									/>
								</FormControl>
								<FormMessage />
								<div id="name-error" aria-live="polite" aria-atomic="true">
									{state.errors?.name?.map((error: string) => (
										<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>이메일</FormLabel>
								<FormControl>
									<Input
										placeholder="이메일을 입력하세요"
										type="email"
										{...field}
										value={field.value ?? ""}
									/>
								</FormControl>
								<FormMessage />
								<div id="email-error" aria-live="polite" aria-atomic="true">
									{state.errors?.email?.map((error: string) => (
										<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>전화번호</FormLabel>
								<FormControl>
									<Input
										placeholder="전화번호를 입력하세요"
										type="tel"
										{...field}
										value={field.value ?? ""}
									/>
								</FormControl>
								<FormMessage />
								<div id="phone-error" aria-live="polite" aria-atomic="true">
									{state.errors?.phone?.map((error: string) => (
										<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="brand"
						render={({ field }) => (
							<FormItem>
								<FormLabel>브랜드</FormLabel>
								<FormControl>
									<Input
										placeholder="브랜드를 입력하세요"
										{...field}
										value={field.value ?? ""}
									/>
								</FormControl>
								<FormMessage />
								<div id="brand-error" aria-live="polite" aria-atomic="true">
									{state.errors?.brand?.map((error: string) => (
										<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="businessRegistrationNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>사업자 등록 번호</FormLabel>
								<FormControl>
									<Input
										placeholder="사업자 등록 번호를 입력하세요"
										{...field}
										value={field.value ?? ""}
									/>
								</FormControl>
								<FormMessage />
								<div
									id="businessRegistrationNumber-error"
									aria-live="polite"
									aria-atomic="true"
								>
									{state.errors?.businessRegistrationNumber?.map(
										(error: string) => (
											<p className="mt-2 text-sm text-red-500" key={error}>
												{error}
											</p>
										),
									)}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="address"
						render={({ field }) => (
							<FormItem>
								<FormLabel>주소</FormLabel>
								<FormControl>
									<Input
										placeholder="주소를 입력하세요"
										{...field}
										value={field.value ?? ""}
									/>
								</FormControl>
								<FormMessage />
								<div id="address-error" aria-live="polite" aria-atomic="true">
									{state.errors?.address?.map((error: string) => (
										<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="bank"
						render={({ field }) => (
							<FormItem>
								<FormLabel>은행</FormLabel>
								<FormControl>
									<Input
										placeholder="은행을 입력하세요"
										{...field}
										value={field.value ?? ""}
									/>
								</FormControl>
								<FormMessage />
								<div id="bank-error" aria-live="polite" aria-atomic="true">
									{state.errors?.bank?.map((error: string) => (
										<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="accountNumber"
						render={({ field }) => (
							<FormItem>
								<FormLabel>계좌 번호</FormLabel>
								<FormControl>
									<Input
										placeholder="계좌 번호를 입력하세요"
										{...field}
										value={field.value ?? ""}
									/>
								</FormControl>
								<FormMessage />
								<div
									id="accountNumber-error"
									aria-live="polite"
									aria-atomic="true"
								>
									{state.errors?.accountNumber?.map((error: string) => (
										<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
								</div>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="depositor"
						render={({ field }) => (
							<FormItem>
								<FormLabel>예금주</FormLabel>
								<FormControl>
									<Input
										placeholder="예금주를 입력하세요"
										{...field}
										value={field.value ?? ""}
									/>
								</FormControl>
								<FormMessage />
								<div id="depositor-error" aria-live="polite" aria-atomic="true">
									{state.errors?.depositor?.map((error: string) => (
										<p className="mt-2 text-sm text-red-500" key={error}>
											{error}
										</p>
									))}
								</div>
							</FormItem>
						)}
					/>
					<Button type="submit" className="w-full">
						프로필 업데이트
					</Button>
				</form>
			</Form>
		</div>
	);
}
