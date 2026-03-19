import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About JGS Landscaping Supply - Family-Owned Since 1988 | Stamford CT',
  description: 'Learn about JGS Landscaping Supply\'s 36-year history serving Stamford, CT. Family-owned business with over 55 years of landscaping experience and commitment to quality.',
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl md:text-2xl text-green-100">
              Three decades of serving Stamford with quality, integrity, and family values
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Family-Owned Since 1988</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  JGS Landscaping Supply was founded in 1988 with a simple mission: to provide Stamford and the surrounding 
                  communities with the highest quality landscaping materials and exceptional service. What started as a small 
                  family operation has grown into one of Connecticut's most trusted suppliers of landscaping materials.
                </p>
                <p>
                  Our journey began with over 55 years of combined experience in the landscaping industry. We understood 
                  firsthand the challenges contractors and homeowners faced in finding reliable, quality materials. 
                  That experience became the foundation of our business philosophy: treat every customer like family 
                  and never compromise on quality.
                </p>
                <p>
                  Today, three decades later, we continue to operate with the same family values and commitment to 
                  excellence that established our reputation. We've served thousands of satisfied customers, from 
                  weekend DIY enthusiasts to large commercial contractors, and we're proud of the lasting relationships 
                  we've built along the way.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/600/500?random=30" 
                alt="JGS Landscaping Supply through the years" 
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -top-6 -right-6 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold">1988</div>
                  <div className="text-sm">Founded</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Commitment */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Values & Commitment</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              The principles that have guided us for over three decades and continue to drive everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Quality First</h3>
              <p className="text-stone-600">
                Every material we sell meets our rigorous quality standards. We source only from trusted suppliers 
                and inspect all materials to ensure consistency and reliability for your projects.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Family Values</h3>
              <p className="text-stone-600">
                As a family-owned business, we treat our customers like extended family. We take the time to understand 
                your needs and provide personalized service that larger companies simply can't match.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Expert Knowledge</h3>
              <p className="text-stone-600">
                With over 55 years of landscaping experience, we don't just sell materials – we provide expert advice 
                to help you choose the right products for your specific project and conditions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Reliable Service</h3>
              <p className="text-stone-600">
                When you need materials for your project, you can count on us. We maintain consistent inventory, 
                offer dependable delivery, and stand behind everything we sell.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Community Focus</h3>
              <p className="text-stone-600">
                We're proud to be part of the Stamford community. Supporting local projects and contributing to 
                the beauty and functionality of our neighborhoods is what drives us every day.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Environmental Responsibility</h3>
              <p className="text-stone-600">
                We're committed to sustainable practices, from sourcing environmentally responsible materials to 
                minimizing waste in our operations and supporting eco-friendly landscaping solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Expertise */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://picsum.photos/600/400?random=31" 
                alt="Landscaping materials and expertise" 
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-stone-800 text-white p-6 rounded-lg shadow-xl">
                <h3 className="font-bold text-lg mb-2">55+ Years</h3>
                <p className="text-sm text-stone-300">Combined landscaping experience</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">Decades of Expertise</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  Our expertise goes far beyond just selling materials. With over 55 years of hands-on experience 
                  in the landscaping industry, we understand the unique challenges of Connecticut's climate, soil 
                  conditions, and seasonal requirements.
                </p>
                <p>
                  This deep knowledge allows us to recommend the right materials for your specific project, whether 
                  you're dealing with drainage issues, soil amendment needs, or simply want to create a beautiful 
                  outdoor space that will thrive in our local conditions.
                </p>
                <p>
                  From residential gardens to commercial developments, from small weekend projects to large construction 
                  jobs, we've seen it all and helped thousands of customers achieve their landscaping goals successfully.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">1000+</div>
                  <div className="text-sm text-stone-600">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-1">50+</div>
                  <div className="text-sm text-stone-600">Material Types</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Experience the JGS Difference</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust JGS Landscaping Supply for their material needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-green-600 hover:bg-stone-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl"
            >
              Get Your Quote
            </a>
            <a 
              href="tel:(203) 324-6705" 
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Call (203) 324-6705
            </a>
          </div>
        </div>
      </section>
    </>
  )
}