// import Image from 'next/image'
import { events } from '../mock/data';

export default function Events() {
  return (
    <section id="events" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">행사 진행</h2>
        <div className="max-w-4xl mx-auto">
          {events.map((eventCategory, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <h3 className="text-xl font-semibold mb-6 text-red-400">
                {eventCategory.type}
              </h3>
              <div className="bg-neutral-900 rounded-lg shadow-lg p-8">
                <ul className="space-y-4">
                  {eventCategory.list.map((event, idx) => (
                    <li 
                      key={idx}
                      className="flex items-start text-white"
                    >
                      <span className="text-red-400 mr-3">✓</span>
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
