# SEO360 - Professional SEO Tool

A powerful Next.js application for boosting client website visibility, Domain Authority, and backlinks. Perfect for SEO professionals and agencies looking to attract more clients and deliver exceptional results.

## 🚀 Features

- **Client Acquisition Tools** - Showcase your SEO expertise with instant results
- **Domain Authority Boost** - Help clients increase their website's DA with high-quality backlinks
- **Professional Results** - Deliver fast, measurable SEO improvements
- **Mobile Optimized** - Fully responsive design for all devices
- **Analytics Integration** - Track performance with Google Analytics
- **SEO Optimized** - Built with SEO best practices from the ground up

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **TypeScript**: Full type safety
- **Deployment**: Netlify
- **Analytics**: Google Analytics 4

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd seo360
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🚀 Deployment to Netlify

### Option 1: Deploy from Git Repository

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "New site from Git"
4. Choose your Git provider and repository
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: `18`

6. Set environment variables in Netlify:
   - Go to Site settings → Environment variables
   - Add:
     - `NEXT_PUBLIC_BASE_URL`: `https://your-site-name.netlify.app`
     - `NEXT_PUBLIC_GA_ID`: `your-google-analytics-id`

7. Deploy!

### Option 2: Manual Deploy

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod --dir=.next
```

## 🔧 Configuration

### Environment Variables

- `NEXT_PUBLIC_BASE_URL`: Your site's base URL
- `NEXT_PUBLIC_GA_ID`: Google Analytics tracking ID

### Custom Domain

To use a custom domain with Netlify:

1. Go to Site settings → Domain management
2. Add your custom domain
3. Update DNS records as instructed
4. Update `NEXT_PUBLIC_BASE_URL` environment variable

## 📊 Analytics

The application includes Google Analytics 4 integration. Make sure to:

1. Create a GA4 property
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Set it in the `NEXT_PUBLIC_GA_ID` environment variable

## 🔍 SEO Features

- **Dynamic Sitemap**: Auto-generated XML sitemap at `/sitemap.xml`
- **Robots.txt**: SEO-friendly robots.txt at `/robots.txt`
- **Meta Tags**: Comprehensive meta tags for all pages
- **Open Graph**: Social media optimization
- **Schema Markup**: Structured data for better search results
- **Performance Optimized**: Fast loading times and Core Web Vitals optimization

## 🛡️ Security

The application includes several security headers:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Strict-Transport-Security
- Permissions-Policy

## 📱 Performance

- **Next.js 14**: Latest features and optimizations
- **Image Optimization**: Automatic WebP/AVIF conversion
- **Code Splitting**: Automatic code splitting for optimal loading
- **Caching**: Intelligent caching strategies
- **Bundle Analysis**: Use `npm run analyze` to analyze bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -am 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support, email erolledph+seo360@gmail.com or create an issue in the repository.

## 🔗 Links

- [Live Site](https://seo360.xyz)
- [Documentation](https://seo360.xyz)
- [Contact](https://seo360.xyz/contact)