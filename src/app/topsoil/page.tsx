import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Premium Topsoil - JGS Landscaping Supply | Stamford CT',
  description: 'High-quality screened topsoil for gardens, lawns, and planting beds. Rich in nutrients and organic matter. Professional delivery available in Stamford, CT area.',
}

export default function TopsoilPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-amber-600 to-orange-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Premium Topsoil</h1>
            <p className="text-xl md:text-2xl text-amber-100">
              Rich, screened topsoil perfect for gardens, lawns, and all your planting needs
            </p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6">The Foundation of Great Landscapes</h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  Our premium topsoil is the secret to thriving plants and lush lawns. Carefully screened and 
                  blended with organic matter, our topsoil provides the perfect growing medium for all your 
                  landscaping projects.
                </p>
                <p>
                  Whether you're establishing a new lawn, creating garden beds, or improving existing soil, 
                  our topsoil delivers the nutrients and structure plants need to flourish in Connecticut's 
                  climate.
                </p>
                <p>
                  Each load is tested for quality and consistency, ensuring you receive soil that meets 
                  professional standards for pH balance, organic content, and drainage properties.
                </p>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/contact" 
                  className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg mr-4"
                >
                  Get Quote
                </a>
                <a 
                  href="tel:(203) 324-6705" 
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  Call (203) 324-6705
                </a>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/600/500?random=40" 
                alt="Premium screened topsoil" 
                className="rounded-xl shadow-xl w-full"
              />
              <div className="absolute -top-6 -left-6 bg-amber-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-xl font-bold">Premium</div>
                  <div className="text-sm">Screened</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Why Choose Our Topsoil?</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Not all topsoil is created equal. Here's what makes our premium blend the best choice for your projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Triple Screened</h3>
              <p className="text-stone-600">
                Our topsoil goes through three screening processes to remove rocks, debris, and oversized 
                particles, ensuring consistent texture and quality.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Rich in Organics</h3>
              <p className="text-stone-600">
                Blended with composted organic matter to provide essential nutrients and improve 
                soil structure for healthier plant growth.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Perfect Drainage</h3>
              <p className="text-stone-600">
                Balanced composition ensures proper drainage while retaining moisture, preventing 
                both waterlogging and drought stress.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">pH Balanced</h3>
              <p className="text-stone-600">
                Tested and adjusted to optimal pH levels (6.0-7.0) for most plants, eliminating 
                the need for additional soil amendments.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Ready to Use</h3>
              <p className="text-stone-600">
                No mixing required – our topsoil is ready to spread and plant immediately, 
                saving you time and effort on your projects.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-4">Locally Sourced</h3>
              <p className="text-stone-600">
                Sourced from Connecticut suppliers and adapted to local growing conditions, 
                ensuring the best results for your landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Perfect For These Applications</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Our premium topsoil is versatile and suitable for a wide range of landscaping and gardening projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-stone-50 p-6 rounded-xl">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://picsum.photos/400/225?random=41" 
                    alt="New lawn installation" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">New Lawn Installation</h3>
                <p className="text-stone-600">Create the perfect foundation for new sod or seed with 2-4 inches of our premium topsoil.</p>
              </div>
            </div>

            <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-stone-50 p-6 rounded-xl">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://picsum.photos/400/225?random=42" 
                    alt="Garden beds and planting" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Garden Beds</h3>
                <p className="text-stone-600">Ideal for vegetable gardens, flower beds, and planting areas where rich soil is essential.</p>
              </div>
            </div>

            <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-stone-50 p-6 rounded-xl">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://picsum.photos/400/225?random=43" 
                    alt="Soil amendment and improvement" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Soil Amendment</h3>
                <p className="text-stone-600">Mix with existing poor soil to improve structure, drainage, and nutrient content.</p>
              </div>
            </div>

            <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-stone-50 p-6 rounded-xl">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://picsum.photos/400/225?random=44" 
                    alt="Raised bed gardening" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Raised Beds</h3>
                <p className="text-stone-600">Perfect for filling raised garden beds and planters with quality growing medium.</p>
              </div>
            </div>

            <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-stone-50 p-6 rounded-xl">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://picsum.photos/400/225?random=45" 
                    alt="Tree and shrub planting" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Tree & Shrub Planting</h3>
                <p className="text-stone-600">Provide new plantings with the nutrient-rich soil they need to establish strong roots.</p>
              </div>
            </div>

            <div className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-stone-50 p-6 rounded-xl">
                <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                  <img 
                    src="https://picsum.photos/400/225?random=46" 
                    alt="Grading and leveling" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-3">Grading & Leveling</h3>
                <p className="text-stone-600">Use for final grading and leveling where you want immediate planting capability.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ordering Information */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Ordering Information</h2>
              <p className="text-lg text-stone-600">
                Everything you need to know about purchasing our premium topsoil
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Available Quantities</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="font-medium">Pick-up (minimum)</span>
                    <span className="text-amber-600 font-bold">1 cubic yard</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="font-medium">Small delivery</span>
                    <span className="text-amber-600 font-bold">2-5 cubic yards</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="font-medium">Standard delivery</span>
                    <span className="text-amber-600 font-bold">6-10 cubic yards</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Large delivery</span>
                    <span className="text-amber-600 font-bold">11+ cubic yards</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-stone-800 mb-6">Coverage Guide</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="font-medium">1 cubic yard covers</span>
                    <span className="text-amber-600 font-bold">~324 sq ft (1")</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="font-medium">2" deep coverage</span>
                    <span className="text-amber-600 font-bold">~162 sq ft</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-stone-200 pb-2">
                    <span className="font-medium">3" deep coverage</span>
                    <span className="text-amber-600 font-bold">~108 sq ft</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">4" deep coverage</span>
                    <span className="text-amber-600 font-bold">~81 sq ft</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-stone-800 mb-6">Professional Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-stone-800 mb-3">For New Lawns:</h4>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Apply 2-4 inches of topsoil
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Rake smooth and level
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Water lightly before seeding
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-stone-800 mb-3">For Garden Beds:</h4>
                  <ul className="space-y-2 text-stone-600">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Mix with existing soil if possible
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Create 6-8 inch planting depth
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-amber-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Allow soil to settle before planting
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Premium Topsoil?</h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Get your free quote today and give your plants the foundation they deserve
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl"
            >
              Request Quote
            </a>
            <a 
              href="tel:(203) 324-6705" 
              className="border-2 border-amber-500 text-amber-400 hover:bg-amber-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Call (203) 324-6705
            </a>
          </div>
        </div>
      </section>
    </>
  )
}