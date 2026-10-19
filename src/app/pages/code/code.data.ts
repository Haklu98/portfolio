export interface Certificate {
  name: string;
  image: string;
  /** Public Credly badge URL */
  url: string;
}

/** Tools I build with day to day (the same in both languages; the group titles and Background list are in the content files). */
export const buildWith: string[] = ['TypeScript', 'JavaScript', 'Angular', 'React', 'React Native', 'Expo', 'Supabase', 'Tailwind', 'HTML', 'CSS'];

/** Other tools I know. */
export const alsoKnow: string[] = ['Python', 'AWS', 'Docker', 'Express', 'MongoDB', 'MySQL', 'Figma', 'GitHub', 'VS Code'];

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
