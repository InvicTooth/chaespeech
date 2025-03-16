import Pagination from "@/app/ui/activities/pagination";
import Search from "@/app/ui/search";
import Table from "@/app/ui/activities/table";
import { CreateActivity } from "@/app/ui/activities/buttons";
import { fetchFilteredActivitiesCount } from "@/app/lib/activity";
import { notoSansKR } from "@/app/ui/fonts";
import { Suspense } from "react";
import type { Metadata } from "next";

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

  const totalActivities = await fetchFilteredActivitiesCount(query);


	return (
		<div className="w-full p-8">
			<div className="flex w-full items-center justify-between">
				<h1 className={`${notoSansKR.className} text-2xl`}>활동</h1>
			</div>
			<div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
				<Search placeholder="Search activities..." />
				<CreateActivity />
			</div>
			<Suspense key={query + currentPage + take}>
				<Table query={query} currentPage={currentPage} take={take} />
			</Suspense>
			<div className="mt-5 flex w-full justify-center">
				<Pagination totalPages={totalActivities / take + 1} />
			</div>
		</div>
	);
}
