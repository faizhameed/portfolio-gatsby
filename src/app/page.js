import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import YouTubeSection from '@/components/YouTubeSection'
import BlogSection from '@/components/BlogSection'

export default function Home() {
  return (
    <div className="bg-background-light dark:bg-background-dark text-heading-light dark:text-heading-dark font-body antialiased min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <main className="space-y-24 md:space-y-32 my-12">
          <Hero />
          <AboutSection />
          <YouTubeSection />
          <BlogSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

