import { ArrowUpRight, BookOpenText, BriefcaseBusiness, GraduationCap, Info, MessageSquareText, School, ShoppingBag, Sparkles, Utensils, Workflow, Wrench } from 'lucide-react'
import * as React from 'react'

import { Footer, type FooterSection } from '@/components/footer'
import { Navbar, type NavLink } from '@/components/navbar'
import { Backdrop } from '@/components/backdrop'
import { Logo } from '@/components/logo'

export const NAV_LINKS: NavLink[] = [
  { label: 'Solutions', href: '/services', icon: <Wrench className="size-4" /> },
  { label: 'Restaurant QR System', href: '/solutions/restaurant-qr', icon: <Utensils className="size-4" /> },
  { label: 'School ERP', href: '/solutions/school-erp', icon: <School className="size-4" /> },
  { label: 'E-commerce', href: '/solutions/ecommerce', icon: <ShoppingBag className="size-4" /> },
  { label: 'Education Platforms', href: '/solutions/education-platforms', icon: <GraduationCap className="size-4" /> },
  { label: 'Custom Software', href: '/solutions/custom-software', icon: <Workflow className="size-4" /> },
  { label: 'AI Solutions', href: '/solutions/ai-solutions', icon: <Sparkles className="size-4" /> },
  { label: 'Our Work', href: '/work', icon: <BriefcaseBusiness className="size-4" /> },
  { label: 'About', href: '/about', icon: <Info className="size-4" /> },
  { label: 'Insights', href: '/insights', icon: <BookOpenText className="size-4" /> },
  { label: 'Contact', href: '/contact', icon: <MessageSquareText className="size-4" /> },
  { label: 'Start a Project', href: '/contact', icon: <ArrowUpRight className="size-4" /> },
]

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: 'Company',
    links: [
      { label: 'Solutions', href: '/services' },
      { label: 'Restaurant QR System', href: '/solutions/restaurant-qr' },
      { label: 'School ERP', href: '/solutions/school-erp' },
      { label: 'E-commerce', href: '/solutions/ecommerce' },
      { label: 'Education Platforms', href: '/solutions/education-platforms' },
      { label: 'Custom Software', href: '/solutions/custom-software' },
      { label: 'AI Solutions', href: '/solutions/ai-solutions' },
      { label: 'Our Work', href: '/work' },
      { label: 'About', href: '/about' },
      { label: 'Insights', href: '/insights' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Process', href: '/process' },
      { label: 'Contact', href: '/contact' },
      { label: 'Privacy policy', href: '/privacy-policy' },
      { label: 'Terms of service', href: '/terms-of-service' },
    ],
  },
  {
    title: 'Connect',
    wide: true,
    links: [
      { label: 'Email', href: 'mailto:hello@griffintech.agency', icon: <ArrowUpRight className="size-4" /> },
      { label: 'LinkedIn', href: 'https://www.linkedin.com', external: true, icon: <ArrowUpRight className="size-4" /> },
      { label: 'Instagram', href: 'https://www.instagram.com', external: true, icon: <ArrowUpRight className="size-4" /> },
      { label: 'X', href: 'https://x.com', external: true, icon: <ArrowUpRight className="size-4" /> },
    ],
  },
]

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-dvh">
      <Backdrop />
      <div className="sm:max-w-6xl lg:mx-auto">
        <Navbar
          logo={
            <a href="/" aria-label="Home" className="rounded-md outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
              <Logo />
            </a>
          }
          links={NAV_LINKS}
        />
        <main className="flex flex-col gap-y-4 p-6 sm:p-12">{children}</main>
        <Footer logo={<Logo />} sections={FOOTER_SECTIONS} owner="Griffin Tech" tagline="Digital products for ambitious teams" />
      </div>
    </div>
  )
}
