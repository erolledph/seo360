'use client'

import { useState } from 'react'
import { useToast } from './ToastContainer'

export default function CacheRefreshButton() {
  const [isRefreshing, setIsRefreshing] = useState(false)
  const { showSuccess, showError, showInfo } = useToast()

  const refreshCache = async () => {
    setIsRefreshing(true)
    
    try {
      showInfo('Refreshing cache...', 'This may take a few seconds')
      
      const response = await fetch('/api/refresh-cache', {
        method: 'POST',
        headers: {
          'Cache-Control': 'no-cache'
        }
      })
      
      const data = await response.json()
      
      if (data.success) {
        showSuccess(
          'Cache refreshed successfully!', 
          `Found ${data.redirectCount} redirects. Visit /sitemap.xml to see updated sitemap.`
        )
        
        // Also refresh the current page to see changes
        setTimeout(() => {
          window.location.reload()
        }, 2000)
      } else {
        showError('Failed to refresh cache', data.error || 'Unknown error')
      }
    } catch (error) {
      showError('Network error', 'Failed to connect to refresh API')
      console.error('Cache refresh error:', error)
    } finally {
      setIsRefreshing(false)
    }
  }

  const checkCacheStatus = async () => {
    try {
      const response = await fetch('/api/refresh-cache')
      const data = await response.json()
      
      if (data.success) {
        const status = data.cacheStatus
        showInfo(
          'Cache Status',
          `Redirects: ${status.totalRedirects} | Age: ${Math.round(status.cacheAge / 1000)}s | Valid: ${status.isValid}`
        )
      }
    } catch (error) {
      showError('Failed to check cache status')
    }
  }

  const testSitemap = () => {
    const sitemapUrl = `${window.location.origin}/sitemap.xml?t=${Date.now()}`
    window.open(sitemapUrl, '_blank')
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      <button
        onClick={refreshCache}
        disabled={isRefreshing}
        className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg transition-all duration-200"
      >
        {isRefreshing ? (
          <>
            <svg className="animate-spin w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refreshing...
          </>
        ) : (
          <>
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Refresh Cache
          </>
        )}
      </button>
      
      <button
        onClick={checkCacheStatus}
        className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 shadow-lg transition-all duration-200 w-full"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Check Status
      </button>

      <button
        onClick={testSitemap}
        className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-lg transition-all duration-200 w-full"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
        Test Sitemap
      </button>
    </div>
  )
}