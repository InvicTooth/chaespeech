"use client"
import Link from "next/link"
import { useEffect } from "react"
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function Header() {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    for(const link of links) {
      link.addEventListener("click", smoothScroll)
    }

    return () => {
      for(const link of links) {
        link.removeEventListener("click", smoothScroll);
      }
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary bg-opacity-90 text-quaternary">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          <li>
            <a href="#hero" className="hover:text-tertiary transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-tertiary transition-colors">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-tertiary transition-colors">
              Skills
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-tertiary transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-tertiary transition-colors">
              Testimonials
            </a>
          </li>
          {/* <li>
            <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
          </li> */}
        </ul>
        
      </nav>
    </header>
  )
}

