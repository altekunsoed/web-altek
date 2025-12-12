import { Mail, Instagram, Linkedin, Github, LucideIcon } from "lucide-react";

export interface ContactInfo {
  id: string;
  title: string;
  value: string;
  link: string;
  icon: LucideIcon;
}

export const contactList: ContactInfo[] = [
  {
    id: "email",
    title: "Email",
    value: "aliansilaborat@gmail.com",
    link: "mailto:aliansilaborat@gmail.com",
    icon: Mail,
  },
  {
    id: "instagram",
    title: "Instagram",
    value: "@altek_unsoed",
    link: "https://instagram.com/altek_unsoed",
    icon: Instagram,
  },
  {
    id: "linkedin",
    title: "Linkedin",
    value: "ALTEK Unsoed",
    link: "https://linkedin.com/in/altek-unsoed",
    icon: Linkedin,
  },
  {
    id: "github",
    title: "GitHub",
    value: "altek-unsoed",
    link: "https://github.com/altekunsoed",
    icon: Github,
  },
];
