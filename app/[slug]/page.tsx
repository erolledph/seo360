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

  return {
    title: `${data.title} | SEO360`,
    description: data.desc,
    keywords: data.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: data.title,
      description: data.desc,
      type: data.type as any,
      images: data.image ? [data.image] : [],
      siteName: data.site_name,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
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