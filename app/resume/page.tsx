"use client"

export default function ResumePage() {
  const experience = [
    {
      role: "Senior Marketing Strategist",
      company: "Digital Growth Agency",
      period: "2020 - Present",
      achievements: [
        "Led digital marketing campaigns for 20+ enterprise clients",
        "Achieved average ROI of 300% across all client campaigns",
        "Developed innovative social media strategies"
      ]
    },
    {
      role: "Marketing Manager",
      company: "Tech Solutions Inc.",
      period: "2018 - 2020",
      achievements: [
        "Managed a team of 5 marketing professionals",
        "Increased company's social media presence by 200%",
        "Implemented successful influencer marketing programs"
      ]
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Professional Experience</h1>
      <div className="space-y-8">
        {experience.map((job, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <h2 className="mb-2 text-2xl font-bold text-primary">{job.role}</h2>
            <div className="mb-4 text-lg font-medium text-gray-600 dark:text-gray-400">
              {job.company} • {job.period}
            </div>
            <ul className="list-inside list-disc space-y-2 text-gray-600 dark:text-gray-400">
              {job.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}