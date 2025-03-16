"use client";

import { useActionState } from "react";
import { Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import {
	createActivity,
	type ActivityFormActionState,
} from "@/app/lib/activity";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar as ShadcnCalendar } from "@/components/ui/calendar";
import { useState } from "react";
import { ko } from "date-fns/locale";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	SelectGroup,
} from "@/components/ui/select";
import type { DateRange } from "react-day-picker";

export default function CreateActivityForm() {
	const initialState: ActivityFormActionState = { message: null, errors: {} };
	const [state, formAction] = useActionState(createActivity, initialState);
	const [dateRange, setDateRange] = useState<DateRange>();

	return (
		<form action={formAction}>
			{/* <input
				type="hidden"
				name="date"
				value={date ? format(date, "yyyy-MM-dd", { locale: ko }) : ""}
			/> */}
			<div className="rounded-md bg-gray-50 p-4 md:p-6">
				{/* Activity Title */}
				<div className="mb-4">
					<Label htmlFor="title" className="mb-2 block text-sm font-medium">
						제목
					</Label>
					<div className="relative mt-2 rounded-md">
						<div className="relative">
							<Input
								id="title"
								name="title"
								type="text"
								placeholder="Enter activity title"
								className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
								aria-describedby="title-error"
							/>
							<Type className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
						</div>
						<div id="title-error" aria-live="polite" aria-atomic="true">
							{state.errors?.title?.map((error: string) => (
								<p className="mt-2 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
						</div>
					</div>
				</div>

				{/* Activity Date */}
				<div className="mb-4">
					<Label htmlFor="date" className="mb-2 block text-sm font-medium">
						날짜
					</Label>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{dateRange ? (
						<>
							{format(dateRange?.from ?? new Date(), "PPP", { locale: ko })}
							{format(dateRange?.to ?? new Date(), "PPP", { locale: ko })}
						</>
					) : (
						<span>날짜 선택</span>
					)}
					<ShadcnCalendar
						mode="range"
						selected={dateRange}
						onSelect={setDateRange}
						required={true}
						locale={ko}
					/>
					<div id="date-error" aria-live="polite" aria-atomic="true">
						{state.errors?.date?.map((error: string) => (
							<p className="mt-2 text-sm text-red-500" key={error}>
								{error}
							</p>
						))}
					</div>
				</div>

				{/* Activity Type */}
				<div className="mb-4">
					<Label htmlFor="type" className="mb-2 block text-sm font-medium">
						종류
					</Label>
					<Select name="type">
						<SelectTrigger className="w-full">
							<SelectValue placeholder="Select a type" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								<SelectItem value="Work">Work</SelectItem>
								<SelectItem value="Study">Study</SelectItem>
								<SelectItem value="Meeting">Meeting</SelectItem>
								<SelectItem value="Event">Event</SelectItem>
								<SelectItem value="Other">Other</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select>
					<div id="type-error" aria-live="polite" aria-atomic="true">
						{state.errors?.type?.map((error: string) => (
							<p className="mt-2 text-sm text-red-500" key={error}>
								{error}
							</p>
						))}
					</div>
				</div>

				{/* Activity Content */}
				<div className="mb-4">
					<Label htmlFor="content" className="mb-2 block text-sm font-medium">
						내용
					</Label>
					<div className="relative mt-2 rounded-md">
						<div className="relative">
							<Textarea
								id="content"
								name="content"
								placeholder="Enter activity content"
								className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
								aria-describedby="content-error"
							/>
							<Type className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
						</div>
						<div id="content-error" aria-live="polite" aria-atomic="true">
							{state.errors?.content?.map((error: string) => (
								<p className="mt-2 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
						</div>
					</div>
				</div>

				{/* Activity Media URL */}
				<div className="mb-4">
					<Label htmlFor="mediaUrl" className="mb-2 block text-sm font-medium">
						사진(미구현)
					</Label>
					<div className="relative mt-2 rounded-md">
						<div className="relative">
							<Input
								id="mediaUrl"
								name="mediaUrl"
								type="text"
								placeholder="Enter activity media URL"
								className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
								aria-describedby="mediaUrl-error"
							/>
							<Type className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
						</div>
						<div id="mediaUrl-error" aria-live="polite" aria-atomic="true">
							{state.errors?.mediaUrl?.map((error: string) => (
								<p className="mt-2 text-sm text-red-500" key={error}>
									{error}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="mt-6 flex justify-end gap-4">
				<Link
					href="/dashboard/activities"
					className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
				>
					Cancel
				</Link>
				{/* Use the shadcn-ui Button component */}
				<Button type="submit">Create Activity</Button>
			</div>
		</form>
	);
}
