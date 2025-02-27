import Image from "next/image"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-primary text-quaternary pt-20">
      <div className="container mx-auto px-6 py-24 md:flex md:items-center">
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">박채은</h1>
          <h2 className="text-2xl md:text-3xl mb-6">아나운서</h2>
          <p className="text-lg mb-8">특별한 순간, 풍부한 경험과 신뢰도 높은 18년차 아나운서가 함께 하겠습니다</p>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0">
          <Image
            src={"/pictures/01.jpg"}
            alt="박채은"
            width={400}
            height={400}
            className="rounded-4xl mx-auto object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}

