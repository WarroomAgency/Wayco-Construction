// Which blog guides to surface on which service/area pages (internal linking + topical clusters).
export const guidesByService: Record<string, string[]> = {
  'adu-construction': ['how-much-does-an-adu-cost-in-san-diego', 'adu-timeline-san-diego-first-call-to-move-in', 'detached-attached-or-garage-conversion-adu'],
  'kitchen-remodeling': ['kitchen-remodel-checklist-before-demo-day', 'whole-home-renovation-phasing-guide', 'how-to-hire-a-general-contractor-in-san-diego'],
  'bathroom-remodeling': ['bathroom-remodel-guide-tile-waterproofing', 'whole-home-renovation-phasing-guide', 'how-to-hire-a-general-contractor-in-san-diego'],
  'whole-home-renovation': ['whole-home-renovation-phasing-guide', 'design-build-vs-design-bid-build', 'rebuilding-after-a-house-fire-homeowner-roadmap'],
  'home-additions': ['whole-home-renovation-phasing-guide', 'design-build-vs-design-bid-build', 'how-to-hire-a-general-contractor-in-san-diego'],
  'custom-home-construction': ['design-build-vs-design-bid-build', 'rebuilding-after-a-house-fire-homeowner-roadmap', 'how-to-hire-a-general-contractor-in-san-diego'],
  'exterior-improvements': ['whole-home-renovation-phasing-guide', 'how-to-hire-a-general-contractor-in-san-diego', 'design-build-vs-design-bid-build'],
  'outdoor-living': ['detached-attached-or-garage-conversion-adu', 'how-to-hire-a-general-contractor-in-san-diego', 'design-build-vs-design-bid-build'],
  'garages-carports-metal-buildings': ['detached-attached-or-garage-conversion-adu', 'design-build-vs-design-bid-build', 'how-to-hire-a-general-contractor-in-san-diego'],
  'commercial-construction': ['tenant-improvement-basics-san-diego-business-owners', 'design-build-vs-design-bid-build', 'how-to-hire-a-general-contractor-in-san-diego'],
  'tenant-improvement': ['tenant-improvement-basics-san-diego-business-owners', 'design-build-vs-design-bid-build', 'how-to-hire-a-general-contractor-in-san-diego'],
  'hospitality-and-gaming': ['design-build-vs-design-bid-build', 'tenant-improvement-basics-san-diego-business-owners', 'how-to-hire-a-general-contractor-in-san-diego'],
  'multi-family-construction': ['design-build-vs-design-bid-build', 'how-to-hire-a-general-contractor-in-san-diego', 'tenant-improvement-basics-san-diego-business-owners'],
  'design-build': ['design-build-vs-design-bid-build', 'how-to-hire-a-general-contractor-in-san-diego', 'adu-timeline-san-diego-first-call-to-move-in'],
  'design-and-planning': ['design-build-vs-design-bid-build', 'kitchen-remodel-checklist-before-demo-day', 'adu-timeline-san-diego-first-call-to-move-in'],
  'construction-management': ['design-build-vs-design-bid-build', 'tenant-improvement-basics-san-diego-business-owners', 'how-to-hire-a-general-contractor-in-san-diego'],
};
export const areaGuides = ['how-much-does-an-adu-cost-in-san-diego', 'kitchen-remodel-checklist-before-demo-day', 'how-to-hire-a-general-contractor-in-san-diego'];

