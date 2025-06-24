import SimpleHeader from '../../components/SimpleHeader'
import SimpleFooter from '../../components/SimpleFooter'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | SEO360',
  description: 'Get in touch with SEO360 for SEO services, client acquisition strategies, and Domain Authority boosting. We\'re here to help you grow your business.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <SimpleHeader />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our SEO services? We're here to help you attract more clients and boost their visibility.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              {/* Email Support */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">Email Support</h3>
                    <p className="text-blue-800 mb-3">
                      For general questions, SEO services, or client acquisition strategies.
                    </p>
                    <p className="text-blue-900 font-medium">erolledph+seo360@gmail.com</p>
                    <p className="text-sm text-blue-700 mt-1">Response time: Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Technical Support */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-900 mb-2">Technical Support</h3>
                    <p className="text-green-800 mb-3">
                      For technical issues, API questions, or SEO tool integration help.
                    </p>
                    <p className="text-green-900 font-medium">erolledph+seo360@gmail.com</p>
                    <p className="text-sm text-green-700 mt-1">Response time: Within 12 hours</p>
                  </div>
                </div>
              </div>

              {/* Business Inquiries */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-900 mb-2">Business Inquiries</h3>
                    <p className="text-purple-800 mb-3">
                      For partnerships, enterprise SEO solutions, or bulk client services.
                    </p>
                    <p className="text-purple-900 font-medium">erolledph+seo360@gmail.com</p>
                    <p className="text-sm text-purple-700 mt-1">Response time: Within 48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Tips */}
            <div className="mt-8 bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Quick Tips for Faster Support</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Include your client's website URL when reporting SEO issues</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Describe the SEO goals you're trying to achieve for your client</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Include screenshots or error messages when applicable</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Check our documentation for common SEO solutions first</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Question</option>
                  <option value="technical">Technical Support</option>
                  <option value="seo-services">SEO Services</option>
                  <option value="client-acquisition">Client Acquisition</option>
                  <option value="domain-authority">Domain Authority Boost</option>
                  <option value="business">Business Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="client-url" className="block text-sm font-medium text-gray-700 mb-2">
                  Client Website URL (if applicable)
                </label>
                <input
                  type="url"
                  id="client-url"
                  name="client-url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://client-website.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Please describe your SEO goals, client needs, or question in detail..."
                ></textarea>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <p className="text-sm text-yellow-800">
                  <strong>Note:</strong> This is a demo contact form. In a real implementation, 
                  this would be connected to a backend service to handle form submissions.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How quickly can I see SEO results for my clients?</h3>
                <p className="text-gray-600 text-sm">
                  Most SEO improvements are visible within 6-24 hours. Domain Authority boosts typically show 
                  within 2-4 weeks depending on the client's current website status.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I use this for multiple clients?</h3>
                <p className="text-gray-600 text-sm">
                  Yes! SEO360 is designed for professionals managing multiple client accounts. 
                  You can create unlimited redirects for all your clients.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a limit on client projects?</h3>
                <p className="text-gray-600 text-sm">
                  Currently, there are no hard limits on the number of client projects you can manage. 
                  We monitor usage to ensure fair access for all users.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you provide client reporting?</h3>
                <p className="text-gray-600 text-sm">
                  Yes, we integrate with Google Analytics to track performance. You can generate 
                  professional reports to show clients their SEO improvements and ROI.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What about mobile optimization for clients?</h3>
                <p className="text-gray-600 text-sm">
                  All SEO redirects are fully mobile-responsive and optimized for mobile search. 
                  We follow Google's mobile-first indexing best practices.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I white-label this service?</h3>
                <p className="text-gray-600 text-sm">
                  Currently, the service uses our domain for maximum SEO benefit. White-label 
                  solutions are planned for future releases based on user demand.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SimpleFooter />
    </div>
  )
}