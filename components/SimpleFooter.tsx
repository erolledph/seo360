'use client'

export default function SimpleFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  SEO360
                </h3>
                <p className="text-sm text-gray-400">Your Personal SEO Tool</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Your personal tool for boosting client website visibility, Domain Authority, and backlinks. 
              Attract more clients and deliver exceptional SEO results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/sitemap.xml" target="_blank" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Live Sitemap
                </a>
              </li>
              <li>
                <a href="/robots.txt" target="_blank" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Robots.txt
                </a>
              </li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Tools</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://snapmails.xyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors text-sm flex items-center"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Snapmail.xyz
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <a href="/privacy-policy" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/disclaimer" className="text-gray-300 hover:text-blue-400 transition-colors text-sm">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h4 className="font-semibold mb-4 text-lg text-white">Features</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>🎯 Client Acquisition</li>
              <li>📈 Domain Authority Boost</li>
              <li>🔗 Premium Backlinks</li>
              <li>⚡ Instant Results</li>
              <li>📱 Mobile Optimized</li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              <p>&copy; {currentYear} SEO360. Built for SEO success.</p>
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="/sitemap.xml" target="_blank" className="text-gray-400 hover:text-blue-400 transition-colors">
                Sitemap
              </a>
              <span className="text-gray-500">•</span>
              <span className="text-gray-400">Made with ❤️ for SEO Professionals</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
