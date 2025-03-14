import Link from "next/link";
import { mainCareer, etcCareer } from "@/app/mock/data";
import * as motion from "motion/react-client";

const CareerSection = () => {
	return (
		<motion.section
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="mb-20 text-[var(--color-career-navy)]"
		>
			<motion.h2 className="text-title mb-8">경력</motion.h2>
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 gap-8"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, ease: "easeInOut", staggerChildren: 0.2 }}
			>
				<motion.div className="bg-card rounded-xl shadow-lg p-8 border-t-4 border-[var(--color-career-gold)] hover:shadow-xl transition-smooth hover-lift">
					<motion.h3 className="text-2xl font-bold mb-6">주요 경력</motion.h3>
					<ul className="space-y-4">
						{mainCareer.slice(0, 3).map((career, index) => (
							<CareerItem key={index} career={career} />
						))}
					</ul>
				</motion.div>
				<motion.div className="bg-card rounded-xl shadow-lg p-8 border-t-4 border-[var(--color-career-gold)] hover:shadow-xl transition-smooth hover-lift">
					<motion.h3 className="text-2xl font-bold mb-6">기타 경력</motion.h3>
					<ul className="space-y-4">
						{etcCareer.slice(0, 3).map((career, index) => (
							<CareerItem key={index} career={career} />
						))}
					</ul>
				</motion.div>
			</motion.div>
			<motion.div className="text-center mt-8">
				<Link
					href="/career"
					className="btn-primary hover:bg-opacity-90 transition-smooth hover-lift px-6 py-4 rounded-lg bg-[var(--color-career-navy)]"
				>
					전체 경력 보기 →
				</Link>
			</motion.div>
		</motion.section>
	);
};

export default CareerSection;

const CareerItem = ({ career }: { career: string }) => (
	<motion.li
		initial={{ opacity: 0, x: -20 }}
		animate={{ opacity: 1, x: 0 }}
		transition={{ duration: 0.5, ease: "easeInOut" }}
		className="flex items-center gap-3 text-muted-foreground"
	>
		<span className="w-2 h-2 rounded-full bg-[var(--color-career-gold)]"/>{" "}
		<span>{career}</span>
	</motion.li>
);