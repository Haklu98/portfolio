import { Technology } from '../../service/projects/projects-template';

export interface PrimarySkill extends Technology {
  /** Self-assessed level out of 10 */
  level: number;
}

export interface Certificate {
  name: string;
  image: string;
  /** Public Credly badge URL */
  url: string;
}

export const primarySkills: PrimarySkill[] = [
  { name: 'JavaScript', icon: 'javascript-plain', level: 8 },
  { name: 'TypeScript', icon: 'typescript-plain', level: 8 },
  { name: 'HTML', icon: 'html5-plain', level: 9 },
  { name: 'Python', icon: 'python-plain', level: 4 },
  { name: 'CSS', icon: 'css3-plain', level: 9 },
];

export const utilitySkills: Technology[] = [
  { name: 'AWS', icon: 'amazonwebservices-plain' },
  { name: 'GitHub', icon: 'github-plain' },
  { name: 'VSCode', icon: 'visualstudio-plain' },
  { name: 'Angular', icon: 'angularjs-plain' },
  { name: 'React', icon: 'react-original' },
  { name: 'Tailwind', icon: 'tailwindcss-plain' },
  { name: 'MongoDB', icon: 'mongodb-plain' },
  { name: 'MySQL', icon: 'mysql-plain' },
  { name: 'Figma', icon: 'figma-plain' },
  { name: 'Express', icon: 'express-original' },
  { name: 'Docker', icon: 'docker-plain' },
];

export const certificates: Certificate[] = [
  {
    name: 'AWS Cloud Foundations',
    image: 'aws-academy-graduate-aws-academy-cloud-foundations.webp',
    url: 'https://www.credly.com/badges/af32de95-93a5-4bc1-95f6-87435691873a/public_url',
  },
  {
    name: 'AWS Cloud Architecting',
    image: 'aws-academy-graduate-aws-academy-cloud-architecting.webp',
    url: 'https://www.credly.com/badges/0cc70223-b7a4-4851-960d-b7e5599d33ad/public_url',
  },
  {
    name: 'AWS Certified Cloud Practitioner',
    image: 'aws-certified-cloud-practitioner.webp',
    url: 'https://www.credly.com/badges/84c50a0e-75ba-44c5-b313-74309173583d/public_url',
  },
];
