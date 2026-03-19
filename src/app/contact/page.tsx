import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact JGS Landscaping Supply - Get Your Quote | Stamford CT',
  description: 'Contact JGS Landscaping Supply for quotes on topsoil, mulch, stone, and landscaping materials. Located at 37 Vassar Avenue, Stamford CT. Call (203) 324-6705.',
}

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-stone-800 to-stone-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Your Free Quote</h1>
            <p className="text-xl md:text-2xl text-stone-300">
              Ready to start your project? We're here to help with expert advice and competitive pricing
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Request Your Quote</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-stone-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-stone-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-stone-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-stone-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="(203) 555-0123"
                  />
                </div>

                <div>
                  <label htmlFor="projectType" className="block text-sm font-semibold text-stone-700 mb-2">
                    Project Type
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  >
                    <option value="">Select project type</option>
                    <option value="residential-landscaping">Residential Landscaping</option>
                    <option value="commercial-landscaping">Commercial Landscaping</option>
                    <option value="driveway-walkway">Driveway/Walkway</option>
                    <option value="garden-planting">Garden/Planting Bed</option>
                    <option value="lawn-installation">Lawn Installation</option>
                    <option value="drainage-project">Drainage Project</option>
                    <option value="construction">Construction/Fill</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="materials" className="block text-sm font-semibold text-stone-700 mb-2">
                    Materials Needed
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center">
                      <input type="checkbox" name="materials[]" value="topsoil" className="mr-2 text-green-600" />
                      <span className="text-sm">Topsoil</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="materials[]" value="mulch" className="mr-2 text-green-600" />
                      <span className="text-sm">Mulch</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="materials[]" value="stone" className="mr-2 text-green-600" />
                      <span className="text-sm">Stone</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="materials[]" value="gravel" className="mr-2 text-green-600" />
                      <span className="text-sm">Gravel</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="materials[]" value="sand" className="mr-2 text-green-600" />
                      <span className="text-sm">Sand</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" name="materials[]" value="fill-dirt" className="mr-2 text-green-600" />
                      <span className="text-sm">Fill Dirt</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label htmlFor="quantity" className="block text-sm font-semibold text-stone-700 mb-2">
                    Estimated Quantity
                  </label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder="e.g., 5 cubic yards, 10 tons, not sure"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-stone-700 mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors resize-vertical"
                    placeholder="Tell us about your project, timeline, delivery requirements, or any questions you have..."
                  ></textarea>
                </div>

                <div>
                  <label className="flex items-start">
                    <input type="checkbox" name="delivery" className="mr-3 mt-1 text-green-600" />
                    <span className="text-sm text-stone-600">
                      I need delivery service (we deliver throughout Stamford and surrounding areas)
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl"
                >
                  Get My Free Quote
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Get In Touch</h2>
              
              {/* Contact Cards */}
              <div className="space-y-6 mb-8">
                <div className="bg-stone-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800">Call Us</h3>
                      <p className="text-stone-600">Speak with our experts</p>
                    </div>
                  </div>
                  <a 
                    href="tel:(203) 324-6705" 
                    className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors"
                  >
                    (203) 324-6705
                  </a>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800">Email Us</h3>
                      <p className="text-stone-600">Get a written quote</p>
                    </div>
                  </div>
                  <a 
                    href="mailto:info@josephgoliaservices.com" 
                    className="text-green-600 hover:text-green-700 transition-colors break-all"
                  >
                    info@josephgoliaservices.com
                  </a>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800">Visit Us</h3>
                      <p className="text-stone-600">See materials in person</p>
                    </div>
                  </div>
                  <div className="text-stone-700">
                    <p>37 Vassar Avenue</p>
                    <p>Stamford, CT 06902</p>
                  </div>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-stone-800">Business Hours</h3>
                      <p className="text-stone-600">When we're available</p>
                    </div>
                  </div>
                  <div className="text-stone-700 space-y-1">
                    <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                    <p>Saturday: 7:00 AM - 12:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
                <h3 className="font-bold text-stone-800 mb-3">Why Choose JGS?</h3>
                <ul className="space-y-2 text-sm text-stone-600">
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free quotes and expert advice
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    55+ years of experience
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Reliable delivery service
                  </li>
                  <li className="flex items-center">
                    <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Quality materials guaranteed
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-stone-800 mb-4">Find Us</h2>
            <p className="text-lg text-stone-600">
              Conveniently located on Vassar Avenue in Stamford
            </p>
          </div>
          
          <div className="bg-stone-300 rounded-xl overflow-hidden shadow-lg" style={{ height: '400px' }}>
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-green-200">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2">JGS Landscaping Supply</h3>
                <p className="text-stone-600">37 Vassar Avenue, Stamford, CT 06902</p>
                <p className="text-sm text-stone-500 mt-2">Interactive map would be integrated here</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't wait – contact us today for your free quote and expert advice on your landscaping project
          </p>
          <a 
            href="tel:(203) 324-6705" 
            className="inline-block bg-white text-green-600 hover:bg-stone-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl"
          >
            Call (203) 324-6705 Now
          </a>
        </div>
      </section>
    </>
  )
}