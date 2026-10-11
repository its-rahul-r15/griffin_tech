import { useState } from 'react'
import { BrowserRouter, Link, Navigate, Route, Routes, useSearchParams } from 'react-router-dom'
import type { FormEvent, ReactNode } from 'react'

import { LandingPage } from '@/components/landing-page'
import { PageShell } from '@/components/page-shell'
import { SolutionPage } from '@/components/solution-page'
import { BUSINESS_SOLUTIONS } from '@/data/solutions'

const processSteps = [
  { title: 'Discover', text: 'We clarify the business problem, user needs, and product priorities.' },
  { title: 'Design', text: 'We map the user journey, product structure, and interaction patterns.' },
  { title: 'Build', text: 'We design and ship the product with clear milestones and rapid feedback loops.' },
  { title: 'Launch', text: 'We support rollout, polish, and metrics-driven iteration after in-market launch.' },
]

function StandardPage({ title, intro, children, cta }: { title: string; intro: string; children: ReactNode; cta?: ReactNode }) {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-5xl pt-10 pb-8 sm:pt-16">
        <div className="mb-8 space-y-4">
          <span className="inline-flex rounded-full border border-border bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
            Griffin Tech
          </span>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">{intro}</p>
          {cta}
        </div>
        {children}
      </section>
    </PageShell>
  )
}

function HomePage() {
  return <LandingPage />
}

