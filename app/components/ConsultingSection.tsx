// import Image from 'next/image'
import { consultings } from '../mock/data';

export default function Consulting() {
  return (
    <section id="consulting" className="py-20 bg-sky-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">컨설팅</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-yellow-50 rounded-lg shadow-lg p-8">
            <ul className="space-y-4">
              {consultings.map((consulting, index) => (
                <li 
                  key={index}
                  className="flex items-start text-neutral-800"
                >
                  <span className="text-sky-500 mr-3">✓</span>
                  {consulting}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
