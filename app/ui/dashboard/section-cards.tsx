import {
	// IconTrendingDown,
	IconTrendingUp,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardAction,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { fetchActivitiesByType } from "@/app/lib/activity";

export async function SectionCards() {
	const activitiesByType = await fetchActivitiesByType();

	return (
		<div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
			{activitiesByType.map((a) => (
				<ActivityCard key={a.type} title={a.type} value={a._count} />
			))}
		</div>
	);
}

function ActivityCard({
	title,
	value,
}: {
	title: string;
	value: number | string;
}) {
	return (
		<Card className="@container/card">
			<CardHeader>
				<CardDescription>{title}</CardDescription>
				<CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
					{value} 건
				</CardTitle>
				<CardAction>
					<Badge variant="outline">
						<IconTrendingUp />
						+12.5%
					</Badge>
				</CardAction>
			</CardHeader>
			<CardFooter className="flex-col items-start gap-1.5 text-sm">
				<div className="line-clamp-1 flex gap-2 font-medium">
					Trending up this month <IconTrendingUp className="size-4" />
				</div>
				<div className="text-muted-foreground">
					Visitors for the last 6 months
				</div>
			</CardFooter>
		</Card>
	);
}
