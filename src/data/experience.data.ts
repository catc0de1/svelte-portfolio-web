export interface Experience {
  id: number;
  title: string;
  jobType: string;
  company: string;
  companyUrl: string;
  yearPeriod: string;
  monthPeriod: number;
  description: string[];
  technologies: string[];
  location: string;
  certificates?: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Fullstack Developer",
    jobType: "Internship",
    company: "PT Selaras Mitra Gemilang",
    companyUrl: "https://selarasmitraintegra.com/",
    yearPeriod: "2025",
    monthPeriod: 4,
    description: [
      "Developed an internal management dashboard using Node.js environment, React, and NestJS",
      "Improved workflow efficiency by nearly 90% based on testing results",
      "Enabled digital transformation through the adoption of modern technologies",
      "Simplified IT operations and internal processes",
      "Increased overall productivity and system security",
      "Significantly reduced human error"
    ],
    technologies: ["TypeScript", "React", "Tailwind", "Material UI", "NestJS", "MySQL", "PostgreSQL", "Redis", "Nx", "Docker"],
    location: "Surabaya, Indonesia",
    certificates: "/certificates/selaras-intern-certificate.pdf"
  },
];
