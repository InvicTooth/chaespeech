import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-stack e-commerce solution for electronic products, featuring a modern UI and seamless shopping experience.",
    // image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-zqpHhsf81oPZVOdUA76ZWnojTvnpFN.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "Agency Website",
    description: "A dark-themed, modern agency website with dynamic animations and creative portfolio showcase.",
    // image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XBQiY8S0RicSuHjJrGUi6RxTSeYqDd.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "Task Management App",
    description:
      "A minimal, intuitive task management mobile app with calendar integration and team collaboration features.",
    // image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yWmQwH731Kf47Yedzhh115n7817YSJ.png",
    tags: ["React Native", "TypeScript", "Node.js"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index}>
              <div className="relative h-48 md:h-64">
                {/* <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" /> */}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

