import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [

  {
    name: "LinkedIn",
    username: "Aqdas Fiaz Qureshi",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/aqdas-fiaz3502/",
  },

  {
    name: "Gmail",
    username: "aqdasfiazqureshi",
    icon: Icons.gmail,
    link: "mailto:aqdasqureshi.afq@gmail.com",
  },
];
