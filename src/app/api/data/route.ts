import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { aboutdata } from '@/app/types/aboutdata'
import { workdata } from '@/app/types/workdata'
import { featureddata } from '@/app/types/featureddata'
import { testimonials } from '@/app/types/testimonials'
import { articles } from '@/app/types/articles'
import { footerlinks } from '@/app/types/footerlinks'
import { servicesData } from '@/app/types/services'

// header nav-links data
const headerData: HeaderItem[] = [
  { label: 'Services', href: '#Services' },
  { label: 'About Us', href: '#About' },
  { label: 'Who Are We', href: '#Digital' },
  { label: 'Our Works', href: '#OurWorks' },
  { label: 'FAQ', href: '#FAQ' },
]

// about data
const Servicedata: servicesData[] = [
  {
    heading: 'Custom Software Development',
    imgSrc: '/images/services/custom_software.svg',
    description: [
      { name: 'Software Architecture Design' },
      { name: 'System Integration Services' },
      { name: 'Data Migration Services' },
      { name: 'Legacy App Modernization' }
    ]
  },
  {
    heading: 'Audit & IT Consulting Services',
    imgSrc: '/images/services/audit_consult.svg',
    description: [
      { name: 'TechGuard Audit' },
      { name: 'CyberSafe Audit & IT Consulting' },
      { name: 'AssuranceEdge & IT Consulting' },
      { name: 'IT Sentry Audit & IT Consulting' }
    ]
  },
  {
    heading: 'Web Application Design & Development',
    imgSrc: '/images/services/web_dev.svg',
    description: [
      { name: 'Web App Development Services' },
      { name: 'Web Portal Development Services' },
      { name: 'Website Development Services' },
      { name: 'Offshore Web Development' }
    ]
  },
  {
    heading: 'Mobile App Design & Development',
    imgSrc: '/images/services/mobile_dev.svg',
    description: [
      { name: 'Android Development Services' },
      { name: 'iOS App Development Services' },
      { name: 'Mobile Application Design Services' },
      { name: 'Enterprise Mobile App Development' }
    ]
  },
  {
    heading: 'Best UI/UX Design Services',
    imgSrc: '/images/services/ui_design.svg',
    description: [
      { name: 'PixelPerfection UI/UX Design' },
      { name: 'DesignCraft UI/UX Design' },
      { name: 'CreativeWave UI/UX Design' },
      { name: 'InterfaceGenius UI/UX Design' }
    ]
  },
  {
    heading: 'Maintenance & Customer Support',
    imgSrc: '/images/services/maint_supp.svg',
    description: [
      { name: 'CareCraft Maintenance' },
      { name: 'FixItPro Maintenance' },
      { name: 'TechCare Maintenance' },
      { name: 'AssistEdge Maintenance' }
    ]
  },
]

// about data
const Aboutdata: aboutdata[] = [
  {
    heading: 'About us.',
    imgSrc: '/images/aboutus/imgOne.svg',
    paragraph:
      `At Sneitech Inc., we are passionate about turning ideas into impactful technology. 
      Founded with the vision of driving innovation and empowering people, Sneitech builds modern digital products that solve real problems and create meaningful experiences. 
      `,
    link: 'Learn more',
  },
  {
    heading: 'Mission.',
    imgSrc: '/images/aboutus/imgTwo.svg',
    paragraph:
      'To build innovative digital products that connect people, empower businesses, and shape the future of technology.',
    link: 'Learn more',
  },
  {
    heading: 'Our Works.',
    imgSrc: '/images/aboutus/imgThree.svg',
    paragraph:
      'To become a global leader in technology innovation — creating solutions that inspire trust, transform industries, and make life smarter, simpler, and more connected.',
    link: 'Learn more',
  },
]

