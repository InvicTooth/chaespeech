import Link from "next/link";

export default function CTASection() {
	return (
		<section className="text-center bg-brand-red/5 py-16 px-4 rounded-2xl">
			<h2 className="text-3xl font-bold text-gray-900 mb-4">
				스피치의 시작, 바로 지금입니다
			</h2>
			<p className="text-xl text-gray-600 mb-8">
				당신의 스피치를 완성해드립니다
			</p>
			<div className="my-12" />
			<Link
				href="/contact"
				className="btn-primary px-8 py-4 rounded-full text-lg"
			>
				무료 상담 신청하기
			</Link>
		</section>
	);
}
