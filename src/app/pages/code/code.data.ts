export interface SkillGroup {
  title: string;
  items: string[];
  /** Show the items one per line instead of as a comma-separated sentence */
  list?: boolean;
}

export interface Certificate {
  name: string;
  image: string;
  /** Public Credly badge URL */
  url: string;
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Build with',
    items: ['TypeScript', 'JavaScript', 'Angular', 'React', 'Tailwind', 'HTML', 'CSS'],
  },
  {
    title: 'Also know',
    items: ['Python', 'AWS', 'Docker', 'Express', 'MongoDB', 'MySQL', 'Figma', 'GitHub', 'VS Code'],
  },
  {
    title: 'Background',
    list: true,
    items: [
      'BBA in Business Information Technology, Jamk',
      'Cloud development intern at Skillwell Oy',
      'AWS Certified Cloud Practitioner',
    ],
  },
];

export const certificates: Certificate[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    image: 'aws-certified-cloud-practitioner.webp',
    url: 'https://www.credly.com/badges/84c50a0e-75ba-44c5-b313-74309173583d/public_url',
  },
  {
    name: 'AWS Cloud Architecting',
    image: 'aws-academy-graduate-aws-academy-cloud-architecting.webp',
    url: 'https://www.credly.com/badges/0cc70223-b7a4-4851-960d-b7e5599d33ad/public_url',
  },
  {
    name: 'AWS Cloud Foundations',
    image: 'aws-academy-graduate-aws-academy-cloud-foundations.webp',
    url: 'https://www.credly.com/badges/af32de95-93a5-4bc1-95f6-87435691873a/public_url',
  },
];
