import Link from 'next/link';
import { mainCareer, etcCareer, events } from './mock/data';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] py-12 lg:py-0 flex items-center bg-gradient-to-r from-brand-red/10 to-white">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              박채은
            </h1>
            <p className="text-xl text-gray-600">
              특별한 순간, 풍부한 경험과 신뢰도 높은 18년 차 아나운서가 함께  하겠습니다.
            </p>
            <div className='my-12' />
            <Link href="contact" className="btn-primary px-8 py-4 rounded-full text-lg">
              지금 상담하기
            </Link>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="w-[280px] h-[400px] lg:w-[450px] lg:h-[600px] relative mx-auto">
              <Image
                src="/pictures/01.jpg"
                alt="박채은 강사"
                fill
                className="rounded-2xl object-cover shadow-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[var(--color-career-navy)] mb-8">경력</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Current Positions */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-8 border-t-4 border-[var(--color-career-navy)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-career-navy)]">
              주요 경력
            </h3>
            <div className="space-y-4">
              {mainCareer.slice(0, 3).map((career, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-career-gold)]" />
                  <p>{career}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Other Career Highlights */}
          <div className="lg:col-span-1 bg-white rounded-xl shadow-lg p-8 border-t-4 border-[var(--color-career-gold)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-2xl font-bold mb-6 text-[var(--color-career-navy)]">기타 경력</h3>
            <div className="space-y-4">
              {etcCareer.slice(0, 3).map((career, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-career-gold)]" />
                  <p>{career}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/career" className="inline-block px-6 py-3 bg-[var(--color-career-navy)] text-white rounded-lg hover:bg-[var(--color-career-navy)]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            전체 경력 보기 →
          </Link>
        </div>
      </section>

      {/* Lectures Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[var(--color-lecture-pink)] mb-8">강의 프로그램</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{ title: '면접 스피치', icon: '👤', desc: '상세1' },
            { title: 'PR 스피치', icon: '🎯', desc: '상세2' },
            { title: '프레젠테이션', icon: '📈', desc: '상세3' },
            ].map((program, index) => (
            <div key={index} className="group bg-white rounded-lg shadow-lg overflow-hidden border-r-4 border-[var(--color-lecture-blue)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[var(--color-lecture-pink)] to-[var(--color-lecture-blue)] group-hover:scale-105 transition-transform duration-300" />
              <div className="p-6">
                <div className="text-center mb-4">
                <span className="inline-block p-3 bg-[var(--color-consulting-sky)]/10 rounded-full text-4xl">
                  {program.icon}
                </span>
              </div>
                <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
                <p className="text-gray-600">{program.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/lectures" className="inline-block px-6 py-3 bg-[var(--color-lecture-pink)] text-white rounded-lg hover:bg-[var(--color-lecture-pink)]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            전체 프로그램 보기 →
          </Link>
        </div>
      </section>

      {/* Events Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[var(--color-event-black)] mb-8">행사 진행</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-[var(--color-event-black)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-gray-50">
              <h3 className="text-xl font-bold mb-4 text-[var(--color-event-black)]">
                {category.type.replace(/^\d+\.\s/, '')}
              </h3>
              <ul className="space-y-2">
                {category.list.slice(0, 3).map((event, eventIndex) => (
                  <li key={eventIndex} className="text-gray-600">• {event}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/events" className="inline-block px-6 py-3 bg-[var(--color-event-black)] text-white rounded-lg hover:bg-[var(--color-event-black)]/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            전체 행사 보기 →
          </Link>
        </div>
      </section>

      {/* Consulting Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-[var(--color-consulting-sky)] mb-8">컨설팅 서비스</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: '1:1 맞춤 컨설팅', icon: '👤', desc: '개인별 목표와 수준에 맞춘 프로그램' },
            { title: '실전 연습', icon: '🎯', desc: '실제 상황을 고려한 맞춤형 연습' },
            { title: '전문가 피드백', icon: '✍️', desc: '디테일한 분석과 개선점 제시' },
            { title: '지속적 관리', icon: '📈', desc: '체계적인 성장 관리 시스템' },
          ].map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border-b-4 border-[var(--color-consulting-sky)]"
            >
              <div className="text-center mb-4">
                <span className="inline-block p-3 bg-[var(--color-consulting-sky)]/10 rounded-full text-4xl">
                  {service.icon}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-consulting-sky)] text-center mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link 
            href="/consulting" 
            className="inline-block px-6 py-3 bg-[var(--color-consulting-sky)] text-white rounded-lg hover:bg-[var(--color-consulting-sky)]/90 transition-colors"
          >
            상세 보기 →
          </Link>
        </div>
      </section>

      {/* 주요 실적 섹션 */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          주요 실적
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            icon="🎯"
            value={mainCareer.length + etcCareer.length}
            label="주요 경력"
            color="var(--color-career-navy)"
            unit="건"
          />
          <StatCard 
            icon="👥"
            value={'1500+'}
            label="강의 실적"
            color="var(--color-lecture-pink)"
            unit="건"
          />
          <StatCard 
            icon="🎪"
            value={'100+'}
            label="행사 진행"
            color="var(--color-event-black)"
            unit="건"
          />
          <StatCard 
            icon="⭐"
            value={98}
            label="고객 만족도"
            color="var(--color-consulting-sky)"
            unit="%"
          />
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="text-center bg-brand-red/5 py-16 px-4 rounded-2xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          스피치의 시작, 바로 지금입니다
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          당신의 스피치를 완성해드립니다
        </p>
        <div className='my-12' />
        <Link href="/contact" className="btn-primary px-8 py-4 rounded-full text-lg">
            무료 상담 신청하기
        </Link>
      </section>
    </main>
  );
}

function StatCard({ icon, value, label, unit, color }: {
  icon: string;
  value: string | number;
  label: string;
  unit: string;
  color: string;
}) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow border-t-4" style={{ borderColor: color }}>
      <span className="text-3xl mb-4 block">{icon}</span>
      <div className="flex items-baseline justify-center gap-1 mb-2">
        <span className="text-4xl font-bold" style={{ color }}>{value}</span>
        <span className="text-gray-500">{unit}</span>
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
}

