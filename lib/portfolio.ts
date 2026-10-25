export const profile = {
  name: "Valuhk Januarta V",
  title: "Informatics Engineer",
  role: "Full Stack Developer & UI/UX Designer",
  intro:
    "Full stack developer & UI/UX designer from Batam, Indonesia. I build web apps end to end — from database schema to interface.",
  bio: "Informatics Engineering graduate (D3) from Politeknik Negeri Batam. I like turning messy, manual processes into fast and simple software — designing in Figma, building in React and Laravel, shipping with a team.",
  responseTime: "I usually reply within 24 hours.",
  location: "Batam, Indonesia",
  education: "D3 Informatics Engineering, Politeknik Negeri Batam (graduated)",
  email: "valuhkjv@gmail.com",
  linkedin: "https://www.linkedin.com/in/valuhk-januarta-vican/",
  githubUser: "ValuhkJv",
  github: "https://github.com/ValuhkJv",
  cv: "/Resume.pdf",
  cvFileName: "Valuhk-Januarta-CV.pdf",
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  github: string;
  cover: string;
  coverPosition: string;
  screenshots: string[];
  timeline: string;
  teamSize: number;
};

export const projects: Project[] = [
  {
    slug: "sj-courier",
    title: "SJ Courier Service",
    description:
      "Point-to-point delivery app for Batam with live GPS tracking, distance-based pricing and Midtrans payments.",
    longDescription:
      "SJ Courier Service is a point-to-point package delivery application designed specifically for the city of Batam. The system provides real-time package tracking, automatic recording, and a user-friendly interface for both customers and delivery personnel. Built with modern web technology, the application is equipped with live GPS tracking and comprehensive reporting capabilities.",
    features: [
      "Real-time GPS tracking for all deliveries",
      "Price checking between distances",
      "Comprehensive admin dashboard",
      "Shipment status management",
      "Payment gateway integration",
      "Mobile-responsive design",
    ],
    technologies: [
      "Laravel",
      "Tailwind CSS",
      "PostgreSQL",
      "DaisyUI",
      "OpenStreetMap",
      "Leaflet",
      "Midtrans",
    ],
    github: "https://github.com/ValuhkJv/PBL-IF02-S4",
    cover: "/images/SJ COURIER_DASHHBOARD ADMIN.png",
    coverPosition: "left top",
    screenshots: [
      "/images/SJ COURIER_CEK TARIF.png",
      "/images/SJ COURIER_DASHHBOARD ADMIN.png",
      "/images/SJ COURIER_KELOLA STATUS.png",
      "/images/SJ COURIER_LIVE TRACKING USER.png",
    ],
    timeline: "6 months",
    teamSize: 3,
  },
  {
    slug: "polibatam-management-system",
    title: "Polibatam Management System",
    description:
      "Borrowing, permissions and inventory for the campus general affairs division.",
    longDescription:
      "The Polibatam General Subdivision Management Application helps manage and administer goods within Polibatam — from requests and loans to stock management. It is used by several key actors: SBUM staff, unit heads, units, and students.",
    features: [
      "Equipment borrowing and return tracking",
      "Permission request workflow",
      "Inventory management",
      "Automated report generation",
      "Analytics dashboard",
      "Data export options",
    ],
    technologies: ["React", "Node.js", "Express", "PostgreSQL", "MUI"],
    github: "https://github.com/ValuhkJv/pbl-if-02",
    cover: "/images/polibatam_1.jpeg",
    coverPosition: "left top",
    screenshots: [
      "/images/polibatam_1.jpeg",
      "/images/polibatam_2.jpeg",
      "/images/polibatam_3.jpeg",
      "/images/polibatam_4.jpeg",
      "/images/polibatam_5.jpeg",
      "/images/polibatam_6.jpeg",
      "/images/polibatam_7.jpeg",
      "/images/polibatam_8.jpeg",
    ],
    timeline: "6 months",
    teamSize: 5,
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const skillGroups = [
  { label: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  {
    label: "Backend",
    items: ["Node.js", "Express", "Laravel", "ASP.NET Core", "Python", "REST APIs"],
  },
  { label: "Database", items: ["PostgreSQL", "MySQL", "MongoDB", "SQL Server"] },
  { label: "Mobile & design", items: ["React Native", "Figma"] },
  { label: "Tools", items: ["Git", "Postman"] },
];

export const skills = skillGroups.flatMap((group) => group.items);
