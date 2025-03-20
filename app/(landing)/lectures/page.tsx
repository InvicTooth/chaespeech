import { fetchActivitiesForVisitors } from "@/app/lib/activity";
import * as motion from "motion/react-client";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { isImage, isVideo } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default async function Lectures() {
	const lectures = await fetchActivitiesForVisitors({
		query: "Lecture",
		take: 100,
	});

	return (
		<motion.div
			className="min-h-screen bg-gray-50"
			variants={containerVariants}
			initial="hidden"
			animate="visible"
		>
			{/* 히어로 섹션 */}
			<motion.section
				className="bg-[var(--color-lecture-pink)] text-white py-24"
				variants={heroVariants}
				initial="hidden"
				animate="visible"
			>
				<div className="container mx-auto px-4 pt-6">
					<motion.h1
						className="text-4xl font-bold mb-4"
						variants={itemVariants}
					>
						강의 프로그램
					</motion.h1>
					<motion.p className="text-xl opacity-90" variants={itemVariants}>
						실전 경험을 바탕으로 한 체계적인 스피치 교육
					</motion.p>
				</div>
			</motion.section>

			{/* 메인 콘텐츠 */}
			<div className="container mx-auto px-4 pt-12">
				{/* 주요 강의 영역 */}
				<section className="mb-16">
					<motion.h2
						className="text-2xl font-bold mb-8"
						variants={itemVariants}
						initial="hidden"
						animate="visible"
					>
						주요 강의 프로그램
					</motion.h2>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{["면접 스피치", "PR 스피치", "프레젠테이션"].map((program) => (
							<motion.div
								key={program}
								className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
								variants={programCardVariants}
							>
								<div className="aspect-w-16 aspect-h-9 bg-gray-200">
									{/* 강의 대표 이미지 영역 */}
									<div className="w-full h-48 bg-[var(--color-lecture-pink)] opacity-80" />
								</div>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">{program}</h3>
									<p className="text-gray-600 mb-4">
										실전 경험을 바탕으로 한 맞춤형 교육 프로그램
									</p>
									<div className="flex flex-wrap gap-2 mb-4">
										<span className="px-3 py-1 bg-[var(--color-lecture-blue)/10] text-[var(--color-lecture-blue)] rounded-full text-sm">
											1:1 맞춤형
										</span>
										<span className="px-3 py-1 bg-[var(--color-lecture-blue)/10] text-[var(--color-lecture-blue)] rounded-full text-sm">
											실전 연습
										</span>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</section>

				{/* 강의 실적 영역 */}
				<section className="mb-16">
					<motion.h2
						className="text-2xl font-bold mb-8"
						variants={itemVariants}
						initial="hidden"
						animate="visible"
					>
						주요 강의 실적
					</motion.h2>
					<motion.div
						className="grid grid-cols-1 md:grid-cols-2 gap-8"
						variants={containerVariants}
						initial="hidden"
						animate="visible"
					>
						{lectures.map((lecture, index) => (
							<motion.div
								key={lecture.id}
								className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
								variants={lectureItemVariants}
							>
								<div className="flex items-start space-x-4">
									<div className="w-12 h-12 rounded-full bg-[var(--color-lecture-pink)] flex items-center justify-center text-white font-bold">
										{index + 1}
									</div>
									<div>
										<p className="text-lg">{lecture.title}</p>
										{lecture.content && (
											<p className="mt-2 text-gray-600">{lecture.content}</p>
										)}
										<div className="mt-2 flex flex-wrap gap-2">
											{lecture.startAt && lecture.endAt && (
												<span className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded">
													{format(lecture.startAt, "yyyy.MM", { locale: ko })}
												</span>
											)}
											{/* {lecture.title.includes("스피치") && (
												<span className="px-2 py-1 bg-[var(--color-lecture-pink)]/10 text-[var(--color-lecture-pink)] rounded-full text-sm">
													스피치
												</span>
											)}
											{lecture.title.includes("커뮤니케이션") && (
												<span className="px-2 py-1 bg-[var(--color-lecture-blue)]/10 text-[var(--color-lecture-blue)] rounded-full text-sm">
													커뮤니케이션
												</span>
											)}
											{lecture.title.includes("프레젠테이션") && (
												<span className="px-2 py-1 bg-[var(--color-lecture-blue)]/10 text-[var(--color-lecture-blue)] rounded-full text-sm">
													프레젠테이션
												</span>
											)} */}
										</div>
										{lecture.mediaUrl && (
											<div className="mt-3">
												{/* 이미지 또는 동영상 여부 판단 */}
												{isImage(lecture.mediaUrl) ? (
													<Image
														src={lecture.mediaUrl}
														alt="강의 관련 이미지"
														className="w-full h-48 object-cover rounded-md"
													/>
												) : isVideo(lecture.mediaUrl) ? (
													<video
														muted
														src={lecture.mediaUrl}
														controls
														className="w-full h-48 object-cover rounded-md"
													/>
												) : (
													<Link
														href={lecture.mediaUrl}
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-500 hover:underline"
													>
														관련 자료 보기
													</Link>
												)}
											</div>
										)}
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				</section>
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

const programCardVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.6,
			ease: "easeInOut",
		},
	},
};

const lectureItemVariants = {
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.7,
			ease: "easeInOut",
		},
	},
};
