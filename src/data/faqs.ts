import type { Faq } from './types';

export const faqGroups: { id: string; title: string; faqs: Faq[] }[] = [
  {
    id: 'getting-started',
    title: 'Getting Started & Consultations',
    faqs: [
      {
        q: 'Who is Wayco Construction?',
        a: 'Wayco Construction, Inc. is a family-owned, locally operated design-build general contractor based in El Cajon, California. Our leadership team has more than 25 years of experience, and we serve homeowners and businesses across San Diego County and nearby areas. You can reach our office at (619) 202-1031.',
      },
      {
        q: 'Do you offer free consultations?',
        a: 'Yes. Consultations are free and come with no pressure. We talk through your goals, look at the space or property, and explain realistic options for scope, timing, and cost. Call (619) 202-1031 or request a consultation through our website to get started.',
      },
      {
        q: 'What types of projects does Wayco build?',
        a: 'We build ADUs, kitchen and bathroom remodels, whole-home renovations, additions, decks, patios, pools, garages, and carports for homeowners. On the commercial side we handle tenant improvements, hospitality and gaming, multi-family, healthcare, retail, and pre-engineered metal buildings. Every project is handled by one design-build team.',
      },
      {
        q: 'Where do you work?',
        a: 'Our residential work is focused on San Diego County and nearby areas, and our office is in El Cajon. Our commercial portfolio includes projects beyond San Diego, and we are glad to discuss commercial opportunities wherever they are. Call us to confirm whether your address and project type are a fit.',
      },
      {
        q: 'What are your office hours, and can I visit the showroom?',
        a: 'Our office is open Monday through Friday, 7:00 AM to 3:30 PM, and closed on weekends. Showroom visits are by appointment only, so call (619) 202-1031 to schedule. Showroom customers receive discounts on materials. Our office is at 1069 Graves Ave, Suite 106, El Cajon.',
      },
      {
        q: 'Who will I be working with?',
        a: 'You will have a single point of contact who keeps you updated on schedule and decisions. Behind that person is our team, led by President Josh Coit and Operations Manager Frank Coit, with project managers, superintendents, and office staff supporting each project.',
      },
    ],
  },
  {
    id: 'pricing-timeline',
    title: 'Pricing, Estimates & Timeline',
    faqs: [
      {
        q: 'How much does a remodel or addition cost?',
        a: 'It depends on scope, size, site conditions, and finishes, so we do not quote prices without seeing the project. A free consultation lets us review your goals and space, then provide a written scope and price. We explain what is included and what could change the number.',
      },
      {
        q: 'How soon can my project start?',
        a: 'Most Wayco projects start within about four weeks of the first conversation. Weeks one and two cover design and submittals, week three covers material procurement and deliveries, and week four is mobilization on site. Permit review times vary by jurisdiction and can affect the schedule.',
      },
      {
        q: 'How long will construction take?',
        a: 'Duration depends on the type and size of the project. A bathroom is faster than a whole-home renovation or ground-up ADU, which typically take several months. We provide a clear schedule once scope and site conditions are confirmed, and we keep you updated as work progresses.',
      },
      {
        q: 'Is your estimate a fixed price?',
        a: 'We provide a written scope and price, and we explain what is included, what is excluded, and what is an allowance. If something changes after work begins, we document it in a written change order for your approval before proceeding, so there are no surprises on the invoice.',
      },
      {
        q: 'Do showroom customers get discounts?',
        a: 'Yes. Our showroom, available by appointment only, offers discounts on materials for showroom customers. It is also a good place to see cabinetry, tile, and stone in person before you commit. Call (619) 202-1031 to schedule a visit. Discounts apply to materials selected through the showroom.',
      },
      {
        q: 'What can change the cost of my project?',
        a: 'Common factors include scope, square footage, site access, slope and soil conditions, utility connections, structural changes, and the finishes you choose. Older homes can also hide conditions behind walls. We talk through these during the consultation so the plan accounts for them.',
      },
    ],
  },
  {
    id: 'permits-design-warranty',
    title: 'Permits, Design & Warranty',
    faqs: [
      {
        q: 'Do you handle permits?',
        a: 'Yes. Wayco handles all required permitting for our projects, including submittals and coordination with your city or county. Requirements and review times vary by jurisdiction, so we tell you what your project needs early in the planning phase. That keeps paperwork off your plate while you focus on decisions.',
      },
      {
        q: 'What does design-build mean?',
        a: 'Design-build means one company handles design, planning, permitting, and construction under a single agreement. You work with one team and one point of contact, and the builder weighs in on cost and buildability during design, which helps avoid redesign and unwelcome surprises later.',
      },
      {
        q: 'Do you offer design services?',
        a: 'Yes. Our design and planning services include floor plans, interior design, project planning, and site planning. Design is part of the same team that builds your project, so layout decisions are checked against budget and construction realities as plans develop.',
      },
      {
        q: 'What warranty do you provide?',
        a: 'Wayco provides a 1-year workmanship warranty on our work. If an issue related to our workmanship appears during that first year, contact us and we will address it. Manufacturer warranties on products such as appliances and fixtures are separate. Ask us to walk through the warranty terms before you sign.',
      },
      {
        q: 'Will I need to be home during construction?',
        a: 'Not all day. We coordinate access and work hours with you, and we keep you informed about the days that involve noise, dust, or utility shut-offs. For larger projects, some homeowners choose to stay elsewhere for part of the work. We plan around your situation.',
      },
      {
        q: 'How do you communicate during a project?',
        a: 'You have a single point of contact, a clear written schedule, and regular updates on progress, decisions, and upcoming work. Client feedback consistently highlights communication and professionalism, and it is a priority for us from the first consultation through final walkthrough.',
      },
    ],
  },
  {
    id: 'adus',
    title: 'ADUs',
    faqs: [
      {
        q: 'What is a turnkey ADU package?',
        a: 'Wayco\'s turnkey ground-up ADU packages include city and county pre-approved design plans, full engineering, complete construction, appliances and fixtures, and a move-in-ready finish. The flagship is a 1,200 sq ft, 2 bedroom, 1 bathroom home. We also offer five model plans, A through E.',
      },
      {
        q: 'How much does an ADU cost?',
        a: 'Wayco\'s turnkey ADU packages range from $325,000 to $379,000. Site conditions, utility connections, and finish selections can move the final number, so we confirm a firm scope and price after a free consultation and a look at your property. That range reflects the 1,200 sq ft, 2 bedroom, 1 bathroom package.',
      },
      {
        q: 'Can I build an ADU on my property?',
        a: 'California law generally allows ADUs on residential lots, but local rules such as setbacks, height, and parking vary by city and county. We review your lot and your jurisdiction\'s requirements during the free consultation and tell you honestly what is feasible.',
      },
      {
        q: 'How long does it take to build an ADU?',
        a: 'Most projects start within about four weeks of the first conversation, then construction typically takes several months depending on size and site conditions. Permit review times vary by jurisdiction. We provide a clear schedule once your scope is confirmed. Updates continue throughout the build.',
      },
      {
        q: 'Do you handle ADU permits and engineering?',
        a: 'Yes. Our turnkey packages include full engineering, and Wayco handles all required permitting. That means you work with one team from design through move-in instead of coordinating separate designers, engineers, and agency submittals yourself. Agency review times vary by jurisdiction.',
      },
      {
        q: 'What types of ADUs can you build?',
        a: 'Our primary offering is turnkey ground-up ADUs, including detached units. We can also discuss attached units and garage conversions depending on your lot and goals. A site visit helps us explain which option fits your property and budget. Consultations are free.',
      },
    ],
  },
  {
    id: 'commercial',
    title: 'Commercial Projects',
    faqs: [
      {
        q: 'What commercial work does Wayco do?',
        a: 'Our commercial portfolio includes casinos, hotels, bars and lounges, airports and hangars, healthcare offices, retail, multi-family, a historic monument, and pre-engineered metal buildings. We also build and renovate tenant spaces for business owners in San Diego County. Call us to discuss your project.',
      },
      {
        q: 'Do you do tenant improvements?',
        a: 'Yes. We build out and renovate leased commercial spaces including offices, retail, restaurants, and healthcare suites. We have completed a medical office build-out in La Jolla. Our team handles design, permitting, and construction so you can focus on opening your business.',
      },
      {
        q: 'Can you work in occupied or operating buildings?',
        a: 'Commercial renovations often happen in operating environments. We plan sequencing, work hours, and protection with the owner to minimize disruption, and the specifics depend on the building and the use. Bring your constraints to the consultation and we will plan around them.',
      },
      {
        q: 'Do you offer construction management?',
        a: 'Yes. Our project management services include construction management, design-build, quality control, and value engineering. We coordinate subcontractors, schedules, and inspections so owners have one accountable team from planning to closeout. Owners get a single point of contact and clear, regular schedule updates throughout the project.',
      },
      {
        q: 'What is value engineering?',
        a: 'Value engineering is a review of design and material choices to find ways to deliver the same function at lower cost or with fewer risks. It works best early, when changes are inexpensive. Our operations team has decades of experience applying it.',
      },
      {
        q: 'How do I start a commercial project with Wayco?',
        a: 'Call (619) 202-1031 or request a free consultation. Tell us about the space, the use, and your target timeline. We review scope, discuss approach and schedule, and explain next steps. Most projects start within about four weeks of the first conversation.',
      },
    ],
  },
];

export const homeFaqs: Faq[] = [
  faqGroups[0].faqs[0],
  faqGroups[0].faqs[1],
  faqGroups[1].faqs[1],
  faqGroups[2].faqs[0],
  faqGroups[2].faqs[3],
  faqGroups[3].faqs[1],
];
