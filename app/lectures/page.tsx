import { lectures } from '../mock/data';

export default function Lectures() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 히어로 섹션 */}
      <section className="bg-[var(--color-lecture-pink)] text-white py-24">
        <div className="container mx-auto px-4 pt-6">
          <h1 className="text-4xl font-bold mb-4">강의 프로그램</h1>
          <p className="text-xl opacity-90">
            실전 경험을 바탕으로 한 체계적인 스피치 교육
          </p>
        </div>
      </section>

      {/* 메인 콘텐츠 */}
      <div className="container mx-auto px-4 pt-12">
        {/* 주요 강의 영역 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">주요 강의 프로그램</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['면접 스피치', 'PR 스피치', '프레젠테이션'].map((program) => (
              <div key={program} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                  {/* 강의 대표 이미지 영역 */}
                  <div className="w-full h-48 bg-[var(--color-lecture-pink)] opacity-80" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{program}</h3>
                  <p className="text-gray-600 mb-4">
                    실전 경험을 바탕으로 한 맞춤형 교육 프로그램
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[var(--color-lecture-blue)/10] text-[var(--color-lecture-blue)] rounded-full text-sm">
                      1:1 맞춤형
                    </span>
                    <span className="px-3 py-1 bg-[var(--color-lecture-blue)/10] text-[var(--color-lecture-blue)] rounded-full text-sm">
                      실전 연습
                    </span>
                  </div>
                  <button className="w-full bg-[var(--color-lecture-blue)] text-white py-2 rounded-lg hover:bg-[var(--color-lecture-blue)]/90 transition-colors"type="button">
                    자세히 보기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 강의 실적 영역 */}
        <section className='mb-16'>
          <h2 className="text-2xl font-bold mb-8">주요 강의 실적</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {lectures.map((lecture, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--color-lecture-pink)] flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-lg">{lecture}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {lecture.includes('스피치') && (
                        <span className="px-2 py-1 bg-[var(--color-lecture-pink)]/10 text-[var(--color-lecture-pink)] rounded-full text-sm">
                          스피치
                        </span>
                      )}
                      {lecture.includes('커뮤니케이션') && (
                        <span className="px-2 py-1 bg-[var(--color-lecture-blue)]/10 text-[var(--color-lecture-blue)] rounded-full text-sm">
                          커뮤니케이션
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
