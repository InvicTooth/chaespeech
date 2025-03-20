import CreateActivityForm from "@/app/ui/activities/create-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Activity",
};

export default async function Page() {
	return <CreateActivityForm />;
}
