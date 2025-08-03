// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// Button component types
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'alert';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

// Modal/Popup types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Blog post types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  slug: string;
  tags: string[];
  featuredImage?: string;
  readTime?: number;
}

// Resource types
export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'whitepaper' | 'case-study' | 'report' | 'guide';
  downloadUrl: string;
  thumbnailUrl?: string;
  publishedAt: string;
  tags: string[];
}

// Company info types
export interface CompanyInfo {
  name: string;
  tagline: string;
  description: string;
  mission: string;
  vision: string;
  values: string[];
}

// Contact form types
export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  jobTitle: string;

  message: string;
  interests: string[];
}

// Climate risk metrics types
export interface ClimateRiskMetric {
  type: 'hurricane' | 'flood' | 'drought' | 'heatwave' | 'wildfire';
  score: number;
  probability: number;
  impact: string;
  timeline: string;
  region: string;
}

// SEO types
export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
} 