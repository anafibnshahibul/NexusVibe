import { siteImages } from './images';

export type StudioProject = {
  title: string;
  category: string;
  summary: string;
  image: string;
  result: string;
};

export const studioProjects: StudioProject[] = [
  { title: 'Northstar Product Suite', category: 'Product design · Web app', summary: 'A clear, fast workflow for a team bringing operational data into one place.', image: siteImages.productDesign, result: 'Simplified a complex workflow into one focused product.' },
  { title: 'Open Source Launch', category: 'Web development · Community', summary: 'A welcoming product site that helps new contributors find their first step.', image: siteImages.devCommunity, result: 'Made project onboarding easier to navigate.' },
  { title: 'Fieldnotes Mobile', category: 'Mobile · Product strategy', summary: 'A lightweight mobile experience for capturing ideas while away from a desk.', image: siteImages.mobile, result: 'Designed for quick, low-friction capture.' },
  { title: 'Signal Intelligence', category: 'AI integration · Dashboard', summary: 'A human-centered interface around useful AI-assisted analysis.', image: siteImages.analytics, result: 'Made AI recommendations easier to review.' },
  { title: 'Cloudline Platform', category: 'Cloud · Engineering', summary: 'A cleaner deployment flow and clearer visibility for a growing product team.', image: siteImages.developerWorkspace, result: 'Created a repeatable release foundation.' },
  { title: 'Studio Systems', category: 'Design system · Web', summary: 'A reusable visual language for a company bringing a family of products together.', image: siteImages.creativeOffice, result: 'Unified multiple product experiences.' },
];
