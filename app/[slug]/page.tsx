import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import SlugRedirectPage from './SlugRedirectPage'
import { redirectsApi, RedirectData, RedirectsData } from '../../lib/redirectsApi'

async function getRedirectData(slug: string): Promise<RedirectData | null> {
  try {
    console.log('Fetching redirect data for slug:', slug)
    const data = await redirectsApi.getRedirect(slug)
    
    if (!data) {
      console.log('No redirect data found for slug:', slug)
      // Let's also try to get all redirects to see what's available
      const allRedirects = await redirectsApi.getAllRedirects()
      console.log('Total redirects available:', Object.keys(allRedirects).length)
      console.log('Sample slugs:', Object.keys(allRedirects).slice(0, 10))
    }
    
    return data
  } catch (error) {
    console.error('Error fetching redirect data:', error)
    return null
  }
}

async function getAllRedirects(): Promise<RedirectsData> {
  try {
    return await redirectsApi.getAllRedirects()
  } catch (error) {
    console.error('Error fetching all redirects:', error)
    return {}
  }
}

// Function to map custom types to valid OpenGraph types
function getValidOpenGraphType(type: string): string {
  const typeMap: { [key: string]: string } = {
    'website': 'website',
    'article': 'article',
    'video': 'video.other',
    'product': 'website', // Map product to website
    'blog': 'article',
    'news': 'article',
    'service': 'website',
    'portfolio': 'website',
    'landing': 'website',
    'course': 'website',
    'ebook': 'book',
    'music': 'music.song',
    'podcast': 'video.other',
    'app': 'website',
    'tool': 'website',
    'software': 'website',
    'game': 'website',
    'event': 'website',
    'business': 'website',
    'profile': 'profile',
    'company': 'website',
    'organization': 'website'
  }
  
  return typeMap[type.toLowerCase()] || 'website'
}

// Function to clean title and avoid duplicates
function cleanTitle(title: string): string {
  // Remove any existing "| SEO360" or "SEO360" suffixes to avoid duplicates
  return title
    .replace(/\s*\|\s*SEO360\s*$/i, '')
    .replace(/\s*SEO360\s*$/i, '')
    .trim()
}

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const data = await getRedirectData(params.slug)
  
  if (!data) {
    return {
      title: 'Page Not Found | SEO360',
      description: 'The requested page could not be found.',
    }
  }

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://seo360.xyz'
  const canonicalUrl = `${baseUrl}/${params.slug}`
  const validOgType = getValidOpenGraphType(data.type)
  
  // Clean the title to avoid duplicates
  const cleanedTitle = cleanTitle(data.title)

  return {
    title: `${cleanedTitle} | SEO360`,
    description: data.desc,
    keywords: data.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: cleanedTitle, // Use cleaned title without SEO360 suffix
      description: data.desc,
      type: validOgType as any,
      images: data.image ? [data.image] : [],
      siteName: data.site_name,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: cleanedTitle, // Use cleaned title without SEO360 suffix
      description: data.desc,
      images: data.image ? [data.image] : [],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default async function SlugPage({ params }: { params: { slug: string } }) {
  console.log('SlugPage called with params:', params)
  
  const data = await getRedirectData(params.slug)
  const allRedirects = await getAllRedirects()
  
  if (!data) {
    console.log('No data found, calling notFound()')
    notFound()
  }

  return <SlugRedirectPage data={data} allRedirects={allRedirects} currentSlug={params.slug} />
}
