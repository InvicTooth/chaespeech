'use client';

import { events } from '../mock/data';
// import Image from 'next/image';
import { useState } from 'react';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = events.map(event => event.type);
  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.type === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <section className="bg-[var(--color-event-black)] text-white py-24">
        <div className="container mx-auto px-4 pt-6">
          <h1 className="text-4xl font-bold mb-4">행사 진행</h1>
          <p className="text-xl opacity-90">
            다양한 무대에서 쌓아온 진행 경험
          </p>
        </div>
      </section>

      {/* 카테고리 필터 */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === 'all'
                ? 'bg-[var(--color-event-black)] text-white'
                : 'bg-white border border-gray-300 hover:bg-gray-100'
            }`}
            type="button"
          >
            전체보기
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-[var(--color-event-black)] text-white'
                  : 'bg-white border border-gray-300 hover:bg-gray-100'
              }`}
              type="button"
            >
              {category.replace(/^\d+\.\s/, '')} {/* 숫자와 점 제거 */}
            </button>
          ))}
        </div>

        {/* 이벤트 목록 */}
        <div className="space-y-12">
          {filteredEvents.map((eventCategory, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-6 text-[var(--color-event-black)]">
                {eventCategory.type.replace(/^\d+\.\s/, '')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {eventCategory.list.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="group relative bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                  >
                    {/* 이벤트 썸네일 (예시 이미지) */}
                    <div className="relative h-48 bg-gray-200">
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                    </div>
                    {/* 이벤트 정보 */}
                    <div className="p-4">
                      <h3 className="font-medium text-lg mb-2 line-clamp-2">
                        {event}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="px-2 py-1 bg-gray-100 rounded">
                          {eventCategory.type.includes('정부') ? '공식행사' : 
                           eventCategory.type.includes('창업') ? '창업행사' :
                           eventCategory.type.includes('토크') ? '토크콘서트' :
                           eventCategory.type.includes('음악') ? '문화행사' :
                           eventCategory.type.includes('개막식') ? '행사진행' :
                           eventCategory.type.includes('홍보') ? '홍보영상' : '기타'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}