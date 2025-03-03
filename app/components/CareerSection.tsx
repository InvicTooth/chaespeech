import { mainCareer } from '../mock/data';

export default function Career() {
  return (
    <section id="career" className="py-20 bg-blue-900/80">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">주요 경력</h2>
        <div className="max-w-3xl mx-auto timeline-item">
          {mainCareer.map((career, index) => (
            <div key={index} className="flex gap-6 mb-4">
              <div className="pl-4">
                <p className="text-lg text-white">{career}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
