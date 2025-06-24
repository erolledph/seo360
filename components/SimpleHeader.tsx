'use client'

import Link from 'next/link'

export default function SimpleHeader() {
  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center py-4">
          <Link href="/" className="flex items-center space-x-3 group">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SEO360
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}
