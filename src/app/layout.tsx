import type { Metadata } from 'next'
import { Roboto_Slab } from 'next/font/google'
import '@/styles/globals.css'

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'JGS Landscaping Supply - Quality Materials Since 1988 | Stamford CT',
  description: 'Family-owned landscaping materials supplier in Stamford, CT. Premium topsoil, mulches, and landscaping supplies for residential and commercial projects. Over 55 years experience.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={robotoSlab.className}>
      <body className="min-h-screen flex flex-col bg-stone-50">
        {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-lg">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JGS</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-stone-800">JGS Landscaping Supply</h1>
                  <p className="text-sm text-green-600">Quality Materials Since 1988</p>
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <a href="/" className="text-stone-700 hover:text-green-600 font-medium transition-colors">Home</a>
                <div className="relative group">
                  <button className="text-stone-700 hover:text-green-600 font-medium flex items-center space-x-1">
                    <span>Services</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <a href="/topsoil" className="block px-4 py-2 text-stone-700 hover:bg-green-50 hover:text-green-600">Premium Topsoil</a>
                      <a href="/mulch" className="block px-4 py-2 text-stone-700 hover:bg-green-50 hover:text-green-600">Mulch & Bark</a>
                      <a href="/stone-gravel" className="block px-4 py-2 text-stone-700 hover:bg-green-50 hover:text-green-600">Stone & Gravel</a>
                      <a href="/sand-fill" className="block px-4 py-2 text-stone-700 hover:bg-green-50 hover:text-green-600">Sand & Fill</a>
                      <a href="/seasonal-supplies" className="block px-4 py-2 text-stone-700 hover:bg-green-50 hover:text-green-600">Seasonal Supplies</a>
                      <a href="/delivery" className="block px-4 py-2 text-stone-700 hover:bg-green-50 hover:text-green-600">Delivery Services</a>
                    </div>
                  </div>
                </div>
                <a href="/about" className="text-stone-700 hover:text-green-600 font-medium transition-colors">About</a>
                <a href="/faq" className="text-stone-700 hover:text-green-600 font-medium transition-colors">FAQ</a>
                <a href="/contact" className="text-stone-700 hover:text-green-600 font-medium transition-colors">Contact</a>
                <a 
                  href="tel:(203) 324-6705" 
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-all hover:shadow-lg"
                >
                  (203) 324-6705
                </a>
              </div>

              {/* Mobile menu button */}
              <button className="lg:hidden p-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-stone-800 text-white">
          <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">JGS</span>
                  </div>
                  <h3 className="text-lg font-bold">JGS Landscaping Supply</h3>
                </div>
                <p className="text-stone-300 text-sm mb-4">
                  Family-owned landscaping materials supplier serving Stamford, CT since 1988. Over 55 years of experience in the landscaping field.
                </p>
                <div className="text-sm text-stone-300">
                  <p className="mb-1">37 Vassar Avenue</p>
                  <p className="mb-3">Stamford, CT 06902</p>
                  <p className="mb-1">
                    <a href="tel:(203) 324-6705" className="hover:text-green-400 transition-colors">(203) 324-6705</a>
                  </p>
                  <p>
                    <a href="mailto:info@josephgoliaservices.com" className="hover:text-green-400 transition-colors">info@josephgoliaservices.com</a>
                  </p>
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="text-lg font-bold mb-4">Our Services</h3>
                <ul className="space-y-2 text-sm text-stone-300">
                  <li><a href="/topsoil" className="hover:text-green-400 transition-colors">Premium Topsoil</a></li>
                  <li><a href="/mulch" className="hover:text-green-400 transition-colors">Mulch & Bark</a></li>
                  <li><a href="/stone-gravel" className="hover:text-green-400 transition-colors">Stone & Gravel</a></li>
                  <li><a href="/sand-fill" className="hover:text-green-400 transition-colors">Sand & Fill</a></li>
                  <li><a href="/seasonal-supplies" className="hover:text-green-400 transition-colors">Seasonal Supplies</a></li>
                  <li><a href="/delivery" className="hover:text-green-400 transition-colors">Delivery Services</a></li>
                </ul>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm text-stone-300">
                  <li><a href="/" className="hover:text-green-400 transition-colors">Home</a></li>
                  <li><a href="/about" className="hover:text-green-400 transition-colors">About Us</a></li>
                  <li><a href="/contact" className="hover:text-green-400 transition-colors">Contact</a></li>
                  <li><a href="/faq" className="hover:text-green-400 transition-colors">FAQ</a></li>
                </ul>
              </div>

              {/* Hours & Contact */}
              <div>
                <h3 className="text-lg font-bold mb-4">Business Hours</h3>
                <div className="text-sm text-stone-300 space-y-1">
                  <p>Monday - Friday: 7:00 AM - 5:00 PM</p>
                  <p>Saturday: 7:00 AM - 12:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="mt-6">
                  <a 
                    href="/contact" 
                    className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:shadow-lg"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            </div>
            
            <div className="border-t border-stone-700 mt-8 pt-6 text-center text-sm text-stone-400">
              <p>&copy; 2024 JGS Landscaping Supply. All rights reserved. | Serving Stamford, CT and surrounding areas.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}