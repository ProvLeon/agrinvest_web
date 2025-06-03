# Agrinvest Limited - Professional Website

A professional corporate website for Agrinvest Limited, a fully licensed and registered agribusiness enterprise fostering agricultural development across Ghana since 2018.

## About Agrinvest Limited

Agrinvest Limited is a leading agribusiness enterprise strategically positioned to serve agricultural communities across 7 regions of Ghana. We specialize in farm-to-table integrated value chain solutions designed to enhance productivity and economic well-being of smallholder farmers, with particular focus on women and youth empowerment.

### Company Overview
- **Established**: 2018
- **Legal Status**: Fully Licensed and Registered Agribusiness Enterprise
- **Headquarters**: Ejisu-Abankro, Ashanti Region, Ghana
- **Farmers Served**: 7,487 across 7 regions
- **Service Regions**: Ashanti, Upper West, Northern, Bono East, Bono, North East, Savannah

### Strategic Partnerships
- **USAID** - United States Agency for International Development
- **IFAD** - International Fund for Agricultural Development
- **AfDB** - African Development Bank
- **Government of Ghana** - Ministry of Food and Agriculture

### Core Services

#### 1. High-Quality Agricultural Inputs
- Improved seed varieties for 7 key crops
- Organic fertilizer formulations
- Quality assurance testing
- Farmer-specific recommendations
- Timely delivery across all regions

#### 2. Complete Mechanization Services
- Land preparation and ploughing
- Mechanized precision planting
- Efficient crop protection spraying
- Professional threshing services
- Modern logistics transportation

#### 3. Capacity Building Programs
- Modern agronomic practices training
- Sustainable farming techniques
- Market access education
- Financial literacy programs
- Women and youth empowerment programs

### Focus Crops
Our integrated approach maximizes value for seven key staple and cash crops:
- Maize
- Soybeans
- Cowpeas
- Groundnuts
- Pineapples
- Cassava
- Rice

## Technical Architecture

### Technology Stack
- **Framework**: Next.js 15.3.2 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion 12.15
- **Email**: React Email + Nodemailer
- **Icons**: Lucide React
- **Themes**: next-themes
- **Validation**: Zod

### Performance Features
- **Server-Side Rendering**: Optimized for SEO and performance
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Responsive Design**: Mobile-first approach
- **Dark/Light Mode**: System preference with manual override
- **Smooth Animations**: Framer Motion for professional interactions

## Project Structure

```
agrinvest_web/
├── app/                    # Next.js App Router
│   ├── about/             # About Agrinvest Limited
│   │   ├── page.tsx       # About page
│   │   └── aboutComponent.tsx # About component
│   ├── contact/           # Contact & Partnership
│   │   └── page.tsx       # Contact form & info
│   ├── services/          # Service Portfolio
│   │   └── page.tsx       # Services overview
│   ├── api/               # API Routes
│   │   └── contact/       # Contact form handler
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles & brand colors
├── components/            # Reusable Components
│   ├── ui/               # shadcn/ui components
│   │   ├── logo.tsx      # Professional logo component
│   │   ├── button.tsx    # Button variants
│   │   ├── card.tsx      # Card components
│   │   └── ...           # Other UI components
│   ├── AppShell.tsx      # App wrapper with animations
│   ├── Header.tsx        # Professional navigation
│   ├── Footer.tsx        # Corporate footer
│   └── theme-provider.tsx # Theme management
├── emails/               # Professional Email Templates
│   ├── ContactFormEmail.tsx # Admin notification
│   └── ContactConfirmationEmail.tsx # User confirmation
├── lib/                  # Utilities
│   └── utils.ts          # Utility functions
├── public/               # Static Assets
│   ├── images/           # Professional photography
│   ├── agrinvest_logo.png # Corporate logo
│   └── agrinvest_favicon.png # Favicon
└── package.json          # Dependencies
```

## Brand Guidelines

### Colors (Exact Brand Specification)
- **Primary Green**: #81c141 (Agrinvest Green)
- **Secondary Blue**: #006683 (Agrinvest Blue)
- **Professional Gray**: #58595b (Agrinvest Gray)

### Typography
- **Primary Font**: Inter (Professional, modern)
- **Headings**: Inter (Consistent branding)
- **Weight Hierarchy**: Light, Regular, Medium, Semibold, Bold

