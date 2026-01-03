import Link from 'next/link'
import Image from 'next/image'
import { Dumbbell, Users, Calendar, TrendingUp, Award, Zap, Heart, Target } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section - Split Design */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/30 to-red-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in">

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Build Your
                <br />
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-orange-400 via-red-500 to-pink-500 bg-clip-text text-transparent">
                    Dream Body
                  </span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 5 100 2 150 5C200 8 250 10 298 8" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#fb923c" />
                        <stop offset="50%" stopColor="#ef4444" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
                Experience world-class training with cutting-edge equipment, expert coaches, and a community that inspires greatness every single day.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/signup"
                  className="group relative bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-orange-500/50 transform hover:-translate-y-1 flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    Get Started Free
                    <Zap className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                <Link
                  href="/plans"
                  className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 hover:border-white/30 transition-all duration-300 flex items-center justify-center"
                >
                  View Plans
                  <TrendingUp className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { number: '500+', label: 'Members', icon: Users },
                  { number: '5+', label: 'Trainers', icon: Award },
                  { number: '10+', label: 'Years', icon: Target },
                ].map((stat, index) => (
                  <div key={index} className="text-center animate-scale-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-5 h-5 text-orange-400 mr-2" />
                      <div className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">{stat.number}</div>
                    </div>
                    <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image Grid */}
            <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="grid grid-cols-2 gap-4">
                {/* Large Image */}
                <div className="col-span-2 relative group overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1758875569399-99a7d80ace43?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxwZXJzb25hbCUyMHRyYWluaW5nJTIwdHJhaW5lciUyMGNsaWVudCUyMG1vdGl2YXRpb258ZW58MHwwfHx8MTc2MTMyMjg3N3ww&ixlib=rb-4.1.0&q=85"
                    alt="Personal training session - Vitaly Gariev on Unsplash"
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    width={800}
                    height={800}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center">
                        <Dumbbell className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-lg">Personal Training</p>
                        <p className="text-gray-300 text-sm">1-on-1 Expert Guidance</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Small Images */}
                <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1662549905044-e3f71c293989?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxncm91cCUyMGZpdG5lc3MlMjBleGVyY2lzZSUyMGNsYXNzJTIwcGVvcGxlJTIwZW5lcmdldGljfGVufDB8MHx8fDE3NjEzMjI4Nzd8MA&ixlib=rb-4.1.0&q=85"
                    alt="Group fitness class - Rendy Novantino on Unsplash"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    width={500}
                    height={500}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold">Group Classes</p>
                    <p className="text-gray-300 text-xs">100+ Weekly</p>
                  </div>
                </div>

                <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                  <Image
                    src="https://images.unsplash.com/photo-1576491742123-735882d4ca7e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzJTIwZml0bmVzcyUyMG1hY2hpbmVzJTIwbW9kZXJufGVufDB8MHx8fDE3NjEzMjI4Nzd8MA&ixlib=rb-4.1.0&q=85"
                    alt="Modern gym equipment - CHUTTERSNAP on Unsplash"
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    width={500}
                    height={500}
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <p className="text-white font-bold">Premium Gear</p>
                    <p className="text-gray-300 text-xs">Latest Equipment</p>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Why Choose <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">FitZone</span>?
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Experience the perfect blend of cutting-edge facilities, expert guidance, and a supportive community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Dumbbell className="w-8 h-8" />,
                color: 'from-orange-500 to-red-500',
                title: 'Premium Equipment',
                description: 'State-of-the-art machines and free weights from leading brands, maintained to perfection for your optimal performance.'
              },
              {
                icon: <Users className="w-8 h-8" />,
                color: 'from-blue-500 to-cyan-500',
                title: 'Expert Trainers',
                description: 'Certified professionals with specialized expertise in strength training, yoga, cardio, and personalized nutrition coaching.'
              },
              {
                icon: <Calendar className="w-8 h-8" />,
                color: 'from-green-500 to-emerald-500',
                title: 'Flexible Programs',
                description: 'Diverse fitness programs including group classes, personal training, and specialized routines for all fitness levels.'
              },
              {
                icon: <Target className="w-8 h-8" />,
                color: 'from-purple-500 to-pink-500',
                title: 'Goal Tracking',
                description: 'Advanced progress monitoring and personalized workout plans to help you achieve your fitness milestones faster.'
              },
              {
                icon: <Heart className="w-8 h-8" />,
                color: 'from-red-500 to-rose-500',
                title: 'Wellness Focus',
                description: 'Holistic approach combining physical training, nutrition guidance, and mental wellness for complete transformation.'
              },
              {
                icon: <Zap className="w-8 h-8" />,
                color: 'from-yellow-500 to-orange-500',
                title: '24/7 Access',
                description: 'Train on your schedule with round-the-clock gym access and flexible membership options that fit your lifestyle.'
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="heading-sm text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Showcase Section */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">
                Experience World-Class <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent">Facilities</span>
              </h2>
              <p className="body-lg text-gray-300 mb-8">
                Our gym features the latest equipment, spacious training areas, and a motivating atmosphere designed to help you reach your peak performance.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-orange-400 mb-2">10,000+</div>
                  <div className="text-sm text-gray-400">Sq Ft Space</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                  <div className="text-3xl font-bold text-orange-400 mb-2">200+</div>
                  <div className="text-sm text-gray-400">Equipment</div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="https://images.unsplash.com/photo-1576491742123-735882d4ca7e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjB3ZWlnaHRzJTIwZml0bmVzcyUyMG1hY2hpbmVzJTIwbW9kZXJufGVufDB8MHx8fDE3NjEzMjI4Nzd8MA&ixlib=rb-4.1.0&q=85"
                alt="Modern gym equipment - CHUTTERSNAP on Unsplash"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl"
                width={600}
                height={600}
                unoptimized
              />
              <Image
                src="https://images.unsplash.com/photo-1662549905044-e3f71c293989?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw0fHxncm91cCUyMGZpdG5lc3MlMjBleGVyY2lzZSUyMGNsYXNzJTIwcGVvcGxlJTIwZW5lcmdldGljfGVufDB8MHx8fDE3NjEzMjI4Nzd8MA&ixlib=rb-4.1.0&q=85"
                alt="Group fitness class - Rendy Novantino on Unsplash"
                className="rounded-2xl w-full h-64 object-cover shadow-2xl mt-8"
                width={600}
                height={600}
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="heading-lg text-gray-900 mb-4">
              Success <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Stories</span>
            </h2>
            <p className="body-lg text-gray-600 max-w-3xl mx-auto">
              Join thousands of members who have transformed their lives with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Doe',
                role: 'Member since 2023',
                image: 'https://i.pravatar.cc/150?img=12',
                rating: 5,
                text: 'The trainers here are incredible! They helped me lose 30 pounds and build muscle I never thought possible. Best investment in myself!'
              },
              {
                name: 'Sarah Miller',
                role: 'Member since 2022',
                image: 'https://i.pravatar.cc/150?img=45',
                rating: 5,
                text: 'Best gym I\'ve ever been to! Clean facilities, amazing equipment, and the yoga classes are fantastic. The community here is so supportive.'
              },
              {
                name: 'Mike Johnson',
                role: 'Member since 2023',
                image: 'https://i.pravatar.cc/150?img=33',
                rating: 5,
                text: 'The personal training program completely changed my approach to fitness. Highly recommended for anyone serious about their health!'
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 card-hover border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed italic">&quot;{testimonial.text}&quot;</p>
                <div className="flex items-center">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 border-2 border-orange-200"
                    width={48}
                    height={48}
                    unoptimized
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 via-red-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAgMTBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTI2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDEwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="heading-lg text-white mb-6">
            Ready to Start Your Fitness Journey?
          </h2>
          <p className="body-lg text-white/90 mb-10 max-w-2xl mx-auto">
            Join thousands of members who have transformed their lives with our professional gym facilities and expert trainers.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-white/50 transform hover:-translate-y-1"
          >
            Join Now
            <Zap className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}