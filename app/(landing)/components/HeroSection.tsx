import Image from "next/image";
import * as motion from "motion/react-client";
import Link from "next/link";

const HeroSection = () => {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: { opacity: 1, transition: { duration: 0.5 } },
	};

	return (
		<motion.section
			variants={containerVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true }}
			className="relative min-h-[70vh] py-12 lg:py-0 flex items-center" // Using CSS variables
		>
			<div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
				<div className="lg:w-1/2 space-y-6 text-center lg:text-left">
					<motion.h1
						variants={{
							hidden: { y: 50, opacity: 0 },
							visible: {
								y: 0,
								opacity: 1,
								transition: { duration: 0.8, delay: 0.2 },
							},
						}}
						initial="hidden"
						animate="visible"
						className="text-4xl lg:text-6xl font-bold text-foreground" // Using CSS variables
					>
						박채은
					</motion.h1>
					<motion.p
						variants={{
							hidden: { y: 50, opacity: 0 },
							visible: {
								y: 0,
								opacity: 1,
								transition: { duration: 0.8, delay: 0.4 },
							},
						}}
						initial="hidden"
						animate="visible"
						className="text-xl text-muted-foreground" // Using CSS variables
					>
						특별한 순간, 풍부한 경험과 신뢰도 높은 18년 차 아나운서가 함께
						하겠습니다.
					</motion.p>
					<motion.div
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { duration: 0.8, delay: 0.6 },
							},
						}}
						initial="hidden"
						animate="visible"
						className="my-12"
					/>
					<motion.div
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { duration: 0.8, delay: 0.6 },
							},
						}}
						initial="hidden"
						animate="visible"
					>
						<Link
							href="/contact"
							className="btn-primary px-8 py-4 rounded-full text-lg text-primary-foreground"
						>
							지금 상담하기
						</Link>
					</motion.div>
				</div>
				<div className="lg:w-1/2 relative">
					<div className="w-[280px] h-[400px] lg:w-[450px] lg:h-[600px] relative mx-auto">
						<Image
							src="/pictures/01.jpg"
							alt="박채은 강사"
							sizes="100vw"
							fill
							className="rounded-2xl object-cover shadow-xl"
							priority
						/>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default HeroSection;