// work-data
const WorkData: workdata[] = [
  {
    profession: 'Co-founder',
    name: 'Sports & Entertainment',
    imgSrc: 'https://res.cloudinary.com/schneider-tech-inc/image/upload/v1757561459/sport_entain_yaqsl3.jpg',
  },
  {
    profession: 'Co-founder',
    name: 'Education',
    imgSrc: 'https://res.cloudinary.com/schneider-tech-inc/image/upload/v1757561456/education_c1jmub.webp',
  },
  {
    profession: 'Co-founder',
    name: 'E-commerce & Retail',
    imgSrc: 'https://res.cloudinary.com/schneider-tech-inc/image/upload/v1757561457/ecommerce_nkeku9.jpg',
  },
  {
    profession: 'Co-founder',
    name: 'Finance & FinTech',
    imgSrc: 'https://res.cloudinary.com/schneider-tech-inc/image/upload/v1757561458/finance_vgcwen.jpg',
  },
  {
    profession: 'Co-founder',
    name: 'Health & Wellness',
    imgSrc: 'https://res.cloudinary.com/schneider-tech-inc/image/upload/v1757561458/health_flbe77.webp',
  },
  {
    profession: 'Co-founder',
    name: 'CyberSecurity',
    imgSrc: 'https://res.cloudinary.com/schneider-tech-inc/image/upload/v1757561458/cybersecurity_klsd0u.jpg',
  },
]

// featured data
const FeaturedData: featureddata[] = [
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
  {
    heading: 'Brand design for a computer brand.',
    imgSrc: '/images/featured/feat1.jpg',
  },
  {
    heading: 'Mobile app 3d wallpaper.',
    imgSrc: '/images/featured/feat2.jpg',
  },
]

// plans data
const PlansData = [
  {
    heading: 'Startup',
    price: {
      monthly: 19,
      yearly: 190,
    },
    user: 'per user',
    features: {
      profiles: '5 Social Profiles',
      posts: '5 Scheduled Posts Per Profile',
      templates: '400+ Templated',
      view: 'Calendar View',
      support: '24/7 Support',
    },
  },
  {
    heading: 'Business',
    price: {
      monthly: 29,
      yearly: 290,
    },
    user: 'per user',
    features: {
      profiles: '10 Social Profiles',
      posts: '5 Scheduled Posts Per Profile',
      templates: '600+ Templated',
      view: 'Calendar View',
      support: '24/7 VIP Support',
    },
  },
  {
    heading: 'Agency',
    price: {
      monthly: 59,
      yearly: 590,
    },
    user: 'per user',
    features: {
      profiles: '100 Social Profiles',
      posts: '100 Scheduled Posts Per Profile',
      templates: '800+ Templated',
      view: 'Calendar View',
      support: '24/7 VIP Support',
    },
  },
]

// testimonial data
const TestimonialsData: testimonials[] = [
  {
    name: 'Robert Fox',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 5,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
  {
    name: 'Robert Fox',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user1.svg',
    rating: 4,
  },
  {
    name: 'Leslie Alexander',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user2.svg',
    rating: 4,
  },
  {
    name: 'Cody Fisher',
    profession: 'CEO, Parkview Int.Ltd',
    comment:
      'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour',
    imgSrc: '/images/testimonial/user3.svg',
    rating: 4,
  },
]

// artical data
const ArticlesData: articles[] = [
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article2.png',
  },
  {
    time: '5 min',
    heading: 'We Launch Delia',
    heading2: 'Webflow this Week!',
    name: 'Published on Startupon',
    date: 'february 19, 2025',
    imgSrc: '/images/articles/article3.png',
  },
]

// footer links data
const FooterLinksData: footerlinks[] = [
  {
    section: 'Menu',
    links: [
      { label: 'Services', href: '#Services' },
      { label: 'About Us', href: '#About' },
      { label: 'Who Are We', href: '#Digital' },
      { label: 'Our Work', href: '#OurWorks' },
      { label: 'FAQ', href: '#FAQ' },
    ],
  },
  {
    section: 'Category',
    links: [
      { label: 'Design', href: '/' },
      { label: 'Mockup', href: '/' },
      { label: 'View all', href: '/' },
      { label: 'Log In', href: '/' },
    ],
  },
  {
    section: 'Pages',
    links: [
      { label: '404', href: '/' },
      { label: 'Instructions', href: '/' },
      { label: 'License', href: '/' },
    ],
  },
  {
    section: 'Others',
    links: [
      { label: 'Styleguide', href: '/' },
      { label: 'Changelog', href: '/' },
    ],
  },
]

export const GET = () => {
  return NextResponse.json({
    headerData,
    Servicedata,
    Aboutdata,
    WorkData,
    FeaturedData,
    PlansData,
    TestimonialsData,
    ArticlesData,
    FooterLinksData,
  })
}
