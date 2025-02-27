const career = [
  {
    name:'html',
    level:90,
  }
]

export default function Career() {
  return (
    <section id="career" className="py-20 bg-secondary text-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">경력</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {career.map((skill, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-primary rounded-full h-2.5">
                <div className="bg-tertiary h-2.5 rounded-full" style={{ width: `${skill.level}%` }}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
