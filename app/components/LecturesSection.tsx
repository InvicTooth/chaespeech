// import Image from 'next/image'
import { lectures } from '../mock/data';

export default function Lectures() {
  return (
    <section id="lectures" className="py-20 bg-blue-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">강의</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-pink-50 rounded-lg shadow-lg p-8">
            <ul className="space-y-4">
              {lectures.map((lecture, index) => (
                <li 
                  key={index}
                  className="flex items-start text-neutral-800"
                >
                  <span className="text-pink-500 mr-3">✓</span>
                  {lecture}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
