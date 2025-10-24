# SEO Setup Guide for AfriCapital

This document outlines the comprehensive SEO implementation for the AfriCapital website.

## 🚀 SEO Features Implemented

### 1. **Metadata Configuration**
- ✅ Dynamic page titles with template structure
- ✅ Comprehensive meta descriptions
- ✅ Keywords optimization
- ✅ Canonical URLs
- ✅ Author and publisher information
- ✅ Format detection settings

### 2. **Open Graph & Social Media**
- ✅ Open Graph meta tags for Facebook sharing
- ✅ Twitter Card optimization
- ✅ Social media image optimization
- ✅ Proper image dimensions (1200x630)

### 3. **Structured Data (JSON-LD)**
- ✅ Organization schema
- ✅ Website schema with search functionality
- ✅ Article schema for blog posts
- ✅ Event schema for events
- ✅ Program schema for programs

### 4. **Technical SEO**
- ✅ XML Sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration (`/robots.txt`)
- ✅ Security headers
- ✅ Image optimization
- ✅ Language alternates

### 5. **Page-Specific SEO**

#### Homepage (`/`)
- Organization and Website structured data
- Comprehensive meta tags
- Social media optimization

#### About Page (`/about`)
- Focus on mission and team keywords
- About-specific meta descriptions

#### Blog Pages
- **Blog Index (`/blog`)**: Blog listing optimization
- **Individual Posts (`/blog/[slug]`)**: Dynamic metadata from CMS
- Article structured data with author and publisher info

#### Programs Pages
- **Programs Index (`/programs`)**: Program listing optimization
- **Individual Programs (`/programs/[id]`)**: Program-specific metadata

#### Events Pages
- **Events Index (`/events`)**: Event listing optimization
- **Individual Events (`/events/[slug]`)**: Event-specific metadata

#### Contact & Donate Pages
- Contact page with inquiry-focused keywords
- Donate page with donation-focused keywords

## 🔧 Configuration Files

### 1. **SEO Utilities** (`lib/seo.ts`)
- `generateMetadata()`: Creates comprehensive metadata
- `generateStructuredData()`: Generates JSON-LD structured data
- `generateSitemapData()`: Creates sitemap entries
- Default SEO configuration

### 2. **SEO Components**
- `components/SEO/StructuredData.tsx`: JSON-LD component
- `components/SEO/SEOHead.tsx`: Custom head component (optional)

### 3. **Sitemap** (`app/sitemap.ts`)
- Dynamic sitemap generation
- Includes all static and dynamic pages
- Proper priority and change frequency settings

### 4. **Robots.txt** (`app/robots.ts`)
- Search engine directives
- AI bot blocking (GPTBot, ChatGPT-User, etc.)
- Sitemap reference

## 🌐 Environment Variables

Create a `.env.local` file with:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://africapital.org

# SEO Verification
GOOGLE_SITE_VERIFICATION=your_google_verification_code
YANDEX_VERIFICATION=your_yandex_verification_code
YAHOO_VERIFICATION=your_yahoo_verification_code

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
NEXT_PUBLIC_GTM_ID=your_google_tag_manager_id

# Social Media
NEXT_PUBLIC_TWITTER_HANDLE=@africapital
NEXT_PUBLIC_FACEBOOK_PAGE=https://facebook.com/africapital
NEXT_PUBLIC_LINKEDIN_PAGE=https://linkedin.com/company/africapital

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=info@africapital.org
NEXT_PUBLIC_CONTACT_PHONE=+1-234-567-8900
```

## 📊 SEO Checklist

### ✅ Implemented
- [x] Meta titles and descriptions
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Structured data (JSON-LD)
- [x] XML sitemap
- [x] Robots.txt
- [x] Canonical URLs
- [x] Image optimization
- [x] Security headers
- [x] Language alternates

### 🔄 Recommended Next Steps
- [ ] Set up Google Search Console
- [ ] Configure Google Analytics
- [ ] Add Google Tag Manager
- [ ] Set up social media verification
- [ ] Create 404 error page optimization
- [ ] Add breadcrumb navigation
- [ ] Implement schema markup for reviews/testimonials
- [ ] Add FAQ schema markup
- [ ] Optimize Core Web Vitals

## 🎯 SEO Best Practices Implemented

### 1. **Content Optimization**
- Keyword-rich titles and descriptions
- Proper heading structure (H1, H2, H3)
- Alt text for images
- Internal linking structure

### 2. **Technical SEO**
- Fast loading times
- Mobile-responsive design
- Clean URL structure
- Proper HTTP status codes

### 3. **Local SEO** (if applicable)
- Organization schema with address
- Contact information in structured data
- Local business keywords

### 4. **Performance SEO**
- Image optimization
- Lazy loading
- Code splitting
- CDN optimization

## 🔍 SEO Monitoring

### Tools to Use:
1. **Google Search Console** - Monitor search performance
2. **Google Analytics** - Track user behavior
3. **PageSpeed Insights** - Monitor Core Web Vitals
4. **Lighthouse** - Comprehensive SEO audit
5. **Schema Markup Validator** - Validate structured data

### Key Metrics to Track:
- Organic search traffic
- Keyword rankings
- Click-through rates (CTR)
- Core Web Vitals scores
- Mobile usability
- Index coverage

## 🚨 Important Notes

1. **Update Environment Variables**: Make sure to set the correct site URL and verification codes
2. **Test Structured Data**: Use Google's Rich Results Test to validate schema markup
3. **Monitor Performance**: Regularly check Core Web Vitals and page speed
4. **Content Updates**: Keep content fresh and relevant
5. **Link Building**: Implement internal linking strategy

## 📈 Expected SEO Benefits

- Improved search engine rankings
- Better social media sharing
- Enhanced user experience
- Higher click-through rates
- Better mobile performance
- Improved accessibility
- Enhanced security

This comprehensive SEO setup will significantly improve the website's search engine visibility and user experience.
