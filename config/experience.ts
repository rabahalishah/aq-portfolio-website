import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements: string[];
  skills: ValidSkills[];
  companyUrl?: string;
  logo?: string;
}

export const experiences: ExperienceInterface[] = [
  {
    id: "Almaymaar",
    position: "Human Resources Executive",
    company: "Almaymaar",
    location: "Islamabad, Pakistan",
    startDate: new Date("2025-08-01"),
    endDate: "Present",
    description: [
      "Almaymaar has provided hands-on exposure to human resources, where contributions include supporting administrative operations and collaborating to enhance process efficiency. These experiences have strengthened skills in recruiting, documentation, and HR policy implementation. "
    ],
    achievements: [
      ""
    ],
    skills: ["Administration", "Management", "Communication"],
    companyUrl: "https://www.almaymaar.com/",
    logo: "/experience/almaymaar.png",
  }, {
    id: "Almaymaar-intern",
    position: "Human Resources Intern",
    company: "Almaymaar",
    location: "Islamabad, Pakistan",
    startDate: new Date("2025-07-01"),
    endDate: new Date("2025-08-30"),
    description: [
      "Almaymaar has provided hands-on exposure to human resources, where contributions include supporting administrative operations and collaborating to enhance process efficiency. These experiences have strengthened skills in recruiting, documentation, and HR policy implementation. "
    ],
    achievements: [
      ""
    ],
    skills: ["Administration", "Management", "Communication"],
    companyUrl: "https://www.almaymaar.com/",
    logo: "/experience/almaymaar.png",
  }, {
    id: "Almaymaar-admin",
    position: "Admin Intern",
    company: "Almaymaar",
    location: "Islamabad, Pakistan",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-06-30"),
    description: [
      "I had the opportunity to contribute to Almaymaar's administrative functions, which significantly enhanced my understanding of organizational dynamics.",
      "Supported daily administrative operations, ensuring smooth workflow and effective communication. ",
      "Collaborated with team members to streamline processes, improving overall efficiency. ",
      "Developed essential skills in time management and organizational practices, preparing me for future roles."
    ],
    achievements: [
      ""
    ],
    skills: ["Administration", "Management", "Communication"],
    companyUrl: "https://www.almaymaar.com/",
    logo: "/experience/almaymaar.png",
  },

  {
    id: "mohr",
    position: "Intern - Ministry Of Human Rights",
    company: "Ministry Of Human Rights",
    location: "Islamabad, Pakistan",
    startDate: new Date("2024-07-01"),
    endDate: new Date("2024-09-30"),
    description: [
      "Assisted in drafting reports, conducting research on international relations, and supporting diplomatic correspondence. Gained exposure to foreign policy processes, official documentation, and cross-cultural communication within a governmental setting."
    ],
    achievements: [
      ""
    ],
    skills: ["Administration", "Management", "Communication"],
    companyUrl: "https://www.mohr.gov.pk/",
    logo: "/experience/mohr.png",
  },

];
