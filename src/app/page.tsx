import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'JGS Landscaping Supply - Quality Materials Since 1988 | Stamford CT',
  description: 'Family-owned landscaping materials supplier in Stamford, CT. Premium topsoil, mulches, stone, gravel, and landscaping supplies. Professional delivery services available.',
}

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://picsum.photos/1920/1080?random=1')`
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Quality Landscaping Materials 
            <span className="block text-green-400">Since 1988</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-stone-200">
            Family-owned supplier providing premium topsoil, mulch, stone, and landscaping supplies to Stamford, CT and surrounding areas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Free Quote
            </a>
            <a 
              href="tel:(203) 324-6705" 
              className="border-2 border-white text-white hover:bg-white hover:text-stone-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Call (203) 324-6705
            </a>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-4">Our Premium Materials & Services</h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Over 55 years of experience providing top-quality landscaping materials for residential and commercial projects
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Topsoil */}
            <div className="group bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://picsum.photos/400/225?random=10" 
                  alt="Premium Topsoil" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Premium Topsoil</h3>
              <p className="text-stone-600 mb-4">High-quality screened topsoil perfect for gardens, lawns, and planting beds. Rich in nutrients and organic matter.</p>
              <a href="/topsoil" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Mulch */}
            <div className="group bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://picsum.photos/400/225?random=11" 
                  alt="Mulch and Bark" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Mulch & Bark</h3>
              <p className="text-stone-600 mb-4">Premium colored mulch, shredded bark, and wood chips to enhance your landscape and retain soil moisture.</p>
              <a href="/mulch" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Stone & Gravel */}
            <div className="group bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://picsum.photos/400/225?random=12" 
                  alt="Stone and Gravel" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Stone & Gravel</h3>
              <p className="text-stone-600 mb-4">Decorative stone, crushed stone, pea gravel, and river rock for driveways, walkways, and drainage projects.</p>
              <a href="/stone-gravel" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Sand & Fill */}
            <div className="group bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://picsum.photos/400/225?random=13" 
                  alt="Sand and Fill Materials" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Sand & Fill</h3>
              <p className="text-stone-600 mb-4">Construction sand, mason sand, fill dirt, and other bulk materials for construction and grading projects.</p>
              <a href="/sand-fill" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Seasonal Supplies */}
            <div className="group bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://picsum.photos/400/225?random=14" 
                  alt="Seasonal Supplies" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Seasonal Supplies</h3>
              <p className="text-stone-600 mb-4">Salt, ice melt, firewood, and other seasonal materials to keep your property maintained year-round.</p>
              <a href="/seasonal-supplies" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Delivery */}
            <div className="group bg-stone-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="aspect-video mb-4 rounded-lg overflow-hidden">
                <img 
                  src="https://picsum.photos/400/225?random=15" 
                  alt="Delivery Services" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-stone-800 mb-3">Delivery Services</h3>
              <p className="text-stone-600 mb-4">Professional delivery services throughout Stamford and surrounding areas. Large or small orders welcome.</p>
              <a href="/delivery" className="text-green-600 hover:text-green-700 font-semibold flex items-center">
                Learn More 
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-stone-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Family-Owned Since 1988</h2>
              <p className="text-lg text-stone-600 mb-6">
                For over three decades, JGS Landscaping Supply has been Stamford's trusted source for premium landscaping materials. 
                Our family business combines 55+ years of landscaping expertise with a commitment to quality that our customers depend on.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">36+</div>
                  <div className="text-stone-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">55+</div>
                  <div className="text-stone-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
                  <div className="text-stone-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                  <div className="text-stone-600">Material Types</div>
                </div>
              </div>
              <a 
                href="/about" 
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all hover:shadow-lg"
              >
                Learn Our Story
              </a>
            </div>
            <div className="relative">
              <img 
                src="https://picsum.photos/600/400?random=20" 
                alt="JGS Landscaping Supply facility" 
                className="rounded-xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl max-w-xs">
                <h3 className="font-bold text-stone-800 mb-2">Quality Guarantee</h3>
                <p className="text-sm text-stone-600">All our materials meet the highest industry standards for your landscaping projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-stone-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Get a free quote today and discover why homeowners and contractors throughout Stamford trust JGS Landscaping Supply
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:shadow-xl"
            >
              Request Quote
            </a>
            <a 
              href="tel:(203) 324-6705" 
              className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all"
            >
              Call Now: (203) 324-6705
            </a>
          </div>
        </div>
      </section>
    </>
  )
}