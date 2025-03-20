import Link from "next/link";
import { deleteActivity } from "@/app/lib/activity";
import { Pencil, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";

export function CreateActivity() {
	return (
		<Link href="/dashboard/activities/create">
			<Button className="gap-2">
				활동 입력하기
				<Plus className="h-4 w-4" />
			</Button>
		</Link>
	);
}

export function UpdateActivity({ id }: { id: bigint }) {
	return (
		<Link
			href={`/dashboard/activities/${id}/edit`}
			className={cn(
				Button({ variant: "ghost" }),
				"rounded-md p-2 hover:bg-gray-100",
			)}
		>
			<Pencil className="w-5" />
		</Link>
	);
}

export function DeleteActivity({ id }: { id: bigint }) {
	const deleteActivityById = deleteActivity.bind(null, id);

	return (
		<form action={deleteActivityById}>
			<Button
				type="submit"
				variant="ghost"
				className="rounded-md p-2 hover:bg-gray-100"
			>
				<span className="sr-only">Delete</span>
				<Trash2 className="w-5" />
			</Button>
		</form>
	);
}
