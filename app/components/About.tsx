import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary text-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            {/* <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1WqtB6s8fBqVGx6bc3gI4nZVp8xkCE.png"
              alt="Nathan Sterling"
              width={400}
              height={400}
              className="rounded-lg mx-auto object-cover"
            /> */}
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="mb-4">
              Hi, I'm Nathan Sterling, a passionate web developer and designer with over 5 years of experience in
              creating beautiful, functional, and user-centered digital experiences.
            </p>
            <p className="mb-4">
              I specialize in building responsive websites and web applications using modern technologies like React,
              Node.js, and Python. My background in both development and design allows me to bridge the gap between
              aesthetics and functionality, ensuring that the websites I create not only look great but also perform
              exceptionally.
            </p>
            <p>
              When I'm not coding or designing, you can find me exploring new technologies, contributing to open-source
              projects, or sharing my knowledge through tech meetups and online communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

