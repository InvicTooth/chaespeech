"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Menu } from 'lucide-react';
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentPath = usePathname();

  const navLinks = [
    { href: "/career", label: "경력"},
    { href: "/lectures", label: "강의 분야"},
    { href: "/events", label: "행사 진행"},
    { href: "/consulting", label: "컨설팅"},
    { href: "/contact", label: "문의"},
  ];


  return (
    <header className={clsx('fixed w-full z-50 text-event-white',
      {
        'brand-header' : currentPath === "/",
        'career-header' : currentPath === "/career",
        'lecture-header' : currentPath === "/lectures",
        'event-header' : currentPath === "/events",
        'consulting-header' : currentPath === "/consulting",
        'contact-header' : currentPath === "/contact",
      },
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* 로고 */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-3xl font-bold text-event-white italic">
              ChaeSpeech
            </Link>
          </div>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-event-white hover:text-brand-dark transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* 모바일 햄버거 메뉴 */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-event-white hover:bg-brand-dark focus:outline-none"
              aria-label="메뉴 열기"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* 모바일 메뉴 드롭다운 */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-dark rounded-b-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-event-white hover:bg-brand-red transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}