import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="relative min-h-[70vh] py-12 lg:py-0 flex items-center bg-gradient-to-r from-brand-red/10 to-white">
			<div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
				<div className="lg:w-1/2 space-y-6 text-center lg:text-left">
					<h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
						박채은
					</h1>
					<p className="text-xl text-gray-600">
						특별한 순간, 풍부한 경험과 신뢰도 높은 18년 차 아나운서가 함께
						하겠습니다.
					</p>
					<div className="my-12" />
					<Link
						href="contact"
						className="btn-primary px-8 py-4 rounded-full text-lg"
					>
						지금 상담하기
					</Link>
				</div>
				<div className="lg:w-1/2 relative">
					<div className="w-[280px] h-[400px] lg:w-[450px] lg:h-[600px] relative mx-auto">
						<Image
							src="/pictures/01.jpg"
							alt="박채은 강사"
							fill
							className="rounded-2xl object-cover shadow-xl"
							priority
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
