import { siteImages } from './images';

export type StudioService = {
  slug: string;
  title: string;
  category: string;
  desc: string;
  summary: string;
  img: string;
  features: string[];
  featured: boolean;
};

export const studioServices: StudioService[] = [
  { slug: 'neural-design', title: 'Product & UI/UX Design', category: 'Design', desc: 'Intuitive product experiences that make complex ideas feel effortless.', summary: 'From early product thinking to high-fidelity interfaces, we shape useful digital experiences around real customer needs.', img: siteImages.abstract, features: ['Product discovery & user journeys', 'UX research and interaction design', 'Design systems and prototypes'], featured: true },
  { slug: 'core-dev', title: 'Web Development', category: 'Engineering', desc: 'Fast, accessible websites and web applications built to grow.', summary: 'We build polished, dependable web products with maintainable code, responsive interfaces, and performance at the core.', img: siteImages.developer, features: ['Marketing sites and web apps', 'React, TypeScript, and API integration', 'Accessibility, performance, and QA'], featured: true },
  { slug: 'mobile-force', title: 'Mobile Applications', category: 'Engineering', desc: 'Thoughtful iOS and Android products from first screen to launch.', summary: 'Turn your product idea into a practical mobile experience with a consistent design language and reliable delivery.', img: siteImages.mobile, features: ['Mobile product strategy', 'Cross-platform app development', 'Store readiness and launch support'], featured: true },
  { slug: 'ai-integration', title: 'AI Product Integration', category: 'AI', desc: 'Useful AI features that fit your product and your users.', summary: 'We help teams identify practical AI opportunities and integrate them safely into existing product workflows.', img: siteImages.ai, features: ['AI product discovery', 'Model and API integration', 'Evaluation, guardrails, and UX'], featured: true },
  { slug: 'cloud-forge', title: 'Cloud & DevOps', category: 'Infrastructure', desc: 'Reliable deployment foundations for products at every stage.', summary: 'Make your delivery pipeline and cloud foundation easier to understand, operate, and scale.', img: siteImages.globe, features: ['Cloud architecture review', 'CI/CD and deployment automation', 'Monitoring and reliability improvements'], featured: false },
  { slug: 'cyber-shield', title: 'Security Engineering', category: 'Infrastructure', desc: 'Practical security improvements built into the development cycle.', summary: 'Strengthen application foundations through secure design reviews and actionable engineering improvements.', img: siteImages.cyber, features: ['Application security review', 'Secure development practices', 'Risk-focused remediation'], featured: false },
  { slug: 'data-analytics', title: 'Data & Analytics', category: 'Data', desc: 'Turn product data into clearer decisions and better experiences.', summary: 'Build trustworthy analytics foundations that help teams understand product usage and make informed decisions.', img: siteImages.analytics, features: ['Analytics planning and instrumentation', 'Data visualization and dashboards', 'Product insight workflows'], featured: false },
  { slug: 'growth-engine', title: 'Technical SEO & Growth', category: 'Growth', desc: 'Improve discoverability, conversion, and the health of your site.', summary: 'Connect technical quality with clear content and conversion goals to help your digital product reach more people.', img: siteImages.data, features: ['Technical SEO audits', 'Web performance and conversion review', 'Measurement and iteration plans'], featured: false },
];
