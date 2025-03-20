import Link from "next/link";
import * as motion from "motion/react-client";
import { fetchActivitiesForVisitors } from "@/app/lib/activity";
import type { Activity } from "@/app/lib/definitions";

const CareerSection = async () => {
	const careers = await fetchActivitiesForVisitors({ query: "Career" });
	const mainCareer = careers.filter((career) => career.type === "MainCareer");
	const subCareer = careers.filter((career) => career.type === "SubCareer");

	return (
		<motion.section
			initial="hidden"
			animate="visible"
			className="mb-20 text-[var(--color-career-navy)]"
		>
			<motion.h2
				initial={{ opacity: 0, y: 0 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.2 }}
				className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8"
			>
				경력
			</motion.h2>
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 gap-8"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.2 }}
			>
				<motion.div className="bg-card rounded-xl shadow-lg p-8 border-t-4 border-[var(--color-career-gold)] hover:shadow-xl ease-in-out hover:-translate-y-1 transition-transform duration-200">
					<motion.h3 className="text-2xl font-bold mb-6">주요 경력</motion.h3>
					<ul className="space-y-4">
						{mainCareer.slice(0, 3).map((career) => (
							<CareerItem key={career.id} career={career} />
						))}
					</ul>
				</motion.div>
				<motion.div className="bg-card rounded-xl shadow-lg p-8 border-t-4 border-[var(--color-career-gold)] hover:shadow-xl ease-in-out hover:-translate-y-1 transition-transform duration-200">
					<motion.h3 className="text-2xl font-bold mb-6">기타 경력</motion.h3>
					<ul className="space-y-4">
						{subCareer.slice(0, 3).map((career) => (
							<CareerItem key={career.id} career={career} />
						))}
					</ul>
				</motion.div>
			</motion.div>
			<motion.div className="text-center mt-8">
				<Link
					href="/career"
					className="btn-primary hover:bg-opacity-90 ease-in-out hover:-translate-y-1 transition-transform duration-200 px-6 py-4 rounded-lg bg-[var(--color-career-navy)]"
				>
					전체 경력 보기 →
				</Link>
			</motion.div>
		</motion.section>
	);
};

export default CareerSection;

const CareerItem = ({ career }: { career: Activity }) => (
	<motion.li
		initial={{ opacity: 0, x: -20 }}
		animate={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.5, ease: "easeInOut" }}
		className="flex items-center gap-3 text-muted-foreground"
	>
		<span className="w-2 h-2 rounded-full bg-[var(--color-career-gold)]" />{" "}
		<span>{career.title}</span>
	</motion.li>
);