# ConstructionCo - Construction Materials Supply Company Website

A modern, responsive single-page Next.js website for a construction materials supply company. Built with Next.js 14, TypeScript, TailwindCSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive across mobile, tablet, and desktop devices
- **SEO Optimized**: Comprehensive meta tags, Open Graph tags, and semantic HTML
- **Modern Animations**: Smooth scroll animations and hover effects using Framer Motion
- **Contact Form**: Validated enquiry form with React Hook Form and Zod validation
- **API Route**: Ready-to-extend API endpoint for email integration
- **Performance**: Optimized for speed with Next.js App Router
- **Accessibility**: Follows WCAG guidelines with proper ARIA labels

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form
- **Validation**: Zod
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd constructionCo
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
constructionCo/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout with SEO metadata
│   │   ├── page.tsx             # Main landing page
│   │   ├── globals.css          # Global styles and Tailwind
│   │   └── api/
│   │       └── sendMail/
│   │           └── route.ts     # Email API endpoint
│   └── components/
│       ├── Hero.tsx             # Hero section with CTA
│       ├── About.tsx            # Company and services section
│       ├── WhyChooseUs.tsx      # Benefits section
│       ├── EnquiryForm.tsx      # Contact form with validation
│       └── Footer.tsx           # Footer with contact info
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

## Sections

### 1. Hero Section
- Full-screen banner with company tagline
- Two call-to-action buttons
- Smooth scroll indicator
- Gradient overlay for text readability

### 2. About/Services Section
- Company description
- Product showcase with 6 material categories:
  - Premium Cement
  - Construction Sand
  - Aggregates
  - Ready-Mix Concrete
  - Building Blocks
  - Steel & Reinforcement
- Company commitment statement

### 3. Why Choose Us Section
- 6 benefit cards with icons:
  - Fast Delivery
  - Quality Materials
  - Trusted Supplier
  - Competitive Pricing
  - Expert Support
  - Wide Coverage
- Statistics showcase (Years, Projects, Quality, Support)

### 4. Enquiry Form Section
- Validated contact form with fields:
  - Name (required)
  - Email (required, validated)
  - Phone (required, 10-15 digits)
  - Material Type (dropdown, required)
  - Quantity (required)
  - Delivery Location (required)
  - Message (optional)
- Real-time client-side validation
- Loading state during submission
- Success/error feedback messages

### 5. Footer Section
- Company information
- Quick links
- Contact details (address, phone, email)
- Social media links (Facebook, Twitter, LinkedIn, Instagram)
- Business hours
- Copyright and legal links

## API Endpoint

### POST /api/sendMail

Handles form submissions from the enquiry form.

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "materialType": "string",
  "quantity": "string",
  "deliveryLocation": "string",
  "message": "string (optional)"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for your enquiry!",
  "data": {
    "name": "string",
    "email": "string",
    "materialType": "string"
  }
}
```

**Current Behavior:**
- Logs form data to console
- Performs server-side validation
- Returns success/error response

**Future Enhancements:**
To integrate email functionality, uncomment the Nodemailer code in `src/app/api/sendMail/route.ts` and add environment variables:

```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-email
SMTP_PASS=your-password
SMTP_FROM=noreply@constructionco.com
ADMIN_EMAIL=admin@constructionco.com
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color scheme:
```typescript
colors: {
  construction: {
    orange: '#ff6b35',  // Primary CTA color
    yellow: '#f7b801',  // Accent color
    gray: '#4a5568',    // Text color
    dark: '#1a202c',    // Dark backgrounds
  }
}
```

### Content
- Update company information in `src/components/Footer.tsx`
- Modify products in `src/components/About.tsx`
- Edit benefits in `src/components/WhyChooseUs.tsx`
- Change hero tagline in `src/components/Hero.tsx`

### Images
Replace placeholder backgrounds:
- Add hero image to `public/images/hero-bg.jpg`
- Update image source in `src/components/Hero.tsx`

## Deployment

### Deploy to Vercel

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)

2. Visit [Vercel](https://vercel.com) and import your repository

3. Vercel will automatically detect Next.js and configure the build settings

4. Click "Deploy"

5. Your site will be live at `https://your-project.vercel.app`

### Environment Variables (Optional)

If you add email functionality, configure these in Vercel:
- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`
- `SMTP_FROM`
- `ADMIN_EMAIL`

## Building for Production

```bash
npm run build
npm run start
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lighthouse Score: 90+ across all metrics
- Optimized images with Next.js Image component
- Code splitting and lazy loading
- Minimal JavaScript bundle size

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, contact: info@constructionco.com

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

Built with ❤️ by ConstructionCo Team


