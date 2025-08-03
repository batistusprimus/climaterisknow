# Sentinel Shield - Climate Intelligence Website

## 🌟 Project Overview

Sentinel Shield is a professional B2B website for a climate intelligence company that helps Texas enterprises transform unpredictable natural disasters into quantifiable business metrics. The site is built with Next.js 15, TypeScript, and Tailwind CSS, featuring a modern, responsive design optimized for corporate clients.

**Domain:** climaterisknow.com  
**Tagline:** "The data-powered climate intelligence company that transforms unpredictable natural disasters into quantifiable business metrics for Texas enterprises."

## 🚀 Features

### ✅ Completed Features

- **Professional Design System**
  - Custom color palette (Deep Sentinel Blue, Sky Intelligence, etc.)
  - Typography system with Inter, Space Grotesk, and IBM Plex Mono
  - Responsive design optimized for all devices
  - Corporate B2B aesthetic

- **Core Pages**
  - 🏠 **Homepage** - Hero section, statistics, climate risk categories, business benefits
  - 📋 **Capture Page** - Lead generation with Tally form integration
  - 👥 **Who We Are** - Company mission, vision, values, team, and story
  - 🎯 **Why We Do What We Do** - Motivation, impact, and commitment
  - 📚 **Resources** - Downloadable whitepapers, case studies, and guides
  - 📰 **Blog** - Climate intelligence insights and expert analysis
  - ⚖️ **Legal Pages** - Privacy Policy, Terms of Service, Cookie Policy

- **Components**
  - 🧭 **Header** - Responsive navigation with mobile menu
  - 🦶 **Footer** - Multi-column layout with CTA section
  - 🔘 **Button** - Multiple variants (primary, secondary, outline, alert)
  - 🪟 **Modal** - Reusable popup component
  - 📱 **Responsive Design** - Mobile-first approach

- **Technical Features**
  - Next.js 15 with App Router
  - TypeScript for type safety
  - Tailwind CSS with custom configuration
  - SEO optimization with metadata
  - Google Fonts integration
  - Utility functions and helpers

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter, Space Grotesk, IBM Plex Mono
- **Form Integration:** Tally (ready for integration)
- **Deployment:** Ready for Vercel/Netlify

## 📁 Project Structure

```
sentinel-shield/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── capture/            # Lead capture page
│   │   ├── who-we-are/         # About page
│   │   ├── why-we-do/          # Motivation page
│   │   ├── resources/          # Resources page
│   │   ├── blog/               # Blog page
│   │   └── legal/              # Legal pages
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Basic UI components
│   │   └── layout/             # Layout components
│   ├── lib/                    # Utilities and constants
│   │   ├── constants.ts        # Site configuration
│   │   └── utils.ts            # Helper functions
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
├── tailwind.config.ts          # Tailwind configuration
└── package.json               # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary:** Deep Sentinel Blue (#1E3A8A)
- **Secondary:** Sky Intelligence (#0EA5E9)
- **Neutral:** Steel Gray (#64748B)
- **Background:** Arctic White (#F8FAFC)
- **Alert:** Alert Orange (#F97316)
- **Success:** Positive Green (#10B981)

### Typography
- **Primary Font:** Inter (400-900 weights)
- **Secondary Font:** Space Grotesk (display elements)
- **Monospace Font:** IBM Plex Mono (data/metrics)

### Component Classes
- `.btn` - Base button styles
- `.card` - Content cards with hover effects
- `.container-custom` - Responsive container
- `.section-padding` - Consistent section spacing

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sentinel-shield
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Environment Setup

Create a `.env.local` file for environment variables:
```env
# Tally Form Configuration
NEXT_PUBLIC_TALLY_FORM_ID=your-actual-form-id
NEXT_PUBLIC_TALLY_EMBED_URL=https://tally.so/embed/your-form-id

# Analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# Contact Information
NEXT_PUBLIC_CONTACT_EMAIL=contact@climaterisknow.com
NEXT_PUBLIC_CONTACT_PHONE=+1-555-123-4567
```

## 📝 Content Management

### Updating Site Content

All site content is managed through the `src/lib/constants.ts` file:

- **Company Information:** Mission, vision, values
- **Navigation:** Menu items and links
- **Contact Details:** Email, phone, address
- **Features:** Business benefits and statistics
- **Climate Categories:** Risk types and descriptions

### Adding Blog Posts

Blog posts are currently static in `src/app/blog/page.tsx`. To make them dynamic:

1. Create a content management system (CMS)
2. Add a database for blog storage
3. Implement dynamic routing for individual posts

### Updating Resources

Resources are managed in `src/app/resources/page.tsx`. To add new resources:

1. Update the `resources` array with new items
2. Ensure download links point to actual files
3. Update categories as needed

## 🔧 Customization

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with the component
3. Include metadata export for SEO
4. Update navigation in `constants.ts`

### Styling Changes

1. Modify `tailwind.config.ts` for design system changes
2. Update `src/app/globals.css` for global styles
3. Use existing utility classes when possible

### Component Development

1. Create new components in `src/components/`
2. Export types from `src/types/index.ts`
3. Follow the existing pattern for props and styling

## 🔗 Third-Party Integrations

### Tally Forms
- Update `TALLY_FORM_CONFIG` in constants
- Replace iframe src with actual form URL
- Test form submissions

### Analytics
- Add Google Analytics or other tracking
- Implement conversion tracking for lead capture
- Monitor page performance

### Email Marketing
- Integrate newsletter signup with email service
- Set up automated email sequences
- Track subscription conversions

## 📱 Responsive Design

The site is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px  
- **Desktop:** > 1024px
- **Large Desktop:** > 1280px

## 🔍 SEO Optimization

- Structured metadata for all pages
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast loading with Next.js optimization
- Mobile-friendly design

## 🚀 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on git push

### Other Platforms

The site can be deployed to:
- Netlify
- AWS Amplify
- Digital Ocean
- Any hosting service supporting Node.js

## 📊 Performance

- Lighthouse score optimization
- Image optimization with Next.js
- Font loading optimization
- Code splitting and lazy loading

## 🐛 Known Issues

- Tally form requires actual form ID for integration
- Blog posts are static (need CMS integration)
- Resource downloads need actual file hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary software for Sentinel Shield. All rights reserved.

## 📞 Support

For questions or support:
- **Email:** contact@climaterisknow.com
- **Phone:** +1 (555) 123-4567

---

**Built with ❤️ for Texas enterprises fighting climate uncertainty.**
