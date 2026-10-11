export type SolutionFaq = {
  question: string
  answer: string
}

export type BusinessSolution = {
  slug: string
  title: string
  audience: string
  benefit: string
  summary: string
  headline: string
  problem: string
  image: string
  imageAlt: string
  possibleFeatures: string[]
  deliverySteps: string[]
  integrations: string[]
  faqs: SolutionFaq[]
}

export const BUSINESS_SOLUTIONS: BusinessSolution[] = [
  {
    slug: 'restaurant-qr',
    title: 'Restaurant QR Ordering',
    audience: 'Restaurants, cafés, food outlets, and hospitality businesses',
    benefit: 'Make menu browsing and order handling convenient for guests and staff.',
    summary: 'A mobile-friendly digital menu and ordering experience planned around your restaurant workflow.',
    headline: 'Turn Every Table Into a Digital Ordering Experience.',
    problem: 'Printed menus and disconnected order handling can make menu updates and the guest ordering journey harder to manage.',
    image: '/images/griffin-restaurant.svg',
    imageAlt: 'Illustration of a restaurant table QR menu and a digital ordering screen',
    possibleFeatures: ['Table or menu QR entry points', 'Digital menu with categories and item details', 'Mobile-friendly cart and order placement', 'Order-management and menu-administration views'],
    deliverySteps: ['Map your menu, service flow, and staff roles', 'Design the customer ordering journey and admin experience', 'Build and review the agreed features with your team', 'Prepare launch support and a handover plan'],
    integrations: ['Online payments, where selected and supported by the chosen provider', 'POS or other restaurant systems, subject to access and API compatibility'],
    faqs: [
      { question: 'Can customers order from their phones?', answer: 'A mobile-friendly menu and ordering flow can be included in the agreed project scope.' },
      { question: 'Can you connect online payments or a POS?', answer: 'These are optional integrations. Feasibility depends on the provider, access, and API capabilities.' },
    ],
  },
  {
    slug: 'school-erp',
    title: 'School ERP & Education Management',
    audience: 'Schools and education organizations seeking to organize administrative workflows',
    benefit: 'Bring agreed school records and everyday administration into a clearer workflow.',
    summary: 'A school-management application shaped around the academic and administrative modules your team needs.',
    headline: 'One Platform to Simplify School Management.',
    problem: 'When records and recurring administration are spread across disconnected tools, staff can spend extra effort finding and updating information.',
    image: '/images/griffin-school-erp.svg',
    imageAlt: 'Illustration of a school management dashboard with attendance and academic summaries',
    possibleFeatures: ['Student, teacher, and staff records', 'Admissions, classes, sections, and sessions', 'Attendance and academic-record workflows', 'Fee, examination, and reporting modules where required'],
    deliverySteps: ['Understand current school processes and user roles', 'Prioritize the modules needed for an initial release', 'Design role-appropriate workflows and dashboards', 'Build, review, and prepare a team handover'],
    integrations: ['Payment, messaging, or other external systems only when selected and confirmed as technically feasible'],
    faqs: [
      { question: 'Does the ERP include every school module by default?', answer: 'No. Modules are selected during discovery and delivered according to the agreed requirements.' },
      { question: 'Can different staff members have different access?', answer: 'Role-based access can be scoped for the agreed user roles and data workflows.' },
    ],
  },
  {
    slug: 'ecommerce',
    title: 'E-commerce Website',
    audience: 'Retailers, D2C brands, wholesalers, and businesses preparing to sell online',
    benefit: 'Create a clear online product catalogue and shopping journey that your team can manage.',
    summary: 'A responsive storefront and commerce workflow tailored to your catalogue and operations.',
    headline: 'Build an Online Store Ready for Your Next Stage of Growth.',
    problem: 'Businesses need a reliable way to present products online and manage the shopping journey across screen sizes.',
    image: '/images/griffin-ecommerce.svg',
    imageAlt: 'Illustration of a responsive online storefront and product catalogue',
    possibleFeatures: ['Responsive storefront and product catalogue', 'Product categories, details, and filters', 'Cart and checkout flow', 'Order and catalogue administration'],
    deliverySteps: ['Review catalogue structure and fulfilment needs', 'Plan storefront pages and customer journey', 'Build and review the agreed catalogue and checkout features', 'Prepare launch and operational handover'],
    integrations: ['Payment gateways, shipping, and delivery providers are optional and depend on provider availability and project scope'],
    faqs: [
      { question: 'Can you connect our preferred payment provider?', answer: 'Payment integration can be evaluated during discovery based on your provider, account, and technical requirements.' },
      { question: 'Can our team manage products and orders?', answer: 'An administration workflow can be included in the project scope for catalogue and order tasks.' },
    ],
  },
  {
    slug: 'education-platforms',
    title: 'Educational Platforms',
    audience: 'Educators, coaching institutes, education businesses, and digital learning teams',
    benefit: 'Organize learning content and learner activity in a more accessible digital experience.',
    summary: 'A learning platform planned around your content, learner journey, and administrative needs.',
    headline: 'Create Better Digital Learning Experiences.',
    problem: 'Learning resources and activities can be difficult to navigate when they are spread across disconnected channels.',
    image: '/images/griffin-education.svg',
    imageAlt: 'Illustration of a digital learning dashboard, lessons, and assessment progress',
    possibleFeatures: ['Learner registration and profiles', 'Course, lesson, and resource management', 'Quizzes, assessments, and progress views', 'Learning dashboards and online-test workflows'],
    deliverySteps: ['Map learners, educators, content, and learning workflows', 'Plan the course structure and access rules', 'Build the agreed learning experience and administration tools', 'Review content flows and prepare launch handover'],
    integrations: ['Video, subscription, or payment providers can be assessed as optional project integrations'],
    faqs: [
      { question: 'Can the platform include courses and assessments?', answer: 'Course and assessment workflows can be included when they are part of the agreed requirements.' },
      { question: 'Can we use our existing video or payment provider?', answer: 'We can assess the selected provider and its integration options during discovery.' },
    ],
  },
  {
    slug: 'custom-software',
    title: 'Custom Business Software',
    audience: 'Organizations with operational workflows that do not fit their off-the-shelf tools',
    benefit: 'Shape software around your processes rather than forcing your team into a generic workflow.',
    summary: 'Custom web applications, dashboards, portals, and workflow tools scoped to your organization.',
    headline: 'Software Designed Around the Way Your Business Works.',
    problem: 'Generic tools may not match an organization’s processes, reporting needs, or connections between systems.',
    image: '/images/griffin-saas.svg',
    imageAlt: 'Illustration of a configurable business software dashboard',
    possibleFeatures: ['Internal applications and custom portals', 'Admin dashboards and reporting workflows', 'CRM-style, inventory, or operations modules', 'API integrations and modernization of existing applications'],
    deliverySteps: ['Understand users, existing systems, and workflow constraints', 'Define a focused scope and implementation plan', 'Design, build, and review in practical milestones', 'Prepare deployment support and documentation'],
    integrations: ['External APIs and existing systems are assessed individually for access, compatibility, and scope'],
    faqs: [
      { question: 'How do you decide what to build?', answer: 'We start with your users and business workflow, then agree the scope and priorities before implementation.' },
      { question: 'Can you connect the software to our existing tools?', answer: 'Potential integrations are assessed against available APIs, access permissions, and project requirements.' },
    ],
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    audience: 'Teams exploring useful AI features in business or education products',
    benefit: 'Apply AI to specific tasks with clear scope, appropriate review, and practical safeguards.',
    summary: 'AI assistants, search, and automation designed around a well-defined user or business need.',
    headline: 'Bring Practical AI Capabilities Into Your Products.',
    problem: 'AI experiments can be hard to operationalize when the use case, data sources, and human review needs are unclear.',
    image: '/images/griffin-ai.svg',
    imageAlt: 'Illustration of a scoped AI assistant and product analytics interface',
    possibleFeatures: ['AI assistants and chat interfaces', 'Knowledge-base search and retrieval-augmented generation', 'LLM features in existing products', 'Workflow automation with human review where appropriate'],
    deliverySteps: ['Select a bounded use case and success criteria', 'Review data sources, privacy needs, and model options', 'Prototype and evaluate responses with representative examples', 'Integrate the agreed experience and document its limitations'],
    integrations: ['Model providers, knowledge sources, and workflow systems are selected and reviewed for each project'],
    faqs: [
      { question: 'Can an AI assistant use our internal knowledge?', answer: 'A knowledge-grounded assistant can be explored after reviewing the content sources, permissions, and privacy requirements.' },
      { question: 'Will AI make decisions without staff review?', answer: 'Human review and workflow controls can be included where the use case calls for them; the final design is agreed during discovery.' },
    ],
  },
]
