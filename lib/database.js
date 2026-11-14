const path = require('node:path');
const JsonDB = require('jsondb-lite-database');
const mongoose = require('mongoose');

let databasePromise;

const seedData = {
  services: [
    { slug: 'neural-design', title: 'Product & UI/UX Design', category: 'Design', desc: 'Intuitive product experiences that make complex ideas feel effortless.', summary: 'From early product thinking to high-fidelity interfaces, we shape useful digital experiences around real customer needs.', img: '/images/abstract-art.jpg', features: ['Product discovery & user journeys', 'UX research and interaction design', 'Design systems and prototypes'], featured: true },
    { slug: 'core-dev', title: 'Web Development', category: 'Engineering', desc: 'Fast, accessible websites and web applications built to grow.', summary: 'We build polished, dependable web products with maintainable code, responsive interfaces, and performance at the core.', img: '/images/developer.jpg', features: ['Marketing sites and web apps', 'React, TypeScript, and API integration', 'Accessibility, performance, and QA'], featured: true },
    { slug: 'mobile-force', title: 'Mobile Applications', category: 'Engineering', desc: 'Thoughtful iOS and Android products from first screen to launch.', summary: 'Turn your product idea into a practical mobile experience with a consistent design language and reliable delivery.', img: '/images/mobile-design.jpg', features: ['Mobile product strategy', 'Cross-platform app development', 'Store readiness and launch support'], featured: true },
    { slug: 'ai-integration', title: 'AI Product Integration', category: 'AI', desc: 'Useful AI features that fit your product and your users.', summary: 'We help teams identify practical AI opportunities and integrate them safely into existing product workflows.', img: '/images/ai-concept.jpg', features: ['AI product discovery', 'Model and API integration', 'Evaluation, guardrails, and UX'], featured: true },
    { slug: 'cloud-forge', title: 'Cloud & DevOps', category: 'Infrastructure', desc: 'Reliable deployment foundations for products at every stage.', summary: 'Make your delivery pipeline and cloud foundation easier to understand, operate, and scale.', img: '/images/digital-globe.jpg', features: ['Cloud architecture review', 'CI/CD and deployment automation', 'Monitoring and reliability improvements'], featured: false },
    { slug: 'cyber-shield', title: 'Security Engineering', category: 'Infrastructure', desc: 'Practical security improvements built into the development cycle.', summary: 'Strengthen application foundations through secure design reviews and actionable engineering improvements.', img: '/images/cyber-security.jpg', features: ['Application security review', 'Secure development practices', 'Risk-focused remediation'], featured: false },
    { slug: 'data-analytics', title: 'Data & Analytics', category: 'Data', desc: 'Turn product data into clearer decisions and better experiences.', summary: 'Build trustworthy analytics foundations that help teams understand product usage and make informed decisions.', img: '/images/analytics.jpg', features: ['Analytics planning and instrumentation', 'Data visualization and dashboards', 'Product insight workflows'], featured: false },
    { slug: 'growth-engine', title: 'Technical SEO & Growth', category: 'Growth', desc: 'Improve discoverability, conversion, and the health of your site.', summary: 'Connect technical quality with clear content and conversion goals to help your digital product reach more people.', img: '/images/data-visualization.jpg', features: ['Technical SEO audits', 'Web performance and conversion review', 'Measurement and iteration plans'], featured: false },
  ],
  projects: [
    { title: 'Northstar Product Suite', category: 'Product design · Web app', summary: 'A clear, fast workflow for a team bringing operational data into one place.', image: '/images/product-design.jpg', result: 'Simplified a complex workflow into one focused product.' },
    { title: 'Open Source Launch', category: 'Web development · Community', summary: 'A welcoming product site that helps new contributors find their first step.', image: '/images/dev-community.jpg', result: 'Made project onboarding easier to navigate.' },
    { title: 'Fieldnotes Mobile', category: 'Mobile · Product strategy', summary: 'A lightweight mobile experience for capturing ideas while away from a desk.', image: '/images/mobile-design.jpg', result: 'Designed for quick, low-friction capture.' },
    { title: 'Signal Intelligence', category: 'AI integration · Dashboard', summary: 'A human-centered interface around useful AI-assisted analysis.', image: '/images/analytics.jpg', result: 'Made AI recommendations easier to review.' },
    { title: 'Cloudline Platform', category: 'Cloud · Engineering', summary: 'A cleaner deployment flow and clearer visibility for a growing product team.', image: '/images/developer-workspace.jpg', result: 'Created a repeatable release foundation.' },
    { title: 'Studio Systems', category: 'Design system · Web', summary: 'A reusable visual language for a company bringing a family of products together.', image: '/images/creative-office.jpg', result: 'Unified multiple product experiences.' },
  ],
};

const schemas = {
  services: { slug: { type: String, unique: true, index: true } },
  projects: { title: String },
  contact_messages: { name: String, email: String, message: String, status: String },
};

function createMongoAdapter() {
  const models = {};
  const getModel = (collectionName) => {
    if (!models[collectionName]) {
      const schema = new mongoose.Schema(schemas[collectionName] || {}, { strict: false, timestamps: true, collection: collectionName });
      models[collectionName] = mongoose.models[`Nexus_${collectionName}`] || mongoose.model(`Nexus_${collectionName}`, schema);
    }
    return models[collectionName];
  };

  return {
    mode: 'mongodb',
    collection(collectionName) {
      const model = getModel(collectionName);
      return {
        async find(query = {}) { return model.find(query).sort({ createdAt: -1 }).lean().exec(); },
        async findOne(query = {}) { return model.findOne(query).lean().exec(); },
        async count(query = {}) { return model.countDocuments(query).exec(); },
        async insert(record) { return model.create(record); },
        async update(query, changes) { return model.findOneAndUpdate(query, { $set: changes }, { new: true }).lean().exec(); },
        async delete(query) { return model.deleteOne(query).exec(); },
      };
    },
  };
}

async function getDatabase() {
  if (!databasePromise) {
    databasePromise = (async () => {
      if (process.env.MONGODB_URI) {
        await mongoose.connect(process.env.MONGODB_URI, { serverSelectionTimeoutMS: 8000 });
        const db = createMongoAdapter();
        for (const [collectionName, records] of Object.entries(seedData)) {
          const collection = db.collection(collectionName);
          if (await collection.count() === 0) {
            await mongoose.connection.collection(collectionName).insertMany(records.map((record) => ({ ...record, createdAt: new Date(), updatedAt: new Date() })));
          }
        }
        return db;
      }

      const directory = process.env.JSONDB_DIR || path.join(__dirname, '..', 'data');
      const db = await new JsonDB().connect({ dir: directory });
      for (const [collectionName, records] of Object.entries(seedData)) {
        const collection = db.collection(collectionName);
        if (await collection.count() === 0) await collection.insert(records);
      }
      return db;
    })().catch((error) => {
      databasePromise = undefined;
      throw error;
    });
  }
  return databasePromise;
}

module.exports = { getDatabase };