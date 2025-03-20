"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui/chart";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { fetchActivitiesByDayAndType } from "@/app/lib/activity";
import { colors, activityTypes } from "@/app/lib/definitions";

export const description = "An interactive area chart";



const chartConfig: ChartConfig = {
	activities: {
		label: "활동 수",
	},
};

type ChartData = {
	date: string;
} & { [key: string]: number };

export function ChartAreaInteractive({
	activities,
}: { activities: Awaited<ReturnType<typeof fetchActivitiesByDayAndType>> }) {
	const isMobile = useIsMobile();
	const [timeRange, setTimeRange] = React.useState("1y");

	React.useEffect(() => {
		if (isMobile) {
			setTimeRange("7d");
		}
	}, [isMobile]);

	activityTypes.forEach((type, index) => {
		chartConfig[type.value] = {
			label: type.value,
			color: `var(--color-${colors[index % colors.length]}-500)`,
		};
	});

	const activitiesByDate: ChartData[] = activities.reduce((acc, item) => {
		const existingItem = acc.find((i) => i.date === item.date);
		if (existingItem) {
			existingItem[item.type] =
				(existingItem[item.type] || 0) + Number(item.count);
		} else {
			const newItem = { date: item.date } as ChartData;
			newItem[item.type] = Number(item.count);
			acc.push(newItem);
		}
		return acc;
	}, [] as ChartData[]);

	const filteredData = activitiesByDate.filter((item) => {
		const date = new Date(item.date);
		const referenceDate = new Date();
		let daysToSubtract = 365;
		if (timeRange === "30d") {
			daysToSubtract = 30;
		} else if (timeRange === "7d") {
			daysToSubtract = 7;
		}

		const startDate = new Date(referenceDate);
		startDate.setDate(startDate.getDate() - daysToSubtract);
		return date >= startDate;
	});

	return (
		<Card className="@container/card">
			<CardHeader>
				<CardTitle>전체 활동</CardTitle>
				<CardDescription>
					<span className="hidden @[540px]/card:block">1년간 활동</span>
					<span className="@[540px]/card:hidden">최근 1년</span>
				</CardDescription>
				<CardAction>
					<ToggleGroup
						type="single"
						value={timeRange}
						onValueChange={setTimeRange}
						variant="outline"
						className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
					>
						<ToggleGroupItem value="1y">일 년</ToggleGroupItem>
						<ToggleGroupItem value="30d">한 달</ToggleGroupItem>
						<ToggleGroupItem value="7d">일주일</ToggleGroupItem>
					</ToggleGroup>
					<Select value={timeRange} onValueChange={setTimeRange}>
						<SelectTrigger
							className="flex w-40 **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
							size="sm"
							aria-label="Select a value"
						>
							<SelectValue placeholder="1년 간" />
						</SelectTrigger>
						<SelectContent className="rounded-xl">
							<SelectItem value="1y" className="rounded-lg">
								1년간
							</SelectItem>
							<SelectItem value="30d" className="rounded-lg">
								1개월간
							</SelectItem>
							<SelectItem value="7d" className="rounded-lg">
								1주일간
							</SelectItem>
						</SelectContent>
					</Select>
				</CardAction>
			</CardHeader>
			<CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-[250px] w-full"
				>
					<AreaChart data={filteredData}>
						<defs>
							{activityTypes.map((type, index) => (
								<linearGradient
									key={type.value}
									id={`fill${type}`}
									x1="0"
									y1="0"
									x2="0"
									y2="1"
								>
									<stop
										offset="5%"
										stopColor={`var(--color-${colors[index % colors.length]}-500)`}
										stopOpacity={0.8}
									/>
									<stop
										offset="95%"
										stopColor={`var(--color-${colors[index % colors.length]}-500)`}
										stopOpacity={0.1}
									/>
								</linearGradient>
							))}
						</defs>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value);
								return date.toLocaleDateString("ko-KR", {
									month: "short",
									day: "numeric",
								});
							}}
						/>
						<ChartTooltip
							cursor={false}
							defaultIndex={isMobile ? -1 : 10}
							content={
								<ChartTooltipContent
									labelFormatter={(value) => {
										return new Date(value).toLocaleDateString("ko-KR", {
											month: "short",
											day: "numeric",
										});
									}}
									indicator="dot"
								/>
							}
						/>
						{activityTypes.map((type, index) => (
							<Area
								key={type.value}
								dataKey={type.value}
								type="natural"
								fill={`url(#fill${type})`}
								stroke={`var(--color-${colors[index % colors.length]}-500)`}
								stackId="a"
							/>
						))}
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
