import { NextResponse } from 'next/server'

export async function GET() {
  // Force the correct base URL
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://seo360.xyz'
  console.log('Robots.txt generation - Base URL:', baseUrl)
  
  const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for better server performance
Crawl-delay: 1

# Allow all search engines to crawl
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

User-agent: DuckDuckBot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: YandexBot
Allow: /

# Block admin areas from search engines
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /_next/
Disallow: /static/

# Allow sitemap access
Allow: /sitemap.xml`

  console.log('Robots.txt generated successfully with base URL:', baseUrl)

  return new NextResponse(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}