import { NextResponse } from 'next/server'
import { redirectsApi } from '../../lib/redirectsApi'

export async function GET() {
  try {
    // Force the correct base URL
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://seo360.xyz'
    console.log('Sitemap generation - Base URL:', baseUrl)
    
    const currentDate = new Date().toISOString().split('T')[0]
    
    // Force refresh the cache to get latest data - ALWAYS refresh in production
    let redirects = {}
    try {
      console.log('Force refreshing redirects cache for sitemap...')
      // Always force refresh for sitemap to ensure latest data
      redirects = await redirectsApi.refreshCache()
      console.log('Sitemap generation - Fresh redirects loaded:', Object.keys(redirects).length)
    } catch (error) {
      console.error('Error fetching redirects for sitemap:', error)
      // Continue with empty redirects if API fails
    }
    
    // Build sitemap XML with proper structure
    const sitemapEntries = []
    
    // Add main pages
    sitemapEntries.push(`  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`)
    
    sitemapEntries.push(`  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`)
    
    sitemapEntries.push(`  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`)
    
    sitemapEntries.push(`  <url>
    <loc>${baseUrl}/terms-of-service</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`)
    
    sitemapEntries.push(`  <url>
    <loc>${baseUrl}/disclaimer</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>`)
    
    // Add each redirect slug
    Object.entries(redirects).forEach(([slug]) => {
      // Properly encode the slug for XML
      const escapedSlug = slug.replace(/&/g, '&amp;')
                             .replace(/</g, '&lt;')
                             .replace(/>/g, '&gt;')
                             .replace(/"/g, '&quot;')
                             .replace(/'/g, '&apos;')
      
      sitemapEntries.push(`  <url>
    <loc>${baseUrl}/${encodeURIComponent(slug)}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`)
    })
    
    // Build complete sitemap
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.join('\n')}
</urlset>`
    
    console.log('Sitemap generated successfully with base URL:', baseUrl)
    console.log('Total URLs in sitemap:', Object.keys(redirects).length + 5) // +5 for static pages
    console.log('Sitemap size:', sitemap.length, 'characters')
    
    // Generate unique ETag based on content and timestamp
    const contentHash = Buffer.from(sitemap).toString('base64').slice(0, 16)
    const timestamp = Date.now()
    const etag = `"${contentHash}-${timestamp}"`
    
    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        // Disable all caching to ensure fresh data
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        // Add headers to prevent CDN caching
        'Surrogate-Control': 'no-store',
        'CDN-Cache-Control': 'no-store',
        // CORS headers
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        // Add timestamp and count for debugging
        'X-Generated-At': new Date().toISOString(),
        'X-Redirect-Count': Object.keys(redirects).length.toString(),
        'X-Cache-Busted': 'true',
        // Unique ETag to force refresh
        'ETag': etag,
        // Vary header to prevent caching based on different factors
        'Vary': 'Accept-Encoding, User-Agent',
        // Ensure proper content length
        'Content-Length': Buffer.byteLength(sitemap, 'utf8').toString(),
      },
    })
  } catch (error) {
    console.error('Error generating sitemap:', error)
    
    // Return a basic sitemap even if there's an error
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://seo360.xyz'
    const currentDate = new Date().toISOString().split('T')[0]
    
    const basicSitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>
  <url>
    <loc>${baseUrl}/privacy-policy</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/terms-of-service</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
  <url>
    <loc>${baseUrl}/disclaimer</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.5</priority>
  </url>
</urlset>`
    
    return new NextResponse(basicSitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'Cache-Control': 'no-cache, no-store, must-revalidate, max-age=0',
        'Pragma': 'no-cache',
        'Expires': '0',
        'Surrogate-Control': 'no-store',
        'CDN-Cache-Control': 'no-store',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Access-Control-Allow-Headers': 'Content-Type',
        'X-Generated-At': new Date().toISOString(),
        'X-Error': 'true',
        'X-Cache-Busted': 'true',
        'Content-Length': Buffer.byteLength(basicSitemap, 'utf8').toString(),
      },
    })
  }
}

// Add OPTIONS method for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400',
    },
  })
}