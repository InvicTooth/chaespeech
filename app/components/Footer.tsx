'use client';
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function Footer() {
  const currentPath = usePathname();

  return (
    <footer className={clsx("border-t border-gray-200 py-8",
          {
            'brand-header' : currentPath === "/",
            'career-header' : currentPath === "/career",
            'lecture-header' : currentPath === "/lectures",
            'event-header' : currentPath === "/events",
            'consulting-header' : currentPath === "/consulting",
            'contact-header' : currentPath === "/contact",
          },
        )}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 왼쪽: 사업자 정보 */}
          <div className="space-y-2 text-center md:text-left">
            <h2 className="font-bold text-lg mb-2">박채은의 기분좋은 스피치</h2>
            <p>박채은</p>
            <p>사업자등록번호: 123-45-67890</p>
            <p>경상남도 김해시 다현빌딩 1층</p>
          </div>

          {/* 가운데: 연락처 정보 및 SNS */}
          <div className="flex flex-col items-center space-y-2">
            <div className="flex gap-4 mb-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F25F5C] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="Instagram">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#F25F5C] transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="YouTube">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
            <p className="font-medium">010-1234-5678</p>
            <p>chaespeech@naver.com</p>
          </div>

          {/* 오른쪽: 계좌 정보 */}
          <div className="space-y-2 text-center md:text-right">
            <h3 className="font-bold text-lg mb-2">입금계좌 안내</h3>
            <p>신한은행</p>
            <p>110-123-456789</p>
            <p>예금주: 박채은</p>
          </div>
        </div>
        
        {/* 저작권 정보 - 하단에 별도로 배치 */}
        <div className="text-center text-sm text-white mt-8 pt-4 border-t border-gray-200">
          &copy; {new Date().getFullYear()} 박채은의 기분좋은 스피치. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

