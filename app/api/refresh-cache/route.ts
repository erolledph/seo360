import { NextResponse } from 'next/server'
import { redirectsApi } from '../../../lib/redirectsApi'

export async function POST() {
  try {
    console.log('Manual cache refresh requested')
    
    // Clear and refresh the cache
    redirectsApi.clearCache()
    const freshData = await redirectsApi.refreshCache()
    
    const response = {
      success: true,
      message: 'Cache refreshed successfully',
      redirectCount: Object.keys(freshData).length,
      timestamp: new Date().toISOString(),
      cacheStatus: redirectsApi.getCacheStatus(),
      sitemapUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://seo360.xyz'}/sitemap.xml`,
      note: 'Sitemap will be updated on next request with fresh data'
    }
    
    console.log('Cache refresh response:', response)
    
    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    console.error('Error refreshing cache:', error)
    
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { 
        status: 500,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    )
  }
}

export async function GET() {
  try {
    const cacheStatus = redirectsApi.getCacheStatus()
    
    return NextResponse.json({
      success: true,
      cacheStatus,
      timestamp: new Date().toISOString(),
      sitemapUrl: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://seo360.xyz'}/sitemap.xml`
    }, {
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}