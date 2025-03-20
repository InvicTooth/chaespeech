"use client";

import { useEffect, useState } from "react";
import * as motion from "motion/react-client";
import { activityTypes } from "@/app/lib/definitions";
import type { Activity } from "@/app/lib/definitions";
import { isImage, isVideo } from "@/app/lib/utils";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";

// New Type Definition for Categorized Events
type CategorizedEvents = {
	[key: string]: Activity[];
};

export function EventsClientComponent({ events }: { events: Activity[] }) {
	const [categorizedEvents, setCategorizedEvents] = useState<CategorizedEvents>(
		{},
	);
	const [selectedCategory, setSelectedCategory] = useState<string>("all");

	useEffect(() => {
		// Re-calculate categorized events whenever 'events' changes
		const newCategorizedEvents = events.reduce((acc, event) => {
			const category = event.type;
			if (!acc[category]) {
				acc[category] = [];
			}
			acc[category].push(event);
			return acc;
		}, {} as CategorizedEvents);
		setCategorizedEvents(newCategorizedEvents);
	}, [events]);

	const categories = activityTypes
		.filter((type) => type.value.includes("Event"))
		.map((type) => type.value);

	return (
		<motion.div
			className="min-h-screen bg-gray-50"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{/* 히어로 섹션 */}
			<motion.section
				className="bg-[var(--color-event-black)] text-white py-24"
				variants={heroVariants}
			>
				<div className="container mx-auto px-4 pt-6">
					<motion.h1
						className="text-4xl font-bold mb-4"
						variants={itemVariants}
					>
						행사 진행
					</motion.h1>
					<motion.p className="text-xl opacity-90" variants={itemVariants}>
						다양한 무대에서 쌓아온 진행 경험
					</motion.p>
				</div>
			</motion.section>

			{/* 카테고리 필터 */}
			<div className="container mx-auto px-4 py-8">
				<motion.div
					className="flex flex-wrap gap-3 mb-8"
					variants={containerVariants}
				>
					<motion.button
						onClick={() => setSelectedCategory("all")}
						className={`px-4 py-2 rounded-full transition-colors ${
							selectedCategory === "all"
								? "bg-[var(--color-event-black)] text-white"
								: "bg-white border border-gray-300 hover:bg-gray-100"
						}`}
						type="button"
						variants={categoryButtonVariants}
					>
						전체보기
					</motion.button>
					{categories.map((category) => (
						<motion.button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 rounded-full transition-colors ${
								selectedCategory === category
									? "bg-[var(--color-event-black)] text-white"
									: "bg-white border border-gray-300 hover:bg-gray-100"
							}`}
							type="button"
							variants={categoryButtonVariants}
						>
							{activityTypes.find((type) => type.value === category)?.label}
						</motion.button>
					))}
				</motion.div>

				{/* 이벤트 목록 */}
				<motion.div
					className="space-y-12"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					{Object.keys(categorizedEvents).map((category) => {
						// Filter events for the current category if a specific category is selected
						const filteredEvents =
							selectedCategory === "all"
								? categorizedEvents[category]
								: selectedCategory === category
									? categorizedEvents[category]
									: [];

						// Only render the category section if there are filtered events
						if (filteredEvents.length === 0) return null;

						return (
							<div key={category}>
								<h2 className="text-2xl font-bold mb-6 text-[var(--color-event-black)]">
									{activityTypes.find((type) => type.value === category)?.label}
								</h2>
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
									{filteredEvents.map((event) => (
										<motion.div
											key={event.id}
											className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
											variants={eventCardVariants}
										>
											<div className="relative h-48 bg-gray-200">
												{event.mediaUrl && (
													<div className="mt-3">
														{isImage(event.mediaUrl) ? (
															<Image
																src={event.mediaUrl}
																alt="강의 관련 이미지"
																width={500}
																height={300}
																className="w-full h-48 object-cover rounded-md"
															/>
														) : isVideo(event.mediaUrl) ? (
															<video
																muted
																src={event.mediaUrl}
																controls
																className="w-full h-48 object-cover rounded-md"
															/>
														) : (
															<Link
																href={event.mediaUrl}
																target="_blank"
																rel="noopener noreferrer"
																className="text-blue-500 hover:underline"
															>
																관련 자료 보기
															</Link>
														)}
													</div>
												)}
												<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
											</div>
											<div className="p-4">
												<h3 className="font-medium text-lg mb-2 line-clamp-2">
													{event.title}
												</h3>
												{event.content && (
													<p className="mt-2 text-gray-600 line-clamp-3">
														{event.content}
													</p>
												)}
												<div className="mt-2 flex flex-wrap gap-2">
													{event.startAt && event.endAt && (
														<span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded">
															{format(event.startAt, "yyyy.MM", { locale: ko })}
														</span>
													)}
												</div>
											</div>
										</motion.div>
									))}
								</div>
							</div>
						);
					})}
				</motion.div>
			</div>
		</motion.div>
	);
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

const heroVariants = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.8,
			ease: "easeInOut",
		},
	},
};

const categoryButtonVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.4,
			ease: "easeInOut",
		},
	},
};

const eventCardVariants = {
	hidden: { opacity: 0, scale: 0.9 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: "easeInOut",
		},
	},
};
