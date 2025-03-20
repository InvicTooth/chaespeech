import EditActivityForm from "@/app/ui/activities/edit-form";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { prisma } from "@/prisma/client";

export const metadata: Metadata = {
	title: "Edit Activity",
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
	const params = await props.params;
	const id = Number.parseInt(params.id);
	const activity = await prisma.activity.findUnique({
		where: {
			id: id,
		},
	});

	if (!activity) {
		notFound();
	}

	return <EditActivityForm activity={activity} />;
}
