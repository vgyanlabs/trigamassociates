"use client"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Social Media Growth Campaign",
      description: "Increased social media engagement by 300% for a leading e-commerce brand",
      category: "Social Media Marketing"
    },
    {
      title: "Influencer Marketing Success",
      description: "Coordinated with 50+ influencers to reach 2M+ audience for product launch",
      category: "Influencer Marketing"
    },
    {
      title: "META Ads Optimization",
      description: "Reduced cost per acquisition by 40% through strategic ad optimization",
      category: "Paid Advertising"
    }
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Our Projects</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="mb-2 text-sm font-medium text-primary">{project.category}</div>
            <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}