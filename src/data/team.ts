export type TeamMember = { name: string; role: string; photo: string; bio: string; lead?: boolean };

// Bios adapted from the current waycoconstruction.com team page (client-provided).
export const team: TeamMember[] = [
  {
    name: 'Josh Coit',
    role: 'President',
    photo: 'josh-coit',
    lead: true,
    bio: 'Josh brings more than 25 years of construction experience in design-build, construction management, value engineering and cost-saving strategies. He has led complex projects from first concept through completion, and clients regularly single him out by name for staying involved from the first site visit through the final walkthrough.',
  },
  {
    name: 'Frank Coit',
    role: 'Operations Manager',
    photo: 'frank-coit',
    bio: 'With more than 40 years in the construction industry, Frank specializes in design-build, construction management and value engineering. He keeps schedules, budgets and quality moving in the same direction on every job.',
  },
  {
    name: 'Billie Carlton',
    role: 'Assistant Project Manager / Account Manager',
    photo: 'billie-carlton',
    bio: 'Billie coordinates subcontractors, schedules and budgets, reads blueprints, and keeps clients informed from planning through completion. Past clients regularly credit Billie’s communication and follow-through.',
  },
  {
    name: 'Rob Bledsoe',
    role: 'Construction Superintendent',
    photo: 'ro-blesdsoe',
    bio: 'Rob has more than a decade of experience running large commercial and residential projects — coordinating trades, enforcing safety standards, and handling RFIs, submittals and change orders while maintaining strong relationships with inspectors.',
  },
  {
    name: 'Dave Orr',
    role: 'Construction Superintendent',
    photo: 'dave-orr',
    bio: 'Dave has overseen small and large projects from inception to completion, coordinating architects, engineers and subcontractors while holding schedules, scope and code compliance tight.',
  },
  {
    name: 'Justin Mowery',
    role: 'Office Administrator',
    photo: 'justin-mowery',
    bio: 'Justin runs daily office operations, scheduling and records — the reason your calls get returned and your paperwork is in order.',
  },
];

export const partners = [
  { name: 'MSI Surfaces', file: 'partner-msi' },
  { name: 'Bedrosians Tile & Stone', file: 'partner-bedrosians' },
  { name: 'Daltile', file: 'partner-daltile' },
  { name: 'InnoCraft Cabinetry', file: 'partner-innocraft' },
  { name: 'VersaTube Building Systems', file: 'partner-versatube' },
  { name: 'American Buildings Company', file: 'partner-american-buildings' },
  { name: 'Associated Subcontractors Alliance', file: 'partner-asa' },
];
