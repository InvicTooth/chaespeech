import Pagination from "@/app/ui/activities/pagination";
import {
	fetchFilteredActivities,
	fetchFilteredActivitiesCount,
} from "@/app/lib/activity";
import { notoSansKR } from "@/app/ui/fonts";
import { Suspense } from "react";
import type { Metadata } from "next";
import { DataTable } from "@/app/ui/activities/data-table";

export const metadata: Metadata = {
	title: "Activities",
};

export default async function Page(props: {
	searchParams?: Promise<{
		query?: string;
		page?: string;
		take?: string;
	}>;
}) {
	const searchParams = await props.searchParams;
	const query = searchParams?.query || "";
	const currentPage = Number(searchParams?.page) || 1;
	const take = Number(searchParams?.take) || 10;

	const activities = await fetchFilteredActivities({
		query,
		page: currentPage,
		take,
	});
	const totalActivitiesCount = await fetchFilteredActivitiesCount(query);

	return (
		<div className="w-full">
			<div className="flex w-full items-center justify-between mb-4 ml-8">
				<h1 className={`${notoSansKR.className} text-2xl`}>활동</h1>
			</div>
			<Suspense key={query + currentPage + take}>
				<DataTable data={activities} />
			</Suspense>
			<div className="mt-5 flex w-full justify-center">
				<Pagination totalPages={Math.ceil(totalActivitiesCount / take)} />
			</div>
		</div>
	);
}
