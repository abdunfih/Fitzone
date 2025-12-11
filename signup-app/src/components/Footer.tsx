import Link from 'next/link'
import { Dumbbell, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold font-heading bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">
                FitZone Gym
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Transform your fitness journey with our state-of-the-art equipment, certified trainers,
              and personalized fitness programs designed for all levels.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://instagram.com" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
              <a href="https://twitter.com" className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/trainers" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Personal Training
              </Link></li>
              <li><Link href="/plans" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Membership Plans
              </Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Group Classes
              </Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-400 transition-colors duration-200 flex items-center group">
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Facilities
              </Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">+91 98765 43210</a>
                  <p className="text-sm text-gray-500">Mon-Fri: 6AM - 10PM</p>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@fitzonegym.com" className="text-gray-400 hover:text-orange-400 transition-colors duration-200">info@fitzonegym.com</a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">123 Fitness Street<br />Gym City, GC 12345</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">&copy; 2024 FitZone Gym. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">Terms of Service</Link>
              <Link href="/contact" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-200">Support</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}