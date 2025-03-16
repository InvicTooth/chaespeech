import EditActivityForm from "@/app/ui/activities/edit-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/prisma/client";

export const metadata: Metadata = {
	title: "Edit Activity",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
	const params = await props.params;
	const id = Number.parseInt(params.id, 10);
	const activity = await prisma.activity.findUnique({
		where: {
			id: id,
		},
	});

	if (!activity) {
		notFound();
	}

	return (
		<div className="p-8">
			<Card>
				<CardHeader>
					<CardTitle>Edit Activity</CardTitle>
					<CardDescription>활동 수정</CardDescription>
				</CardHeader>
				<CardContent>
					<EditActivityForm activity={activity} />
				</CardContent>
			</Card>
		</div>
	);
}
