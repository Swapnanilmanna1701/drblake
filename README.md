# Dr. Serena Blake - Clinical Psychologist Website

A modern, responsive website for Dr. Serena Blake, a licensed clinical psychologist in Los Angeles, CA. Built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Components**: FAQ accordion, contact form with validation
- **Performance Optimized**: Built with Next.js 14 and modern web standards
- **Accessibility**: WCAG compliant with proper semantic HTML
- **SEO Ready**: Meta tags, structured data, and optimized content

## 📁 Project Structure

```
dr-serena-blake-website/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── dr-serena-blake.jpg
│   │   ├── anxiety-therapy.jpg
│   │   ├── couples-therapy.jpg
│   │   └── trauma-therapy.jpg
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Contact.tsx
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ContactForm.tsx
│   ├── hooks/
│   │   └── useContactForm.ts
│   ├── lib/
│   │   └── utils.ts
│   └── types/
│       └── index.ts
├── .gitignore
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/dr-serena-blake-website.git
cd dr-serena-blake-website
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

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📄 Pages & Sections

### Hero Section
- Full-screen background with gradient overlay
- Compelling headline and subheadline
- Prominent "Book a Free Consult" CTA button
- Professional headshot integration

### About Section
- Dr. Blake's professional background
- 8 years of experience, 500+ sessions
- Approach and philosophy
- Credentials and specializations

### Services Section
- **Anxiety & Stress Management**: Evidence-based techniques for managing anxiety
- **Relationship Counseling**: Strengthen communication and resolve conflicts
- **Trauma Recovery**: Compassionate support for healing from trauma
- Professional images for each service
- Pricing information ($200 individual, $240 couples)

### FAQ Section
- Interactive accordion component
- Insurance and payment information
- Online session availability
- Cancellation policy details

### Contact Section
- Comprehensive contact form with validation
- Required fields: Name, Phone, Email, Message, Preferred time, Consent checkbox
- Office location and hours
- Contact information (phone, email)

## 🎨 Design Features

- **Color Scheme**: Calming blues and greens with warm accent colors
- **Typography**: Professional fonts with excellent readability
- **Animations**: Smooth transitions and hover effects
- **Layout**: Clean, organized sections with proper spacing
- **Mobile-First**: Responsive design that works on all devices

## 🛠️ Technologies Used

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **React Hook Form**: Form handling and validation
- **Framer Motion**: Smooth animations and transitions
- **Lucide React**: Modern icon library

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 320px - 767px

## ⚡ Performance Optimization

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for faster load times
- **SEO Optimization**: Meta tags, OpenGraph, and structured data
- **Accessibility**: WCAG 2.1 AA compliance

## 🔧 Customization

### Updating Content
- Edit `src/lib/data.ts` to update therapist information
- Replace images in `public/images/` directory
- Modify colors in `tailwind.config.js`

### Adding New Sections
1. Create component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Update navigation in `src/components/Header.tsx`

## 📝 Content Management

All content is centralized in data files for easy updates:
- Therapist information
- Service descriptions
- FAQ questions and answers
- Contact details

## 🌐 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Drag and drop build folder
- **AWS Amplify**: Connect GitHub repository
- **DigitalOcean**: Use App Platform

## 📊 Analytics & Tracking

Ready for integration with:
- Google Analytics 4
- Google Tag Manager
- Facebook Pixel
- Hotjar for user behavior analysis

## 🔒 Security Features

- Form validation and sanitization
- CSRF protection
- Secure headers configuration
- Environment variable management

## 📞 Contact Information

**Dr. Serena Blake, PsyD**
- **Address**: 1287 Maplewood Drive, Los Angeles, CA 90026
- **Phone**: (323) 555-0192
- **Email**: serena@blakepsychology.com

**Office Hours**:
- In-person: Tuesday & Thursday, 10 AM–6 PM
- Virtual (Zoom): Monday, Wednesday & Friday, 1 PM–5 PM

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from modern therapy practice websites
- Images from Freepik and Unsplash
- Built with love for mental health professionals

---

*Built with Next.js 14 and Tailwind CSS for optimal performance and user experience.*
