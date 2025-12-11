import Navigation from '@/components/Navigation'
import HomePage from '@/components/HomePage'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <HomePage />
      </main>
      <Footer />
    </div>
  )
}