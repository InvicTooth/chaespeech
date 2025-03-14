import Link from "next/link";
import * as motion from "motion/react-client";

const lectures = [
	{ title: "면접 스피치", icon: "👤", desc: "상세1" },
	{ title: "PR 스피치", icon: "🎯", desc: "상세2" },
	{ title: "프레젠테이션", icon: "📈", desc: "상세3" },
];

const containerVariants = {
	hidden: { opacity: 0, y: 0 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			ease: "easeInOut",
			staggerChildren: 0.2, // Stagger the animation of each card
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: {
		opacity: 1,
		x: 0,
		transition: { duration: 0.5, ease: "easeInOut" },
	},
};

export default function LecturesSection() {
	return (
		<motion.section
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
      viewport={{ once: true }}
			className="mb-20"
		>
			<motion.h2
				variants={itemVariants}
				className="text-3xl font-bold text-[var(--color-lecture-pink)] mb-8"
			>
				강의 프로그램
			</motion.h2>
			<motion.div
				variants={containerVariants}
				className="grid grid-cols-1 md:grid-cols-3 gap-8"
			>
				{lectures.map((program, index) => (
					<motion.div
						variants={itemVariants}
						key={index}
						className="group bg-white rounded-lg shadow-lg overflow-hidden border-r-4 border-[var(--color-lecture-blue)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
					>
						<motion.div
							variants={itemVariants}
							className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[var(--color-lecture-pink)] to-[var(--color-lecture-blue)] group-hover:scale-105 transition-transform duration-300"
						/>
						<motion.div variants={itemVariants} className="p-6">
							<div className="text-center mb-4">
								<span className="inline-block p-3 bg-[var(--color-consulting-sky)]/10 rounded-full text-4xl">
									{program.icon}
								</span>
							</div>
							<motion.h3
								variants={itemVariants}
								className="text-xl font-semibold mb-2"
							>
								{program.title}
							</motion.h3>
							<motion.p variants={itemVariants} className="text-gray-600">
								{program.desc}
							</motion.p>
						</motion.div>
					</motion.div>
				))}
			</motion.div>
			<motion.div variants={itemVariants} className="text-center mt-8">
				<Link
					href="/lectures"
					className="inline-block px-6 py-3 bg-[var(--color-lecture-pink)] text-white rounded-lg hover:bg-[var(--color-lecture-pink)]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
					전체 프로그램 보기 →
				</Link>
			</motion.div>
		</motion.section>
	);
}