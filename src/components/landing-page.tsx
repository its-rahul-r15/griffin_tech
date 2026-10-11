import { ArrowRight } from 'lucide-react'
import { BUSINESS_SOLUTIONS } from '@/data/solutions'
import { CtaPanel } from '@/components/cta-panel'
import { FeatureBento, type Feature } from '@/components/feature-bento'
import { Hero } from '@/components/hero'
import { SectionHead } from '@/components/section-head'
import { Highlight } from '@/components/ui/highlight'
import { PageShell } from '@/components/page-shell'

const FEATURES: Feature[] = [
  { title: 'Start with your workflow', description: 'We learn how your team works today and identify what the software needs to support.', tone: 'blue', link: { label: 'Our process', href: '/process' } },
  { title: 'Plan a practical scope', description: 'We shape the experience, integrations, and delivery milestones around your requirements.', tone: 'purple', link: { label: 'Solutions', href: '/services' } },
  { title: 'Build and review together', description: 'Your team can review progress and provide feedback at agreed project milestones.', tone: 'amber', link: { label: 'Discuss a project', href: '/contact' } },
  { title: 'Prepare for launch', description: 'We help with release preparation and a handover that fits the project agreement.', tone: 'grey' },
  { title: 'Design for real users', description: 'We make clear, responsive interfaces for customers, staff, learners, and administrators.', tone: 'blue' },
  { title: 'Integrate with care', description: 'External services are assessed for access, compatibility, and fit before being included.', tone: 'purple' },
  { title: 'Support next steps', description: 'After launch, we can discuss follow-up improvements based on your priorities.', tone: 'amber' },
]

const DELIVERY_STEPS = [
  ['01', 'Understand', 'Learn about your users, business process, constraints, and goals.'],
  ['02', 'Plan', 'Agree the scope, priorities, integrations, and delivery milestones.'],
  ['03', 'Build', 'Design, implement, and review the solution in practical increments.'],
  ['04', 'Launch', 'Prepare a handover and discuss support for the next phase.'],
]

const INDUSTRIES = ['Restaurants & hospitality', 'Schools & education', 'Retail & e-commerce', 'Growing businesses', 'Educators & coaching', 'Digital product teams']

export function LandingPage() {
  return (
    <PageShell>
      <Hero
        badge="Thoughtful software. Built around your business."
        title="Make Your Next Big Idea Work Better."
        primary={{ label: 'Discuss Your Project', href: '/contact' }}
        secondary={{ label: 'Explore Our Solutions', href: '/services' }}
      >
        We turn complex challenges into simple, dependable digital experiences—designed for your people, your process, and what comes next.
      </Hero>

      <section id="solutions" aria-labelledby="solutions-head" className="mt-16 scroll-mt-24 sm:mt-20">
        <SectionHead id="solutions-head" title="Solutions for real-world challenges" action={{ label: 'View all solutions', href: '/services' }}>
          Practical software for organizations that want to <Highlight>simplify operations and serve people better</Highlight>.
        </SectionHead>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {BUSINESS_SOLUTIONS.map((solution) => (
            <article key={solution.slug} className="group overflow-hidden rounded-2xl border border-border bg-card/70 shadow-sm backdrop-blur-sm transition-colors hover:border-brand/50">
              <a href={`/solutions/${solution.slug}`} className="block outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50">
                <div className="aspect-[16/9] overflow-hidden border-b border-border bg-card">
                  <img src={solution.image} alt={solution.imageAlt} loading="lazy" className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.035]" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground">{solution.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{solution.summary}</p>
                  <p className="mt-4 text-xs leading-5 text-muted-foreground">
                    <span className="font-semibold text-foreground">For: </span>{solution.audience}
                  </p>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    <span className="font-semibold text-foreground">Benefit: </span>{solution.benefit}
                  </p>
                  <span className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-brand">
                    Explore solution <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="why-head" className="mt-20 md:mt-24">
        <SectionHead id="why-head" title="How Griffin Tech works">
          We turn ideas into <Highlight>practical, production-ready products</Highlight> with lean execution and clear milestones.
        </SectionHead>
        <FeatureBento features={FEATURES} />
      </section>

      <section aria-labelledby="process-head" className="mt-20 md:mt-24">
        <SectionHead id="process-head" title="From your challenge to a working solution">
          A clear, collaborative process keeps the project grounded in your needs.
        </SectionHead>
        <ol className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {DELIVERY_STEPS.map(([number, title, description]) => (
            <li key={number} className="rounded-2xl border border-border bg-card/60 p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">{number}</span>
              <h3 className="mt-3 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="industries-head" className="mt-20 md:mt-24">
        <SectionHead id="industries-head" title="Built for the people you serve">
          We work with teams across a range of operational and learning environments.
        </SectionHead>
        <div className="flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((industry) => (
            <span key={industry} className="rounded-full border border-border bg-card/60 px-4 py-2 text-sm text-foreground/85">{industry}</span>
          ))}
        </div>
      </section>

      <section id="faq" aria-labelledby="faq-head" className="mt-20 scroll-mt-24 md:mt-24">
        <SectionHead id="faq-head" title="Frequently asked questions">
          Not sure where to start? Here are answers to common questions about working with <Highlight>Griffin Tech</Highlight>.
        </SectionHead>
        <div className="mx-auto w-full max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card/60 px-5 sm:px-7">
          {FAQS.map((item) => (
            <details key={item.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left text-base font-semibold text-foreground outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
                {item.question}
                <span aria-hidden="true" className="shrink-0 text-xl font-normal text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="max-w-2xl pt-3 pr-8 text-sm leading-6 text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <CtaPanel
        className="mt-20 mb-8 md:mt-24"
        heading="Ready to build what’s next?"
        tagline="Tell us about your idea and we’ll shape the right product path for it."
        action={{ label: 'Start a Project', href: '/contact' }}
      />
    </PageShell>
  )
}

const FAQS = [
  {
    question: 'What does Griffin Tech build?',
    answer: 'We design and build business websites, SaaS products, mobile experiences, custom software, and practical AI and automation workflows.',
  },
  {
    question: 'How does a project usually get started?',
    answer: 'We begin with a discovery conversation to understand your goals, users, scope, and timeline. From there, we recommend a clear plan and milestones.',
  },
  {
    question: 'Can you work with our existing team or product?',
    answer: 'Yes. We can collaborate with your in-house team, extend an existing product, or take ownership of a focused project from planning through launch.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Timelines depend on scope and complexity. Once we understand what you need, we’ll map a realistic schedule with clear review and delivery milestones.',
  },
  {
    question: 'Do you provide support after launch?',
    answer: 'Yes. We can help with launch, handover, ongoing improvements, and continued product or engineering support based on your needs.',
  },
]

export default LandingPage
