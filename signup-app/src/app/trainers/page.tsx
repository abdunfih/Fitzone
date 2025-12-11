'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Trainer {
  id: number
  name: string
  specialty: string
  bio: string
  experience: string
  certifications: string[]
  image: string
  social: {
    instagram?: string
    facebook?: string
    twitter?: string
  }
}

const trainers: Trainer[] = [
  {
    id: 1,
    name: "Alex Rodriguez",
    specialty: "Strength Training",
    bio: "Certified personal trainer with 8 years of experience in strength training and muscle building. Specializes in helping clients achieve their fitness goals through personalized workout plans.",
    experience: "8 years",
    certifications: ["NASM-CPT", "ACE Strength Specialist", "Precision Nutrition Level 1"],
    image: "https://images.unsplash.com/photo-1669504243706-1df1f8d5dacd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw2fHxmaXRuZXNzJTIwdHJhaW5lciUyMGF0aGxldGljJTIwbWFuJTIwZ3ltJTIwY29hY2h8ZW58MHwxfHx8MTc2MTMyMjg3M3ww&ixlib=rb-4.1.0&q=85",
    social: {
      instagram: "@alexstrength",
      facebook: "alexrodriguezfitness"
    }
  },
  {
    id: 2,
    name: "Sarah Johnson",
    specialty: "Yoga & Pilates",
    bio: "Registered Yoga Teacher (RYT 500) with a passion for helping people find balance and flexibility. Specializes in Vinyasa flow, Hatha, and therapeutic yoga.",
    experience: "6 years",
    certifications: ["RYT 500", "Pilates Mat Certification", "Yoga Therapy"],
    image: "https://images.unsplash.com/photo-1679076875671-a30b4dbc6016?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw5fHx5b2dhJTIwaW5zdHJ1Y3RvciUyMHdvbWFuJTIwZml0bmVzcyUyMHBlYWNlZnVsfGVufDB8MXx8fDE3NjEzMjI4NzN8MA&ixlib=rb-4.1.0&q=85",
    social: {
      instagram: "@sarahyoga",
      facebook: "sarahjohnsonyoga"
    }
  },
  {
    id: 3,
    name: "Mike Chen",
    specialty: "Cardio & HIIT",
    bio: "High-intensity interval training specialist focused on cardiovascular health and endurance. Helps clients burn fat and build stamina through dynamic workout routines.",
    experience: "5 years",
    certifications: ["NASM-CPT", "HIIT Specialist", "TRX Suspension Training"],
    image: "https://images.unsplash.com/photo-1649440100794-0776df1177b0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwzfHxmaXRuZXNzJTIwdHJhaW5lciUyMGF0aGxldGljJTIwbWFuJTIwY2FyZGlvJTIwZW5lcmdldGljfGVufDB8MXx8fDE3NjEzMjI4NzN8MA&ixlib=rb-4.1.0&q=85",
    social: {
      instagram: "@mikecardio",
      twitter: "mikechenfitness"
    }
  },
  {
    id: 4,
    name: "Emma Williams",
    specialty: "Weight Loss",
    bio: "Certified nutrition coach and personal trainer specializing in sustainable weight loss and lifestyle changes. Focuses on building healthy habits that last a lifetime.",
    experience: "7 years",
    certifications: ["NASM-CPT", "Precision Nutrition Level 2", "Weight Management Specialist"],
    image: "https://images.unsplash.com/photo-1683848644078-f339179c4ff6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw1fHxmZW1hbGUlMjB0cmFpbmVyJTIwZml0bmVzcyUyMGNvYWNoJTIwZnJpZW5kbHklMjBwcm9mZXNzaW9uYWx8ZW58MHwxfHx8MTc2MTMyMjg3M3ww&ixlib=rb-4.1.0&q=85",
    social: {
      instagram: "@emmaweightloss",
      facebook: "emmawilliamsfitness"
    }
  },
  {
    id: 5,
    name: "David Martinez",
    specialty: "CrossFit",
    bio: "CrossFit Level 2 Trainer with expertise in functional fitness and Olympic weightlifting. Helps athletes of all levels improve their performance and technique.",
    experience: "9 years",
    certifications: ["CrossFit Level 2", "Olympic Weightlifting", "Movement & Mobility"],
    image: "https://images.unsplash.com/photo-1680759170077-e9e2d838a34c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxjcm9zc2ZpdCUyMHRyYWluZXIlMjB3ZWlnaHRsaWZ0aW5nJTIwc3Ryb25nJTIwbWFuJTIwZ3ltfGVufDB8MXx8fDE3NjEzMjI4NzN8MA&ixlib=rb-4.1.0&q=85",
    social: {
      instagram: "@davidcrossfit",
      twitter: "davidmartinezcf"
    }
  },
  {
    id: 6,
    name: "Lisa Thompson",
    specialty: "Rehabilitation",
    bio: "Corrective exercise specialist focused on injury prevention and rehabilitation. Works with clients recovering from injuries to regain strength and mobility.",
    experience: "10 years",
    certifications: ["NASM-CES", "Corrective Exercise Specialist", "Rehabilitation Specialist"],
    image: "https://images.unsplash.com/photo-1717500251688-1c369ec2ab44?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxwaHlzaWNhbCUyMHRoZXJhcGlzdCUyMGZlbWFsZSUyMHRyYWluZXIlMjBwcm9mZXNzaW9uYWwlMjBjYXJpbmd8ZW58MHwxfHx8MTc2MTMyMjg3N3ww&ixlib=rb-4.1.0&q=85",
    social: {
      instagram: "@lisarehab",
      facebook: "lisathompsonfitness"
    }
  }
]

