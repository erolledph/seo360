'use client'

import { useEffect, useState } from 'react'
import { redirectsApi } from '../lib/redirectsApi'

export default function NotFound() {
  const [debugInfo, setDebugInfo] = useState<any>(null)

  useEffect(() => {
    // Get debug info about available redirects
    const getDebugInfo = async () => {
      try {
        const allRedirects = await redirectsApi.getAllRedirects()
        const cacheStatus = redirectsApi.getCacheStatus()
        
        setDebugInfo({
          totalRedirects: Object.keys(allRedirects).length,
          sampleSlugs: Object.keys(allRedirects).slice(0, 10),
          cacheStatus,
          currentUrl: typeof window !== 'undefined' ? window.location.href : 'unknown'
        })
      } catch (error) {
        setDebugInfo({
          error: error instanceof Error ? error.message : 'Unknown error',
          currentUrl: typeof window !== 'undefined' ? window.location.href : 'unknown'
        })
      }
    }
    
    getDebugInfo()
  }, [])

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The redirect you're looking for doesn't exist or may have been moved.
        </p>
        
        {/* Debug Information */}
        {debugInfo && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 text-left">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Debug Information</h3>
            <div className="space-y-2 text-sm">
              <p><strong>Current URL:</strong> {debugInfo.currentUrl}</p>
              {debugInfo.error ? (
                <p className="text-red-600"><strong>Error:</strong> {debugInfo.error}</p>
              ) : (
                <>
                  <p><strong>Total Redirects Available:</strong> {debugInfo.totalRedirects}</p>
                  <p><strong>Cache Status:</strong> {JSON.stringify(debugInfo.cacheStatus, null, 2)}</p>
                  <div>
                    <strong>Sample Available Slugs:</strong>
                    <ul className="list-disc list-inside mt-2 ml-4">
                      {debugInfo.sampleSlugs?.map((slug: string) => (
                        <li key={slug} className="text-blue-600">
                          <a href={`/${slug}`} className="hover:underline">{slug}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
        
        <div className="space-y-4">
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Go Home
          </a>
          <div>
            <a 
              href="/sitemap.xml" 
              target="_blank"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              View Sitemap
            </a>
            <span className="mx-2 text-gray-400">•</span>
            <a 
              href="/contact" 
              className="text-blue-600 hover:text-blue-800 underline"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}