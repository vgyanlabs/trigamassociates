"use client"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">About Us</h1>
      <div className="prose prose-lg dark:prose-invert">
        <p>
          We are a dedicated team of marketing professionals committed to helping businesses grow their digital presence
          and achieve their marketing goals.
        </p>
        <h2>Our Mission</h2>
        <p>
          To provide innovative and effective marketing solutions that drive real results for our clients through
          data-driven strategies and creative excellence.
        </p>
        <h2>Our Values</h2>
        <ul>
          <li>Innovation in every campaign</li>
          <li>Data-driven decision making</li>
          <li>Transparent communication</li>
          <li>Continuous improvement</li>
        </ul>
      </div>
    </div>
  )
}