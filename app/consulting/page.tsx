'use client';

import { consultings } from '../mock/data';
// import Image from 'next/image';
import Link from 'next/link';

export default function Consulting() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <section className="relative bg-[var(--color-consulting-sky)] text-white py-24">
        <div className="container mx-auto px-4 pt-6">
          <h1 className="text-4xl font-bold mb-4">컨설팅 서비스</h1>
          <p className="text-xl opacity-90">
            전문적인 1:1 맞춤 컨설팅으로 스피치 실력 향상
          </p>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 py-12">
        {/* 서비스 소개 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 서비스 설명 */}
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900">
                맞춤형 스피치 컨설팅
              </h2>
              <div className="prose max-w-none space-y-4">
                <p className="text-lg text-gray-600">
                  다양한 현장 경험을 바탕으로 한 실전 중심의 컨설팅을 제공합니다.
                  면접, 프레젠테이션, PR 등 목적에 맞는 맞춤형 프로그램으로
                  진행됩니다.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-consulting-sky)] flex items-center justify-center text-white">
                      <span className="text-2xl">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">1:1 맞춤 컨설팅</h3>
                      <p className="text-gray-600">개인의 목표와 수준에 맞춘 맞춤형 프로그램</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-consulting-sky)] flex items-center justify-center text-white">
                      <span className="text-2xl">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">실전 연습</h3>
                      <p className="text-gray-600">실제 상황을 가정한 실전 연습과 피드백</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-full bg-[var(--color-consulting-sky)] flex items-center justify-center text-white">
                      <span className="text-2xl">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">전문가 피드백</h3>
                      <p className="text-gray-600">현직 전문가의 디테일한 피드백</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <Link 
                  href="/contact"
                  className="inline-block bg-[var(--color-consulting-sky)] text-white px-8 py-3 rounded-lg hover:bg-[var(--color-consulting-sky)]/90 transition-colors"
                >
                  상담 문의하기
                </Link>
              </div>
            </div>

            {/* 컨설팅 실적 */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6">주요 컨설팅 실적</h3>
              <div className="space-y-6">
                {consultings.map((consulting, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-[var(--color-consulting-sky)]/10 flex items-center justify-center text-[var(--color-consulting-sky)]">
                      <span className="font-semibold">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-gray-900">{consulting}</p>
                      <div className="mt-2 flex gap-2">
                        <span className="px-2 py-1 bg-[var(--color-consulting-sky)]/10 text-[var(--color-consulting-sky)] rounded text-sm">
                          스피치 컨설팅
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 컨설팅 프로세스 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">컨설팅 진행 프로세스</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: '01',
                title: '상담 신청',
                desc: '간단한 문의 폼을 통해 상담 신청'
              },
              {
                step: '02',
                title: '일정 조율',
                desc: '맞춤형 스케줄 조정 및 확정'
              },
              {
                step: '03',
                title: '컨설팅 진행',
                desc: '1:1 맞춤형 컨설팅 진행'
              },
              {
                step: '04',
                title: '피드백 및 보완',
                desc: '상세한 피드백과 보완점 제시'
              }
            ].map((item) => (
              <div 
                key={item.step}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-[var(--color-consulting-sky)] text-4xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}