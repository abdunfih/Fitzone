'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

interface Plan {
  id: number
  name: string
  price: number
  period: string
  features: string[]
  popular: boolean
  description: string
}

const plans: Plan[] = [
  {
    id: 1,
    name: "Basic",
    price: 29,
    period: "per month",
    popular: false,
    description: "Perfect for beginners just starting their fitness journey",
    features: [
      "Access to gym equipment",
      "Locker room access",
      "Basic workout plan",
      "Monthly fitness assessment",
      "Gym hours access"
    ]
  },
  {
    id: 2,
    name: "Standard",
    price: 59,
    period: "per month",
    popular: true,
    description: "Great for regular gym-goers looking for more support",
    features: [
      "Everything in Basic",
      "Group classes access",
      "Nutrition consultation",
      "Progress tracking",
      "Priority booking",
      "Guest passes (2/month)"
    ]
  },
  {
    id: 3,
    name: "Premium",
    price: 99,
    period: "per month",
    popular: false,
    description: "For serious athletes and those wanting personalized attention",
    features: [
      "Everything in Standard",
      "Personal training sessions (4/month)",
      "Custom workout program",
      "Meal planning support",
      "24/7 gym access",
      "Unlimited guest passes",
      "Advanced body composition analysis"
    ]
  }
]

export default function PlansPage() {
  const { data: session, status } = useSession()
  const [selectedPlan, setSelectedPlan] = useState<number | null>(null)

  const handleSelectPlan = (planId: number) => {
    setSelectedPlan(planId)
  }

  const handleJoinNow = (planId: number) => {
    if (!session) {
      // Redirect to login if not authenticated
      window.location.href = '/login'
      return
    }
    // Handle plan selection logic here
    console.log(`Selected plan: ${planId}`)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header */}
      <div className="relative bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTI2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="heading-xl text-white mb-6 animate-fade-in">Choose Your Membership Plan</h1>
            <p className="body-lg text-white/90 max-w-3xl mx-auto animate-slide-up">
              Select the perfect plan that fits your fitness goals and lifestyle. All plans include access to our state-of-the-art facilities.
            </p>
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={plan.id}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 animate-fade-in ${
                  plan.popular ? 'ring-4 ring-orange-500 transform md:scale-110 z-10' : 'hover:shadow-2xl card-hover'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-center py-2 text-sm font-bold">
                      ⭐ MOST POPULAR
                    </div>
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-14' : ''}`}>
                  <div className="text-center mb-6">
                    <h3 className="heading-md text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">₹{plan.price}</span>
                      <span className="text-gray-600 ml-2">/{plan.period.split(' ')[1]}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button
                    onClick={() => handleJoinNow(plan.id)}
                    className={`w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:from-orange-700 hover:to-red-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {status === 'loading' ? 'Loading...' : session ? 'Join Now' : 'Sign Up to Continue'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What&apos;s Included in All Memberships
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every membership includes access to our premium facilities and amenities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Modern Equipment</h3>
              <p className="text-gray-600">Latest fitness equipment from top brands</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Access</h3>
              <p className="text-gray-600">Flexible gym hours to fit your schedule</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Clean Facilities</h3>
              <p className="text-gray-600">Regular cleaning and maintenance</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Support</h3>
              <p className="text-gray-600">Professional staff and trainers available</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I cancel my membership anytime?</h3>
              <p className="text-gray-600">Yes, you can cancel your membership at any time with 30 days notice. There are no cancellation fees.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Are there any initiation fees?</h3>
              <p className="text-gray-600">No, we don&apos;t charge any initiation or setup fees. You only pay your monthly membership fee.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I freeze my membership?</h3>
              <p className="text-gray-600">Yes, you can freeze your membership for up to 3 months per year for medical or travel reasons.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">We accept credit cards, debit cards, and bank transfers for monthly payments.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Choose your plan and join thousands of members who have transformed their lives with us.
          </p>
          {!session && (
            <Link href="/signup" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200">
              Create Your Account
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}