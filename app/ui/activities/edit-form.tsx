"use client";

import { startTransition, useActionState } from "react";
import { Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { updateActivity } from "@/app/lib/activity";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { ko } from "date-fns/locale";
import type { DateRange } from "react-day-picker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	type Activity,
	activityTypes,
	activityFormSchema,
} from "@/app/lib/definitions";

export default function EditActivityForm({ activity }: { activity: Activity }) {
	const updateActivityWithId = updateActivity.bind(null, activity.id);
	const [state, formAction] = useActionState(updateActivityWithId, {
		message: null,
		errors: {},
	});

	const form = useForm<z.infer<typeof activityFormSchema>>({
		resolver: zodResolver(activityFormSchema),
		defaultValues: {
			title: activity.title,
			type: activity.type,
			content: activity.content,
			mediaUrl: activity.mediaUrl,
			date: {
				from: activity.startAt,
				to: activity.endAt,
			},
		},
	});

	const onSubmit = (values: z.infer<typeof activityFormSchema>) => {
		const formData = new FormData();
		for (const [key, value] of Object.entries(values)) {
			if (typeof value === "string") {
				formData.append(key, value);
			} else if (value !== undefined) {
				const { from, to } = value as DateRange;
				formData.append(
					"startAt",
					from ? format(from, "yyyy-MM-dd HH:mm:ss", { locale: ko }) : "",
				);
				formData.append(
					"endAt",
					to ? format(to, "yyyy-MM-dd HH:mm:ss", { locale: ko }) : "",
				);
			}
		}
		return formData;
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>활동 수정</CardTitle>
				<CardDescription>활동을 수정합니다.</CardDescription>
			</CardHeader>
			<CardContent>
				<Form {...form}>
					<form
						action={formAction}
						onSubmit={(evt) => {
							evt.preventDefault();
							form.handleSubmit(() => {
								startTransition(() => formAction(onSubmit(form.getValues())));
							})(evt);
						}}
						className="space-y-8"
					>
						<FormField
							control={form.control}
							name="title"
							render={({ field }) => (
								<FormItem>
									<FormLabel>제목</FormLabel>
									<FormControl>
										<div className="relative">
											<Input
												placeholder="활동 제목을 입력하세요"
												className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
												{...field}
											/>
											<Type className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
										</div>
									</FormControl>
									<FormMessage />
									<div
										id="mediaUrl-error"
										aria-live="polite"
										aria-atomic="true"
									>
										{state.errors?.title?.map((error: string) => (
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
							name="type"
							render={({ field }) => (
								<FormItem>
									<FormLabel>종류</FormLabel>
									<FormControl>
										<RadioGroup
											className="flex flex-wrap gap-2"
											onValueChange={field.onChange}
											defaultValue={field.value}
										>
											{activityTypes.map((type) => (
												<FormItem
													key={type.value}
													className="flex items-center space-x-2"
												>
													<FormControl>
														<FormLabel
															htmlFor={type.value}
															className="cursor-pointer font-medium px-4 py-4 border border-gray-300 rounded-4xl flex items-center whitespace-nowrap"
														>
															<RadioGroupItem
																value={type.value}
																id={type.value}
																className="peer"
															/>
															<span className="peer-checked:font-bold peer-checked:text-blue-600">
																{type.label}
															</span>
														</FormLabel>
													</FormControl>
												</FormItem>
											))}
										</RadioGroup>
									</FormControl>
									<FormMessage />
									<div id="type-error" aria-live="polite" aria-atomic="true">
										{state.errors?.type?.map((error: string) => (
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
							name="date"
							render={(field) => (
								<FormItem>
									<FormLabel>날짜</FormLabel>
									<FormControl>
										<Calendar
											mode="range"
											selected={field.field.value}
											onSelect={field.field.onChange}
											locale={ko}
											className="rounded-md border shadow"
										/>
									</FormControl>
									<FormMessage />
									<div id="date-error" aria-live="polite" aria-atomic="true">
										{state.errors?.startAt?.map((error: string) => (
											<p className="mt-2 text-sm text-red-500" key={error}>
												{error}
											</p>
										))}
									</div>
									<div id="date-error" aria-live="polite" aria-atomic="true">
										{state.errors?.endAt?.map((error: string) => (
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
							name="content"
							render={({ field }) => (
								<FormItem>
									<FormLabel>내용</FormLabel>
									<FormControl>
										<div className="relative">
											<Textarea
												placeholder="활동 내용을 입력하세요"
												className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
												{...field}
											/>
											<Type className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
										</div>
									</FormControl>
									<FormMessage />
									<div id="content-error" aria-live="polite" aria-atomic="true">
										{state.errors?.content?.map((error: string) => (
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
							name="mediaUrl"
							render={({ field }) => (
								<FormItem>
									<FormLabel>사진(미구현)</FormLabel>
									<FormControl>
										<div className="relative">
											<Input
												placeholder="사진 URL을 입력하세요"
												className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
												{...field}
											/>
											<Type className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
										</div>
									</FormControl>
									<FormMessage />
									<div
										id="mediaUrl-error"
										aria-live="polite"
										aria-atomic="true"
									>
										{state.errors?.mediaUrl?.map((error: string) => (
											<p className="mt-2 text-sm text-red-500" key={error}>
												{error}
											</p>
										))}
									</div>
								</FormItem>
							)}
						/>
						<div className="flex justify-end gap-4 mt-4">
							<Link
								href="/dashboard/activities"
								className={cn(
									Button({ variant: "outline" }),
									"flex h-10 items-center rounded-lg px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200",
								)}
							>
								Cancel
							</Link>
							<Button type="submit">Save Changes</Button>
						</div>
					</form>
				</Form>
			</CardContent>
		</Card>
	);
}
