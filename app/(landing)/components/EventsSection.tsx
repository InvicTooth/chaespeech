import Link from "next/link";
import { events } from "@/app/mock/data";
import * as motion from "motion/react-client";

const containerVariants = {
	hidden: { opacity: 0, y: 20 },
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

export default function EventsSection() {
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
				className="text-3xl font-bold text-[var(--color-event-black)] mb-8"
			>
				행사 진행
			</motion.h2>
			<motion.div
				variants={containerVariants}
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
			>
				{events.map((category, index) => (
					<motion.div
						variants={itemVariants}
						key={index}
						className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[var(--color-event-black)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50"
					>
						<motion.h3
							variants={itemVariants}
							className="text-xl font-bold mb-4 text-[var(--color-event-black)]"
						>
							{category.type.replace(/^\d+\.\s/, "")}
						</motion.h3>
						<motion.ul variants={itemVariants} className="space-y-2">
							{category.list.slice(0, 3).map((event, eventIndex) => (
								<motion.li
									variants={itemVariants}
									key={eventIndex}
									className="text-gray-600"
								>
									• {event}
								</motion.li>
							))}
						</motion.ul>
					</motion.div>
				))}
			</motion.div>
			<motion.div variants={itemVariants} className="text-center mt-8">
				<Link
					href="/events"
					className="inline-block px-6 py-3 bg-[var(--color-event-black)] text-white rounded-lg hover:bg-[var(--color-event-black)]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
				>
					전체 행사 보기 →
				</Link>
			</motion.div>
		</motion.section>
	);
}