### Visual Identity
- Professional photography showcasing real agricultural operations
- Clean, modern design reflecting corporate excellence
- Consistent use of brand colors and typography
- Professional logo implementation with hover effects

## Development Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd agrinvest_web

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
npm run dev
```

### Environment Configuration
```env
# Application Settings
NEXT_PUBLIC_APP_NAME="Agrinvest Limited"
NEXT_PUBLIC_APP_URL="https://investinagric.com"
NEXT_PUBLIC_APP_EMAIL="info@investinagric.com"
NEXT_PUBLIC_APP_CONTACT="233244123456"

# Google Maps Integration
NEXT_PUBLIC_APP_MAPS="[your-google-maps-embed-url]"

# Email Configuration (Contact Form)
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="465"
EMAIL_SECURE="true"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
ADMIN_EMAIL="admin@investinagric.com"
```

## Key Features

### Professional Design
- **Corporate Branding**: Consistent use of Agrinvest brand colors and typography
- **Photography**: Professional images showcasing real agricultural operations
- **Responsive**: Seamless experience across desktop, tablet, and mobile
- **Accessibility**: WCAG 2.1 AA compliant with proper ARIA labels

### Content Management
- **Professional Messaging**: Emphasis on licensed enterprise status
- **Strategic Partnerships**: Prominence of USAID, IFAD, AfDB partnerships
- **Impact Metrics**: Real statistics (7,487 farmers, 7 regions, 7 crops)
- **Service Excellence**: Detailed service portfolio with professional descriptions

### Technical Excellence
- **Performance**: Optimized images, lazy loading, code splitting
- **SEO**: Structured data, meta tags, semantic HTML
- **Contact Form**: Professional email templates with confirmations
- **Animation**: Smooth, professional transitions using Framer Motion

### Pages Overview

#### Homepage
- Hero section with professional messaging
- Impact statistics and achievements
- Service portfolio overview
- Regional coverage visualization
- Strategic partnerships showcase
- Professional testimonials
- Call-to-action sections

#### About Us
- Company overview and professional credentials
- Leadership and governance structure
- Mission and vision statements
- Regional presence and impact
- Strategic partnerships
- Professional excellence highlights

#### Services
- Comprehensive service portfolio
- Detailed service descriptions
- Professional imagery
- Key features and benefits
- Regional coverage information
- Partnership with development organizations

#### Contact
- Professional contact form
- Corporate headquarters information
- Strategic partnership details
- Google Maps integration
- Professional email confirmations

## Deployment

### Production Build
```bash
npm run build
npm run start
```

### Recommended Platforms
- **Vercel** (Optimal for Next.js)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Performance Optimization
- Image optimization with Next.js Image component
- Font optimization with Google Fonts
- Code splitting and lazy loading
- Efficient CSS with Tailwind CSS
- Optimized for Core Web Vitals

## Professional Standards

### Content Standards
- All content reflects licensed enterprise status
- Emphasis on strategic partnerships with development organizations
- Professional terminology and corporate messaging
- Accurate representation of services and impact
- Focus on agricultural excellence and professionalism

### Design Standards
- Consistent brand implementation
- Professional photography usage
- Clean, modern interface design
- Corporate color scheme adherence
- Responsive design principles

### Technical Standards
- TypeScript for type safety
- ESLint for code quality
- Responsive design testing
- Accessibility compliance
- Performance optimization

## Support & Maintenance

### Content Updates
Content is managed through React components and can be updated by modifying the respective page files. All content follows the professional standards established in the brand guidelines.

### Technical Support
For technical issues or enhancements, refer to the component documentation and ensure all changes maintain the professional standards and branding consistency.

## Mission Statement

*"To meet Ghana's increasing demand for high quality grains, cereals, and vegetables through a comprehensive set of investments in the smallholder farmer."*

---

**Agrinvest Limited** - Licensed Agribusiness Enterprise  
**Headquarters**: Ejisu-Abankro, Ashanti Region, Ghana  
**Strategic Partners**: USAID, IFAD, AfDB, Government of Ghana  
**Website**: [investinagric.com](https://investinagric.com)  

© 2024 Agrinvest Limited. All rights reserved.