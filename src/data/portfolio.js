export const profile = {
  name: 'Jitendra Pardhi', title: 'Software Engineer · Backend & Full Stack · Cloud & DevOps',
  email: 'pardhijitendra0669@gmail.com', phone: '8483931721', location: 'Maharashtra, India',
  linkedin: 'https://linkedin.com/in/jitendra-pardhi-2a699b22b', github: 'https://github.com/jitupardhi7694',
}

export const skills = [
  { title: 'Backend Engineering', icon: 'server', items: ['Node.js', 'TypeScript', 'Express.js', 'NestJS', 'Fastify', 'REST APIs', 'Microservices'] },
  { title: 'Frontend', icon: 'panels', items: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'] },
  { title: 'Data & Messaging', icon: 'database', items: ['MongoDB', 'MySQL', 'PostgreSQL', 'Redis', 'Apache Kafka'] },
  { title: 'Cloud & DevOps', icon: 'cloud', items: ['AWS EC2', 'Lambda', 'S3', 'IAM', 'CloudWatch', 'VPC', 'RDS', 'Azure DevOps', 'Docker', 'GitHub Actions', 'Linux'] },
  { title: 'Security & Testing', icon: 'shield', items: ['JWT', 'OAuth', 'Jest', 'Postman'] },
  { title: 'Working Knowledge', icon: 'terminal', items: ['Kubernetes', 'Terraform', 'Jenkins', 'ArgoCD', 'Prometheus', 'Grafana'] },
]

export const experience = [
  { company: 'Excellon Software Private Limited', role: 'Software Engineer', dates: 'March 2026 — Present', location: 'India', current: true, points: ['Developing a Vehicle Management System eCommerce journey with React.js and 100+ Node.js microservices.', 'Integrating Apache Kafka for asynchronous communication and event streaming.', 'Optimizing MongoDB schemas and Redis caching; maintaining 80%+ Jest test coverage across microservices.', 'Working with Azure DevOps CI/CD pipelines, Docker, and Azure services.'], tags: ['Node.js', 'React', 'Kafka', 'MongoDB', 'Redis', 'Azure DevOps'] },
  { company: 'Pinnacle Teleservices Pvt. Ltd.', role: 'Software Engineer', dates: 'December 2023 — February 2026', location: 'India', points: ['Developed a WhatsApp Business API platform processing 50 lakh+ messages per day at 1,000+ requests per second.', 'Improved message throughput by 25% and reduced average API response time by 30%.', 'Integrated five or more payment gateways, including Razorpay, PhonePe, BillDesk, SBI, and Union Bank.', 'Improved transaction success rates by 20% through retry logic, error handling, and webhook management.', 'Worked with AWS EC2, Lambda, and CI/CD deployments.'], tags: ['Node.js', 'Fastify', 'AWS', 'WhatsApp API', 'Payments'] },
  { company: "Dinshaw's Dairy Foods Pvt. Ltd.", role: 'Software Engineer (Full Stack)', dates: 'July 2022 — December 2023', location: 'India', points: ['Built responsive React.js web applications and REST APIs using Node.js and Express.js.', 'Worked with MySQL and MongoDB; improved frontend rendering and backend data flow.'], tags: ['React', 'Node.js', 'Express', 'MySQL', 'MongoDB'] },
]

export const projects = [
  { number: '01', title: 'Vehicle Management System', type: 'Professional experience', description: 'An eCommerce journey for vehicle listings, bookings, and order processing, built around a distributed microservices system and asynchronous events.', stack: ['React.js', 'Node.js', 'Kafka', 'MongoDB', 'Redis', 'Docker', 'Azure'], pattern: 'mesh', note: 'Professional work · details kept high level' },
  { number: '02', title: 'High-Throughput Messaging Platform', type: 'Messaging · Scale', description: 'WhatsApp Business API platform built for high-volume message processing, with asynchronous workloads and performance-focused APIs.', stack: ['Node.js', 'Fastify', 'Queues', 'WhatsApp Business API'], pattern: 'signal', note: '50 lakh+ messages/day · 1,000+ req/s · throughput improved 25%' },
  { number: '03', title: 'Payment Gateway Integration', type: 'Payments · Reliability', description: 'A payment integration module using webhooks, retries, and consistent error handling to support reliable transaction processing across multiple providers.', stack: ['Node.js', 'REST APIs', 'Webhooks', 'Retries'], pattern: 'flow', note: '5+ gateways · transaction success improved 20%' },
  { number: '04', title: 'JanSeva HelpDesk', type: 'Community concept', description: 'A civic helpdesk concept connecting village directories, citizen complaints, and access to local services.', stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB'], pattern: 'civic', note: 'Implemented: project repository. Planned: broader civic service workflows.', github: 'https://github.com/pardhijitendra0669-collab/JanSeva-HelpDesk' },
  { number: '05', title: 'DB Query Utilities', type: 'Local data tooling', description: 'A local app with JSON-stored connections for reusable MSSQL, MySQL, and MongoDB extraction pages. Supports parameterized SQL, dynamic filters, field projections, pagination, and Excel export. MySQL full-record queries are restricted to 10 PM–7 AM, with an optional timeout override.', stack: ['MSSQL', 'MySQL', 'MongoDB', 'Parameterized queries', 'XLSX'], pattern: 'query', note: 'Internal local utility · connection strings stay on the local machine' },
]