const categories = ["All", "Strength Training", "Yoga & Pilates", "Cardio & HIIT", "Weight Loss", "CrossFit", "Rehabilitation"]

export default function TrainersPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredTrainers, setFilteredTrainers] = useState(trainers)

  const filterTrainers = (category: string) => {
    setSelectedCategory(category)
    if (category === "All") {
      setFilteredTrainers(trainers)
    } else {
      setFilteredTrainers(trainers.filter(trainer => trainer.specialty === category))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTI2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-xl text-white mb-6 animate-fade-in">Meet Our Expert Trainers</h1>
            <p className="body-lg text-white/90 max-w-3xl mx-auto animate-slide-up">
              Our certified trainers are here to help you achieve your fitness goals with personalized guidance and support.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="py-8 bg-white shadow-md sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => filterTrainers(category)}
                className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg shadow-orange-500/50'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Trainers Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTrainers.map((trainer, index) => (
              <div 
                key={trainer.id} 
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={trainer.image} 
                    alt={`${trainer.name} - ${trainer.specialty} trainer`}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                      {trainer.specialty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-sm text-gray-900 mb-2">{trainer.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{trainer.bio}</p>
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">Experience: <span className="text-orange-600">{trainer.experience}</span></p>
                    <div className="flex flex-wrap gap-2">
                      {trainer.certifications.slice(0, 2).map((cert, index) => (
                        <span key={index} className="bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
                          {cert}
                        </span>
                      ))}
                      {trainer.certifications.length > 2 && (
                        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                          +{trainer.certifications.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex space-x-3">
                      {trainer.social.instagram && (
                        <a href={`https://instagram.com/${trainer.social.instagram}`} 
                           className="w-9 h-9 bg-gray-100 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                          <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.63c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                      {trainer.social.facebook && (
                        <a href={`https://facebook.com/${trainer.social.facebook}`} 
                           className="w-9 h-9 bg-gray-100 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                          <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                        </a>
                      )}
                      {trainer.social.twitter && (
                        <a href={`https://twitter.com/${trainer.social.twitter}`} 
                           className="w-9 h-9 bg-gray-100 hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 rounded-lg flex items-center justify-center transition-all duration-300 group">
                          <svg className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      )}
                    </div>
                    <Link 
                      href="/contact"
                      className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTI2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="body-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Book a consultation with one of our expert trainers today!
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:-translate-y-1"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}