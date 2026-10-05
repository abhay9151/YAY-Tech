export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  category: 'Development' | 'Design' | 'Marketing' | 'Business';
  description: string;
  deliveryTime: string;
  price: string;
  rating: number;
  reviewsCount: number;
  features: string[];
  image: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  number: string;
  label: string;
  description?: string;
}

export interface WhyChooseUsPillar {
  id: string;
  title: string;
  description: string;
  color: string;
  metricLabel: string;
  metricValue: string;
  actionText: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  client: string;
  completionTime: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  position: string;
  text: string;
  rating: number;
  imageSrc: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export const siteContent = {
  company: {
    name: "YAY Tech",
    legalName: "Your Software Solutions Company",
    primaryTagline: "We Deliver Your Projects On Time, Every Time",
    heroDescription:
      "Professional project delivery services with guaranteed deadlines. We approach clients, understand their needs, and deliver exceptional results within the agreed timeline.",
    secondaryTagline: "Building Intelligent Digital Experiences.",
    guarantees: [
      "100% Quality Guaranteed",
      "On-Time Delivery",
      "Milestone-Based Tracking",
      "24/7 Dedicated Support"
    ],
    contact: {
      phone: "+91 8941092513",
      email: "business@yaytech.in",
      secondaryEmail: "yaytech@gmail.com",
      address: {
        short: "Indirapuram, Ghaziabad, Uttar Pradesh, India",
        full: "WFH Co-working space / Conference Room & office Space, Second Floor, Plot 27, Mall Rd, opposite Raison Armor society, Ahinsa Khand 2, Indirapuram, Ghaziabad, Uttar Pradesh 201014, India"
      },
      businessHours: {
        weekdays: "Monday - Friday: 9:00 AM - 6:00 PM",
        saturday: "Saturday: 10:00 AM - 4:00 PM",
        sunday: "Sunday: Closed"
      },
      maps: {
        embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23221.76867920492!2d77.34909992690056!3d28.639069476972143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf10063d3a6f1%3A0xe6827a21ff62abef!2sWFH%20Co-working%20space%2F%20Conference%20Room%2F%20Day%20Pass%20%26%20office%20Space!5e0!3m2!1sen!2sin!4v1754977504357!5m2!1sen!2sin",
        directionsUrl: "https://www.google.com/maps/dir//Second+Floor,+Plot,+WFH+Co-working+space%2F+Conference+Room%2F+Day+Pass+%26+office+Space,+27,+Mall+Rd,+opposite+Raison+Armor+society,+Ahinsa+Khand+2,+Indirapuram,+Ghaziabad,+Uttar+Pradesh+201014/@28.6390695,77.3490999,14.27z/data=!4m8!4m7!1m0!1m5!1m1!1s0x390cf10063d3a6f1:0xe6827a21ff62abef!2m2!1d77.3826488!2d28.6407957"
      }
    },
    socialLinks: [
      { name: "LinkedIn", href: "https://linkedin.com/company/yaytech", icon: "Linkedin" },
      { name: "Twitter", href: "https://twitter.com/yaytech_in", icon: "Twitter" },
      { name: "Instagram", href: "https://instagram.com/yaytech", icon: "Instagram" },
      { name: "GitHub", href: "https://github.com/yaytech", icon: "Github" }
    ]
  },

  navigation: [
    { label: "Home", href: "/#home" },
    { label: "Services", href: "/#services" },
    { label: "Process", href: "/#process" },
    { label: "Why Choose Us", href: "/#why-us" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Workspace", href: "/#workspace" },
    { label: "Insights", href: "/#insights" },
    { label: "Contact", href: "/#contact" }
  ],

  stats: [
    { number: "100+", label: "Projects Completed", description: "Successfully delivered across global industries" },
    { number: "98%", label: "On-Time Delivery", description: "Guaranteed milestones on strict contractual schedules" },
    { number: "90+", label: "Happy Clients", description: "Long-term partners and enterprise clients" },
    { number: "24/7", label: "Support Available", description: "Round-the-clock proactive engineers" }
  ],

  services: [
    {
      id: "web-development",
      icon: "💻",
      title: "Web Development",
      category: "Development",
      description: "Custom websites and web applications built with modern technologies, scalable architectures, and optimal speed.",
      deliveryTime: "7-14 days",
      price: "₹29,999/-",
      rating: 4.98,
      reviewsCount: 127,
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Mobile First", "API Integration", "Secure Infrastructure"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "mobile-development",
      icon: "📱",
      title: "Mobile App Development",
      category: "Development",
      description: "Native and cross-platform mobile applications for iOS and Android built for seamless fluidity and engagement.",
      deliveryTime: "14-30 days",
      price: "₹49,999/-",
      rating: 4.95,
      reviewsCount: 94,
      features: ["iOS & Android", "Cross-Platform Flutter/React Native", "Native Performance", "App Store Setup", "Offline Caching", "Push Notifications"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "ecommerce-solutions",
      icon: "🛒",
      title: "E-commerce Solutions",
      category: "Development",
      description: "Complete online store setup with payment integration, automated inventory, checkout optimization, and analytics.",
      deliveryTime: "10-20 days",
      price: "₹39,999/-",
      rating: 4.92,
      reviewsCount: 88,
      features: ["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Admin Dashboard", "Conversion Optimization", "Cart Recovery"],
      image: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "graphic-design",
      icon: "🎨",
      title: "Graphic Design",
      category: "Design",
      description: "Professional design services for branding, UI/UX systems, product design, and high-impact marketing materials.",
      deliveryTime: "3-7 days",
      price: "₹10,999/-",
      rating: 4.97,
      reviewsCount: 112,
      features: ["Logo Design", "Brand Identity Guidelines", "Print & Collateral Design", "Digital Assets", "Figma Design Systems", "Iconography"],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "digital-marketing",
      icon: "📈",
      title: "Digital Marketing",
      category: "Marketing",
      description: "Complete digital marketing solutions to grow your online presence, organic search rank, and customer acquisition.",
      deliveryTime: "5-10 days",
      price: "₹16,999/-",
      rating: 4.96,
      reviewsCount: 104,
      features: ["SEO Strategy & Audits", "Social Media Campaigns", "Content Marketing", "Performance Analytics", "Google Ads & Meta Ads", "ROI Tracking"],
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "consulting-services",
      icon: "💡",
      title: "Consulting Services",
      category: "Business",
      description: "Strategic business and technology consulting to optimize operations, automate workflows, and plan scalable growth.",
      deliveryTime: "2-5 days",
      price: "₹1,999/-",
      rating: 4.94,
      reviewsCount: 76,
      features: ["Business Strategy", "Tech Stack Architecture", "Process Automation", "Growth Roadmap", "DevOps & Cloud Audits", "Cost Optimization"],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
    }
  ],

  process: [
    {
      step: 1,
      title: "Discovery & Analysis",
      description: "We analyze your business needs and identify the perfect technological and design solution for your specific goals.",
      iconName: "Search"
    },
    {
      step: 2,
      title: "Proposal & Planning",
      description: "Detailed project proposal with transparent timeline, sprint milestones, architecture diagrams, and clear deliverables.",
      iconName: "FileText"
    },
    {
      step: 3,
      title: "Development & Execution",
      description: "Our expert engineering team builds your project with regular progress updates, automated testing, and constant communication.",
      iconName: "Code2"
    },
    {
      step: 4,
      title: "Delivery & Support",
      description: "On-time delivery with comprehensive quality testing, zero-downtime deployment, and continuous ongoing support.",
      iconName: "ShieldCheck"
    }
  ],

  whyChooseUs: [
    {
      id: "delivery",
      title: "Guaranteed On-Time Delivery",
      description: "We understand that time is money. Every project is delivered precisely when promised with our industry-leading on-time completion rate.",
      color: "blue",
      metricLabel: "Success Rate",
      metricValue: "99.5%",
      actionText: "View case studies",
      features: [
        "Milestone-based tracking system",
        "Daily progress & sprint reports",
        "Risk mitigation protocols"
      ]
    },
    {
      id: "team",
      title: "World-Class Expert Team",
      description: "Our handpicked team of senior developers, architects, and product managers brings 10+ years of battle-tested engineering experience.",
      color: "green",
      metricLabel: "Team Experience",
      metricValue: "10+ Years",
      actionText: "Meet our experts",
      features: [
        "Certified senior professionals",
        "Agile & DevOps modern practices",
        "24/7 dedicated support availability"
      ]
    },
    {
      id: "quality",
      title: "Enterprise-Grade Quality",
      description: "Our rigorous quality assurance process includes comprehensive automated testing protocols, rigorous code reviews, and security audits.",
      color: "purple",
      metricLabel: "Quality Score",
      metricValue: "98.7%",
      actionText: "View quality process",
      features: [
        "Multi-tier automated testing framework",
        "Security & compliance verification",
        "Performance optimization & audits"
      ]
    }
  ],

  portfolio: [
    {
      id: "gupta-law-offices",
      title: "GuptaLawOffices: Legal Services Website",
      category: "Web Development",
      description: "Developed a professional and fully responsive corporate website for a premier law firm featuring structured service pages, practice case categories, client inquiry management, and high-performance search indexation.",
      image: "/assets/GuptaLawOffices-cfwldCdE.png",
      tags: ["React", "Responsive UI", "SEO Architecture", "Legal Tech"],
      client: "Gupta Law Offices",
      completionTime: "12 Days"
    },
    {
      id: "yoga-for-nation",
      title: "Mobile App for Yoga Startup (YogaForNation)",
      category: "Mobile App Development",
      description: "Designed and developed a user-friendly yoga and holistic wellness mobile application complete with live instructor classes, habit progress tracking, personalized routine recommendations, and frictionless subscription management.",
      image: "/assets/YogaForNation-CWyWTq-H.png",
      tags: ["React Native / Flutter", "Live Streaming", "Progress Tracking", "In-App Purchases"],
      client: "YogaForNation Health & Wellness",
      completionTime: "24 Days"
    },
    {
      id: "crm-quotation-management",
      title: "CRM Quotation Management System (QMS)",
      category: "CRM & Enterprise Systems",
      description: "Built a complete CRM-based quotation and sales lifecycle management system featuring automated multi-tier quote generation, customer pipeline tracking, document export, and executive reporting analytics.",
      image: "/assets/QMS-DrwGjg1h.png",
      tags: ["Enterprise CRM", "Workflow Automation", "PDF Generator", "Role-Based Access"],
      client: "Enterprise B2B Manufacturer",
      completionTime: "18 Days"
    }
  ],

  testimonials: [
    {
      id: "t1",
      name: "Ujjwal Sharma",
      position: "Co-founder, Xcentic",
      text: "YAY Tech exceeded our expectations. Their disciplined adherence to delivery deadlines and transparent sprint updates made the entire development process smooth and worry-free.",
      rating: 5,
      imageSrc: "/assets/profile-D9iN4Mzw.jpeg"
    },
    {
      id: "t2",
      name: "Jane Doe",
      position: "Lead Developer, TechCorp",
      text: "This platform has truly transformed how I approach my work. The features are intuitive and the support is exceptional. Highly recommend YAY Tech for any mission-critical web project!",
      rating: 5,
      imageSrc: "/assets/profile-D9iN4Mzw.jpeg"
    },
    {
      id: "t3",
      name: "John Smith",
      position: "Product Manager, InnovateX",
      text: "An outstanding experience from start to finish. The attention to detail, modern design sensibilities, and user-friendly interface make it a joy to use every single day.",
      rating: 5,
      imageSrc: "/assets/profile-D9iN4Mzw.jpeg"
    },
    {
      id: "t4",
      name: "Alice Johnson",
      position: "Marketing Director, Global Brands",
      text: "Incredible value for money! This team boosted our digital productivity significantly. We couldn't be happier with the conversion rate improvements and on-time launch.",
      rating: 5,
      imageSrc: "/assets/profile-D9iN4Mzw.jpeg"
    },
    {
      id: "t5",
      name: "Bob Williams",
      position: "CEO, Future Solutions",
      text: "The best tech delivery partner we have found so far. It's robust, reliable, and constantly improving. A must-have technology partner for anyone serious about their digital roadmap.",
      rating: 5,
      imageSrc: "/assets/profile-D9iN4Mzw.jpeg"
    }
  ],

  footerColumns: [
    {
      title: "Services",
      links: [
        { label: "Web App Development", href: "/#services" },
        { label: "Mobile App Development", href: "/#services" },
        { label: "AI & ML Solutions", href: "/#services" },
        { label: "SaaS Product Development", href: "/#services" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { label: "Custom Enterprise Software", href: "/#services" },
        { label: "Cloud & DevOps Solutions", href: "/#services" },
        { label: "Automation Tools", href: "/#services" },
        { label: "Data & Analytics", href: "/#services" }
      ]
    },
    {
      title: "Products",
      links: [
        { label: "SaaS Platforms", href: "/#services" },
        { label: "API Integrations", href: "/#services" },
        { label: "CRM & ERP Systems", href: "/#portfolio" },
        { label: "AI Automation Tools", href: "/#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/#why-us" },
        { label: "Our Process", href: "/#process" },
        { label: "Portfolio", href: "/#portfolio" },
        { label: "Contact & Support", href: "/#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", href: "/#portfolio" },
        { label: "Documentation", href: "/#services" },
        { label: "Developer Tools", href: "/#services" },
        { label: "Security Guidelines", href: "/#why-us" }
      ]
    },
    {
      title: "Contact",
      links: [
        { label: "+91 8941092513", href: "tel:+918941092513" },
        { label: "business@yaytech.in", href: "mailto:business@yaytech.in" },
        { label: "yaytech@gmail.com", href: "mailto:yaytech@gmail.com" },
        { label: "Indirapuram, Ghaziabad", href: "/#workspace" }
      ]
    }
  ]
};
