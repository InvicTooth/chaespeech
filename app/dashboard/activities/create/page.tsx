import CreateActivityForm from "@/app/ui/activities/create-form";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Create Activity",
};

export default async function Page() {
	return (
		<div className="p-8">
			<Card>
				<CardHeader>
					<CardTitle>Create Activity</CardTitle>
					<CardDescription>
						활동 입력
					</CardDescription>
				</CardHeader>
				<CardContent>
					<CreateActivityForm />
				</CardContent>
			</Card>
		</div>
	);
}