function ServicesPage() {
  return (
    <StandardPage
      title="Solutions for real business needs"
      intro="Explore software and digital product projects we can scope around your organization, users, and day-to-day workflows."
      cta={<Link to="/contact" className="inline-flex items-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">Discuss your project</Link>}
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {BUSINESS_SOLUTIONS.map((solution) => (
          <Link key={solution.slug} to={`/solutions/${solution.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-card/70 transition-colors hover:border-brand/50">
            <img src={solution.image} alt={solution.imageAlt} loading="lazy" className="aspect-video w-full border-b border-border object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-semibold">{solution.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{solution.summary}</p>
              <span className="mt-4 inline-flex text-sm font-semibold text-brand">Explore solution <span aria-hidden="true" className="ml-2">→</span></span>
            </div>
          </Link>
        ))}
      </div>
    </StandardPage>
  )
}

function WorkPage() {
  return (
    <StandardPage
      title="Our work"
      intro="We are preparing public project case studies. In the meantime, explore the solution areas we can shape around your requirements."
      cta={<Link to="/contact" className="inline-flex items-center rounded-full border border-border bg-background/80 px-5 py-3 text-sm font-semibold text-foreground transition hover:border-brand">Discuss your project</Link>}
    >
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {BUSINESS_SOLUTIONS.map((solution) => (
          <Link key={solution.slug} to={`/solutions/${solution.slug}`} className="group overflow-hidden rounded-2xl border border-border bg-card/70 transition-colors hover:border-brand/50">
            <img src={solution.image} alt={solution.imageAlt} loading="lazy" className="aspect-video w-full border-b border-border object-cover" />
            <div className="p-5">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Solution area</span>
              <h2 className="mt-2 text-xl font-semibold">{solution.title}</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{solution.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </StandardPage>
  )
}

function AboutPage() {
  return (
    <StandardPage
      title="We help teams turn strategy into momentum"
      intro="Griffin Tech partners with founders, operators, and marketing teams to clarify priorities, build better digital experiences, and ship with confidence."
    >
      <div className="grid gap-6 md:grid-cols-3">
        {[
          ['Strategy-first', 'We align product, message, and technical delivery around what matters most to your business.'],
          ['Hands-on execution', 'We work in the details—design systems, frontend polish, implementation quality, and final launch support.'],
          ['Built to adapt', 'We structure product decisions to stay resilient as the roadmap and business goals evolve.'],
        ].map(([title, text]) => (
          <div key={title} className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm">
            <h2 className="mb-3 text-xl font-semibold">{title}</h2>
            <p className="text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </StandardPage>
  )
}

function ProcessPage() {
  return (
    <StandardPage
      title="How we work"
      intro="The process is designed to keep momentum high without sacrificing clarity, structure, or product quality."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {processSteps.map((step, index) => (
          <div key={step.title} className="rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-brand">Step {index + 1}</div>
            <h2 className="mb-3 text-xl font-semibold">{step.title}</h2>
            <p className="text-muted-foreground">{step.text}</p>
          </div>
        ))}
      </div>
    </StandardPage>
  )
}

function ContactPage() {
  const [searchParams] = useSearchParams()
  const [handoffMessage, setHandoffMessage] = useState('')
  const selectedSolution = BUSINESS_SOLUTIONS.find((solution) => solution.slug === searchParams.get('solution'))

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const fields = [
      `Name: ${formData.get('name')}`,
      `Business email: ${formData.get('email')}`,
      `Company: ${formData.get('company') || 'Not provided'}`,
      `Interested solution: ${BUSINESS_SOLUTIONS.find((solution) => solution.slug === formData.get('solution'))?.title ?? formData.get('solution')}`,
      `Budget: ${formData.get('budget')}`,
      `Timeline: ${formData.get('timeline')}`,
      `Project requirements: ${formData.get('requirements')}`,
    ]
    const subject = encodeURIComponent(`Project inquiry: ${formData.get('solution')}`)
    const body = encodeURIComponent(fields.join('\n\n'))
    // Replace this mailto handoff with the project's server endpoint when one is available.
    window.location.href = `mailto:hello@griffintech.agency?subject=${subject}&body=${body}`
    setHandoffMessage('Your email app should open with this inquiry. The message is not sent until you review and send it from your email app.')
  }

  return (
    <StandardPage
      title="Tell us about your next build"
      intro="Share your requirements, and we’ll discuss a practical scope. This form prepares an email for you; it does not submit to a backend."
    >
      <form onSubmit={handleSubmit} className="grid gap-5 rounded-2xl border border-border bg-card/70 p-6 backdrop-blur-sm md:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>Name</span>
          <input name="name" required autoComplete="name" className="w-full rounded-xl border border-border bg-background px-3 py-2.5 outline-none ring-0 placeholder:text-muted-foreground" placeholder="Your name" />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>Business email</span>
          <input name="email" type="email" required autoComplete="email" className="w-full rounded-xl border border-border bg-background px-3 py-2.5 outline-none ring-0 placeholder:text-muted-foreground" placeholder="you@company.com" />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>Company (optional)</span>
          <input name="company" autoComplete="organization" className="w-full rounded-xl border border-border bg-background px-3 py-2.5 outline-none ring-0 placeholder:text-muted-foreground" placeholder="Company or organization" />
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>Interested solution</span>
          <select name="solution" required defaultValue={selectedSolution?.slug ?? ''} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground">
            <option value="" disabled>Select a solution</option>
            {BUSINESS_SOLUTIONS.map((solution) => <option key={solution.slug} value={solution.slug}>{solution.title}</option>)}
            <option value="Other">Other</option>
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>Budget range</span>
          <select name="budget" required defaultValue="" className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground">
            <option value="" disabled>Select a range</option>
            <option>Under $5,000</option><option>$5,000–$15,000</option><option>$15,000–$50,000</option><option>$50,000+</option><option>Not sure yet</option>
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground">
          <span>Expected timeline</span>
          <select name="timeline" required defaultValue="" className="w-full rounded-xl border border-border bg-background px-3 py-2.5 text-foreground">
            <option value="" disabled>Select a timeline</option>
            <option>As soon as possible</option><option>Within 1–3 months</option><option>Within 3–6 months</option><option>Flexible</option>
          </select>
        </label>
        <label className="space-y-2 text-sm font-medium text-foreground md:col-span-2">
          <span>Project requirements</span>
          <textarea name="requirements" required rows={6} className="w-full rounded-xl border border-border bg-background px-3 py-2.5 outline-none ring-0 placeholder:text-muted-foreground" placeholder="What would you like the solution to help you do?" />
        </label>
        <div className="md:col-span-2 flex flex-col items-end gap-3">
          {handoffMessage && <p role="status" className="text-sm text-muted-foreground">{handoffMessage}</p>}
          <button type="submit" className="inline-flex items-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90">Prepare email inquiry</button>
        </div>
      </form>
    </StandardPage>
  )
}

function PolicyPage({ title, body }: { title: string; body: string[] }) {
  return (
    <PageShell>
      <section className="mx-auto w-full max-w-3xl py-12">
        <h1 className="mb-6 text-4xl font-semibold tracking-tight">{title}</h1>
        <div className="space-y-4 rounded-2xl border border-border bg-card/70 p-6 text-base leading-7 text-muted-foreground backdrop-blur-sm">
          {body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </PageShell>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        {BUSINESS_SOLUTIONS.map((solution) => (
          <Route key={solution.slug} path={`/solutions/${solution.slug}`} element={<SolutionPage solution={solution} />} />
        ))}
        <Route path="/services/ai-solutions" element={<Navigate to="/solutions/ai-solutions" replace />} />
        <Route path="/services/saas" element={<Navigate to="/solutions/custom-software" replace />} />
        <Route path="/services/web-development" element={<Navigate to="/solutions/ecommerce" replace />} />
        <Route path="/services/mobile-apps" element={<Navigate to="/solutions/custom-software" replace />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/insights" element={<StandardPage title="Insights" intro="Practical perspectives on building useful software, digital products, and business workflows."><p className="rounded-2xl border border-border bg-card/70 p-6 text-muted-foreground">Articles will be published here as they are ready.</p></StandardPage>} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PolicyPage title="Privacy Policy" body={['We collect only the information necessary to deliver and improve our services.', 'We use this information to support communications, project planning, and service delivery. We do not sell personal data and limit retention to the periods required by law or business operations.', 'If you need access to, correction of, or deletion of your information, please get in touch using the contact details on our website.']} />} />
        <Route path="/terms-of-service" element={<PolicyPage title="Terms of Service" body={['These terms govern use of our website and consulting services. By engaging Griffin Tech, you agree to the scope of work, payment terms, and communication standards described in our project agreement.', 'We provide services with reasonable care and professionalism, while client responsibilities include timely feedback, access to stakeholders, and acceptance of agreed milestones.', 'We reserve the right to update these terms as needed, with changes taking effect on publication.']} />} />
        <Route path="*" element={<PageShell><section className="mx-auto w-full max-w-3xl py-20 text-center"><h1 className="text-4xl font-semibold">Page not found</h1><p className="mt-4 text-muted-foreground">The page you requested does not exist.</p><Link to="/" className="mt-6 inline-flex rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white">Back home</Link></section></PageShell>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
