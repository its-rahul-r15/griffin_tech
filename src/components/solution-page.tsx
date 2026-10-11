import { Link } from 'react-router-dom'

import type { BusinessSolution } from '@/data/solutions'
import { PageShell } from '@/components/page-shell'

export function SolutionPage({ solution }: { solution: BusinessSolution }) {
  return (
    <PageShell>
      <article className="mx-auto w-full max-w-5xl">
        <section className="grid items-center gap-8 py-8 sm:py-14 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5">
            <span className="inline-flex rounded-full border border-border bg-background/70 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.26em] text-muted-foreground">
              Business solution
            </span>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">{solution.headline}</h1>
            <p className="text-base leading-7 text-muted-foreground sm:text-lg">{solution.summary}</p>
            <p className="text-sm text-muted-foreground">
              Designed for <span className="font-medium text-foreground">{solution.audience}</span>.
            </p>
            <Link
              to={`/contact?solution=${solution.slug}`}
              className="inline-flex min-h-11 items-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Discuss a {solution.title} project
            </Link>
          </div>
          <img
            src={solution.image}
            alt={solution.imageAlt}
            className="aspect-video w-full rounded-2xl border border-border bg-card/70 object-cover shadow-sm"
          />
        </section>

        <p className="mb-10 rounded-xl border border-border bg-card/60 p-4 text-sm leading-6 text-muted-foreground">
          The capabilities below are possible project scope, not a claim that a ready-made product is currently deployed. Final features and integrations are confirmed during discovery.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-2xl border border-border bg-card/70 p-6">
            <h2 className="mb-3 text-xl font-semibold">The challenge</h2>
            <p className="leading-7 text-muted-foreground">{solution.problem}</p>
          </section>
          <section className="rounded-2xl border border-border bg-card/70 p-6">
            <h2 className="mb-3 text-xl font-semibold">Who it is for</h2>
            <p className="leading-7 text-muted-foreground">{solution.audience}</p>
            <p className="mt-4 leading-7 text-muted-foreground">{solution.benefit}</p>
          </section>
        </div>

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-semibold">Possible capabilities</h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {solution.possibleFeatures.map((feature) => (
              <li key={feature} className="flex gap-3 rounded-xl border border-border bg-card/60 p-4 text-sm leading-6 text-foreground/85">
                <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-brand" />
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="mb-5 text-2xl font-semibold">How we shape the solution</h2>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solution.deliverySteps.map((step, index) => (
              <li key={step} className="rounded-xl border border-border bg-card/60 p-5">
                <span className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-brand">Step {index + 1}</span>
                <span className="text-sm leading-6 text-muted-foreground">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-10 rounded-2xl border border-border bg-card/60 p-6">
          <h2 className="mb-3 text-xl font-semibold">Optional integrations</h2>
          <ul className="space-y-2 text-sm leading-6 text-muted-foreground">
            {solution.integrations.map((integration) => (
              <li key={integration}>• {integration}</li>
            ))}
          </ul>
        </section>

        <section className="mx-auto mt-10 max-w-3xl">
          <h2 className="mb-5 text-center text-2xl font-semibold">Common questions</h2>
          <div className="divide-y divide-border rounded-2xl border border-border bg-card/60 px-5 sm:px-7">
            {solution.faqs.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-semibold outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span aria-hidden="true" className="text-xl font-normal text-brand transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="pt-3 text-sm leading-6 text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="my-12 rounded-2xl border border-border bg-card/70 p-7 text-center sm:p-10">
          <h2 className="text-2xl font-semibold">Have a project like this in mind?</h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Tell us about your needs and we’ll discuss a practical scope for your organization.</p>
          <Link
            to={`/contact?solution=${solution.slug}`}
            className="mt-6 inline-flex min-h-11 items-center rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
          >
            Discuss this solution
          </Link>
        </section>
      </article>
    </PageShell>
  )
}
