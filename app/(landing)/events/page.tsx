"use client";

import { events } from "@/app/mock/data";
import { useState } from "react";
import * as motion from "motion/react-client";

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

export default function Events() {
	const [selectedCategory, setSelectedCategory] = useState("all");

	const categories = events.map((event) => event.type);
	const filteredEvents =
		selectedCategory === "all"
			? events
			: events.filter((event) => event.type === selectedCategory);

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
							{category.replace(/^\d+\.\s/, "")} {/* 숫자와 점 제거 */}
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
					{filteredEvents.map((eventCategory, index) => (
						<motion.div
							key={index}
							className="bg-white rounded-xl shadow-lg p-6"
							variants={itemVariants}
						>
							<h2 className="text-2xl font-bold mb-6 text-[var(--color-event-black)]">
								{eventCategory.type.replace(/^\d+\.\s/, "")}
							</h2>
							<motion.div
								className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
								variants={containerVariants}
							>
								{eventCategory.list.map((event, eventIndex) => (
									<motion.div
										key={eventIndex}
										className="group relative bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
										variants={eventCardVariants}
									>
										{/* 이벤트 썸네일 (예시 이미지) */}
										<div className="relative h-48 bg-gray-200">
											<div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
										</div>
										{/* 이벤트 정보 */}
										<div className="p-4">
											<h3 className="font-medium text-lg mb-2 line-clamp-2">
												{event}
											</h3>
											<div className="flex items-center gap-2 text-sm text-gray-600">
												<span className="px-2 py-1 bg-gray-100 rounded">
													{eventCategory.type.includes("정부")
														? "공식행사"
														: eventCategory.type.includes("창업")
															? "창업행사"
															: eventCategory.type.includes("토크")
																? "토크콘서트"
																: eventCategory.type.includes("음악")
																	? "문화행사"
																	: eventCategory.type.includes("개막식")
																		? "행사진행"
																		: eventCategory.type.includes("홍보")
																			? "홍보영상"
																			: "기타"}
												</span>
											</div>
										</div>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.div>
	);
}