// Category-level FAQs shown on every project page (AEO + depth). Generic, factual, hedged.
export const projectFaqs: Record<string, { q: string; a: string }[]> = {
  adu: [
    { q: 'Does Wayco handle ADU permits?', a: 'Yes. Wayco prepares plans, engineering and permit submittals and manages the permitting process as part of its design-build ADU packages, so homeowners are not left coordinating with the city or county on their own. Review times vary by jurisdiction.' },
    { q: 'What is included in a turnkey ADU?', a: 'Our turnkey ADU scope covers county pre-approved design plans, full engineering, complete construction, appliances and fixtures, and a move-in-ready handoff. Site conditions, utilities and finish selections can change the final price.' },
    { q: 'How soon can an ADU project start?', a: 'Projects typically start within about four weeks of signing: roughly weeks one and two for design and submittals, week three for procurement and deliveries, and week four to mobilize on site.' },
  ],
  kitchen: [
    { q: 'Can Wayco design and build my kitchen remodel?', a: 'Yes. Wayco provides design assistance, cabinetry and finish selection, permits, and construction under one contract, with a project manager and superintendent as your day-to-day contacts.' },
    { q: 'How long does a kitchen remodel take?', a: 'It depends on scope, cabinet lead times and whether walls or utilities move. Wayco gives a written schedule after the free consultation, and clients often note that the schedule held.' },
    { q: 'Does Wayco offer a warranty on remodeling work?', a: 'Yes. Every Wayco project carries a 1-year workmanship warranty, and past clients have highlighted how responsive the team is on warranty items.' },
  ],
  bathroom: [
    { q: 'Does Wayco do full bathroom gut remodels?', a: 'Yes. Wayco handles demolition, waterproofing, tile, glass, vanities, plumbing and lighting, including full primary-suite renovations and tub-to-shower conversions.' },
    { q: 'Will you work around my schedule or tenants?', a: 'We plan access and working hours with you up front. A property-management client noted that Wayco worked around their renters’ schedule on a tub and shower replacement.' },
    { q: 'How do I start a bathroom remodel?', a: 'Request a free consultation. We visit the home, discuss goals and budget, and follow with a written scope and schedule.' },
  ],
  'multi-family': [
    { q: 'Does Wayco build and renovate multi-family properties?', a: 'Yes. Wayco’s leadership has managed ground-up and renovation work for multi-family and apartment properties, coordinating schedule, budget, trades and inspections.' },
    { q: 'Who manages the subcontractors?', a: 'Wayco’s project management and superintendent team coordinate trades, schedules, submittals and inspections so owners deal with one accountable contractor.' },
    { q: 'How do I request a bid?', a: 'Call (619) 202-1031 or request a consultation with your plans or project outline, and we will scope the work with you.' },
  ],
  hospitality: [
    { q: 'Does Wayco build hotels, bars and restaurants?', a: 'Yes. Wayco’s team has delivered hotel guestroom and public-area work, bars, lounges and pool-bar construction, coordinating around operations and brand standards.' },
    { q: 'Can work be phased around an open property?', a: 'Phasing around operations is a core part of hospitality construction. We plan sequencing, noise and access with the operator before work begins.' },
    { q: 'How do I get a proposal?', a: 'Request a consultation with your scope, location and target dates; we will follow up with questions and a proposal.' },
  ],
  gaming: [
    { q: 'Has Wayco worked on casino projects?', a: 'Yes. The Wayco team has built and renovated casino gaming floors, bars, dining areas and exterior elements, where finish quality and schedule discipline both matter.' },
    { q: 'How are tribal and regulatory requirements handled?', a: 'Requirements vary by owner and jurisdiction. Wayco coordinates submittals, inspections and owner-specific standards as part of project management.' },
    { q: 'How do I start a conversation about a gaming project?', a: 'Call (619) 202-1031 or request a consultation and we will discuss scope, schedule and owner requirements.' },
  ],
  aviation: [
    { q: 'Does Wayco build hangars and aviation facilities?', a: 'Yes. Wayco’s team has built hangars and aviation facilities, including large-span steel structures, and coordinates safety and airfield requirements.' },
    { q: 'Can Wayco work with pre-engineered metal buildings?', a: 'Yes. Wayco builds pre-engineered metal buildings for commercial, industrial and aviation uses.' },
    { q: 'How do I request a proposal?', a: 'Contact us with your site, building size and schedule; we will outline scope, budget factors and next steps.' },
  ],
  healthcare: [
    { q: 'Does Wayco build medical offices?', a: 'Yes. Wayco has built out medical practices, including a dermatology and plastic-surgery office in La Jolla, with attention to patient flow, privacy and finishes.' },
    { q: 'Can you work with our architect?', a: 'Yes. Wayco regularly builds from architects’ and engineers’ plans, and can also provide design-build services.' },
    { q: 'What does a tenant improvement involve?', a: 'Typically space planning, permits, demolition, framing, mechanical/electrical/plumbing, finishes and inspections. See our tenant improvement page for details.' },
  ],
  retail: [
    { q: 'Does Wayco do retail and storefront build-outs?', a: 'Yes. Wayco handles retail tenant improvements and storefront work, coordinated around landlord requirements and opening dates.' },
    { q: 'Do you handle permits?', a: 'Yes. Wayco prepares and manages required permitting and inspections.' },
    { q: 'How do I get started?', a: 'Request a free consultation with your location, space size and target opening date.' },
  ],
  historic: [
    { q: 'Does Wayco work on historic or protected buildings?', a: 'Yes. The team has experience on historic and landmark settings, where documentation, patience and craft matter, and coordinates with owners and agencies as needed.' },
    { q: 'How are historic projects planned?', a: 'We begin with a detailed site review, document existing conditions and plan sequencing to protect historic fabric.' },
    { q: 'How do I start?', a: 'Call (619) 202-1031 or request a consultation to discuss your property and goals.' },
  ],
  exterior: [
    { q: 'Does Wayco handle exterior and outdoor projects?', a: 'Yes. Wayco builds exterior improvements, decks, patios and outdoor structures, and manages permits and inspections.' },
    { q: 'Can you match existing architecture?', a: 'Yes. We plan materials, rooflines and finishes to complement the existing structure and neighborhood.' },
    { q: 'How do I begin?', a: 'Request a free consultation and we will visit the property to review options.' },
  ],
  industrial: [
    { q: 'Does Wayco build metal and industrial buildings?', a: 'Yes. Wayco builds pre-engineered metal buildings, warehouses and distribution facilities, including site work and slab.' },
    { q: 'What affects cost and schedule?', a: 'Building size, site conditions, engineering requirements, and steel and material lead times are the main factors.' },
    { q: 'How do I request a proposal?', a: 'Call (619) 202-1031 or request a consultation with your site and size requirements.' },
  ],
};
