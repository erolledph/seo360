// Centralized API client with caching for redirects
interface RedirectData {
  title: string
  desc: string
  url: string
  image: string
  video?: string
  keywords: string
  site_name: string
  type: string
  created_at?: string
  updated_at?: string
}

interface RedirectsData {
  [slug: string]: RedirectData
}

class RedirectsApiClient {
  private static instance: RedirectsApiClient
  private cache: RedirectsData | null = null
  private cacheTimestamp: number = 0
  private readonly CACHE_DURATION = 30 * 1000 // 30 seconds for faster updates
  private readonly API_URL = 'https://seo-redirects.netlify.app/api/redirects.json'
  private fetchPromise: Promise<RedirectsData> | null = null

  private constructor() {}

  static getInstance(): RedirectsApiClient {
    if (!RedirectsApiClient.instance) {
      RedirectsApiClient.instance = new RedirectsApiClient()
    }
    return RedirectsApiClient.instance
  }

  private isCacheValid(): boolean {
    return this.cache !== null && (Date.now() - this.cacheTimestamp) < this.CACHE_DURATION
  }

  private async fetchFromApi(forceFresh: boolean = false): Promise<RedirectsData> {
    try {
      console.log('Fetching redirects from API:', this.API_URL, forceFresh ? '(FORCE FRESH)' : '')
      
      // Add cache busting parameter to ensure fresh data
      const cacheBuster = Date.now()
      const randomSuffix = Math.random().toString(36).substring(7)
      const urlWithCacheBuster = `${this.API_URL}?t=${cacheBuster}&r=${randomSuffix}&v=2`
      
      const response = await fetch(urlWithCacheBuster, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
          // Add additional headers to bypass any caching
          'X-Requested-With': 'XMLHttpRequest',
          'X-Cache-Bust': cacheBuster.toString(),
          'User-Agent': 'SEO360-Sitemap-Generator/1.0',
        },
        // Add cache busting at the request level
        cache: 'no-store',
      })

      if (!response.ok) {
        console.error(`HTTP error! status: ${response.status}, statusText: ${response.statusText}`)
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const contentType = response.headers.get('content-type')
      if (!contentType || !contentType.includes('application/json')) {
        console.error('Invalid content type:', contentType)
        throw new Error(`Invalid content type: ${contentType}`)
      }

      const data = await response.json()
      
      // Validate the data structure
      if (!data || typeof data !== 'object') {
        throw new Error('Invalid data structure received from API')
      }
      
      console.log('API Response received:', Object.keys(data).length, 'redirects')
      console.log('Available slugs:', Object.keys(data).slice(0, 10)) // Log first 10 slugs
      
      // Update cache
      this.cache = data
      this.cacheTimestamp = Date.now()
      this.fetchPromise = null

      return data
    } catch (error) {
      this.fetchPromise = null
      console.error('Error fetching redirects:', error)
      
      // Return cached data if available, even if expired
      if (this.cache) {
        console.warn('Using expired cache due to fetch error')
        return this.cache
      }
      
      // Return empty object instead of throwing to prevent sitemap generation failure
      console.warn('Returning empty redirects object due to API failure')
      return {}
    }
  }

  async getAllRedirects(forceFresh: boolean = false): Promise<RedirectsData> {
    // Force fresh data if requested (for sitemap generation)
    if (forceFresh) {
      console.log('Force fetching fresh data...')
      this.cache = null
      this.cacheTimestamp = 0
      this.fetchPromise = null
      return this.fetchFromApi(true)
    }

    // Return cached data if valid
    if (this.isCacheValid()) {
      console.log('Using cached redirects data')
      return this.cache!
    }

    // If already fetching, wait for that promise
    if (this.fetchPromise) {
      console.log('Waiting for existing fetch promise')
      return this.fetchPromise
    }

    // Start new fetch
    this.fetchPromise = this.fetchFromApi()
    return this.fetchPromise
  }

  async getRedirect(slug: string): Promise<RedirectData | null> {
    console.log('Looking for redirect with slug:', slug)
    
    try {
      const allRedirects = await this.getAllRedirects()
      const redirect = allRedirects[slug] || null
      
      if (redirect) {
        console.log('Found redirect:', redirect.title)
      } else {
        console.log('Redirect not found for slug:', slug)
        console.log('Available slugs:', Object.keys(allRedirects).slice(0, 20))
      }
      
      return redirect
    } catch (error) {
      console.error('Error getting redirect:', error)
      return null
    }
  }

  // Force refresh cache - now with better cache busting
  async refreshCache(): Promise<RedirectsData> {
    console.log('Force refreshing cache...')
    this.cache = null
    this.cacheTimestamp = 0
    this.fetchPromise = null
    return this.getAllRedirects(true)
  }

  // Clear cache completely
  clearCache(): void {
    console.log('Clearing cache completely...')
    this.cache = null
    this.cacheTimestamp = 0
    this.fetchPromise = null
  }

  // Get cache status for debugging
  getCacheStatus() {
    return {
      hasCachedData: this.cache !== null,
      cacheAge: this.cache ? Date.now() - this.cacheTimestamp : 0,
      isValid: this.isCacheValid(),
      totalRedirects: this.cache ? Object.keys(this.cache).length : 0,
      lastFetch: this.cacheTimestamp ? new Date(this.cacheTimestamp).toISOString() : 'never'
    }
  }
}

// Export singleton instance
export const redirectsApi = RedirectsApiClient.getInstance()

// Export types
export type { RedirectData, RedirectsData }