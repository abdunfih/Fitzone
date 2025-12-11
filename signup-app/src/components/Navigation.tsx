'use client'

import Link from 'next/link'
import { useSession, signOut } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { Menu, X, Dumbbell } from 'lucide-react'

export default function Navigation() {
  const { data: session, status } = useSession()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-heading bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                FitZone
              </span>
            </Link>
            <div className="hidden md:ml-12 md:flex md:space-x-1">
              <Link href="/" className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200 group">
                Home
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link href="/trainers" className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200 group">
                Trainers
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link href="/plans" className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200 group">
                Plans
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
              <Link href="/contact" className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors duration-200 group">
                Contact
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200"></span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {status === 'loading' ? (
              <div className="text-gray-500 text-sm">Loading...</div>
            ) : session ? (
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-gray-700 text-sm font-medium">Welcome, {session.user?.name}</span>
                <button
                  onClick={() => signOut()}
                  className="bg-gradient-to-r from-red-600 to-red-700 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center space-x-3">
                <Link href="/login" className="text-gray-700 hover:text-orange-600 px-4 py-2 text-sm font-medium transition-colors duration-200">
                  Sign In
                </Link>
                <Link href="/signup" className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                  Join Now
                </Link>
              </div>
            )}
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-fade-in">
          <div className="px-4 py-6 space-y-3">
            <Link href="/" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-200">
              Home
            </Link>
            <Link href="/trainers" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-200">
              Trainers
            </Link>
            <Link href="/plans" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-200">
              Plans
            </Link>
            <Link href="/contact" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors duration-200">
              Contact
            </Link>
            {session ? (
              <>
                <div className="px-4 py-2 text-sm text-gray-600">Welcome, {session.user?.name}</div>
                <button
                  onClick={() => signOut()}
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-3 rounded-lg text-base font-semibold hover:from-red-700 hover:to-red-800 transition-all duration-200"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  Sign In
                </Link>
                <Link href="/signup" className="block bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-3 rounded-lg text-base font-semibold text-center hover:from-orange-700 hover:to-red-700 transition-all duration-200">
                  Join Now
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}