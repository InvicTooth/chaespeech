'use client';

import { mainCareer, etcCareer } from '../mock/data';

export default function Career() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <section className="bg-[var(--color-career-navy)] text-white py-24">
        <div className="container mx-auto px-4 pt-6">
          <h1 className="text-4xl font-bold mb-4">경력 소개</h1>
          <p className="text-xl opacity-90">
            다양한 현장에서 쌓아온 전문성과 경험
          </p>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 py-12">
        {/* 주요 경력 섹션 */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 경력 요약 카드 */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-8 sticky top-8">
                <h2 className="text-2xl font-bold mb-6 text-[var(--color-career-navy)]">
                  Current Position
                </h2>
                <div className="space-y-4">
                  {mainCareer.slice(0, 3).map((career, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <div className="w-2 h-2 rounded-full bg-[var(--color-career-gold)]" />
                      <p>{career}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 상세 경력 타임라인 */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold mb-8 text-[var(--color-career-navy)]">주요 경력</h2>
              <div className="space-y-6">
                {mainCareer.map((career, index) => (
                  <div 
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-[var(--color-career-gold)] last:border-0"
                  >
                    <div className="absolute left-[-9px] top-0">
                      <div className="w-4 h-4 rounded-full bg-[var(--color-career-gold)]" />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                      <p className="text-gray-800">{career}</p>
                      <div className="mt-3 flex gap-2">
                        {career.includes('현)') && (
                          <span className="px-2 py-1 text-sm bg-[var(--color-career-navy)] text-white rounded">
                            현재
                          </span>
                        )}
                        {career.includes('전)') && (
                          <span className="px-2 py-1 text-sm bg-gray-200 text-gray-700 rounded">
                            이전
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 기타 경력 섹션 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">기타 경력 및 자격</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {etcCareer.map((career, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[var(--color-career-navy)]/10 flex items-center justify-center text-[var(--color-career-navy)]">
                    <span className="font-semibold">{index + 1}</span>
                  </div>
                  <div>
                    <p className="text-gray-800">{career}</p>
                    <div className="mt-2">
                      {career.includes('현)') && (
                        <span className="px-2 py-1 text-sm bg-[var(--color-career-navy)]/10 text-[var(--color-career-navy)] rounded">
                          진행중
                        </span>
                      )}
                      {career.includes('자격증') && (
                        <span className="px-2 py-1 text-sm bg-[var(--color-career-gold)]/10 text-[var(--color-career-gold)] rounded">
                          자격증
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
