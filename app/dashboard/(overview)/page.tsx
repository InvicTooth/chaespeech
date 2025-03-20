import { ChartAreaInteractive } from "@/app/ui/dashboard/chart-area-interactive";
import { DataTable } from "@/app/ui/activities/data-table";
import { SectionCards } from "@/app/ui/dashboard/section-cards";
import {
	fetchActivitiesByDayAndType,
	fetchLatestActivities,
} from "@/app/lib/activity";

export default async function Page() {
	const activitiesByDayAndType = (await fetchActivitiesByDayAndType()) ?? [];
	const latestActivities = (await fetchLatestActivities()) ?? [];

	return (
		<div className="flex flex-1 flex-col">
			<div className="@container/main flex flex-1 flex-col gap-2">
				<div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
					<SectionCards />
					<div className="px-4 lg:px-6">
						<ChartAreaInteractive activities={activitiesByDayAndType} />
					</div>
					<DataTable data={latestActivities} />
				</div>
			</div>
		</div>
	);
}
