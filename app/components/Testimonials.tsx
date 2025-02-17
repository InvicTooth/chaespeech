const testimonials = [
  {
    name: "Jane Doe",
    company: "Tech Innovators Inc.",
    testimonial:
      "Nathan's expertise in both design and development made our project a breeze. He delivered a stunning website that exceeded our expectations.",
  },
  {
    name: "John Smith",
    company: "Creative Solutions LLC",
    testimonial:
      "Working with Nathan was a pleasure. His attention to detail and problem-solving skills are unmatched. I highly recommend his services.",
  },
  {
    name: "Emily Johnson",
    company: "StartUp Ventures",
    testimonial:
      "Nathan's ability to translate our vision into a functional and beautiful website was impressive. He's a true professional in every sense.",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-tertiary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="mb-4 text-gray-600 italic">"{testimonial.testimonial}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

