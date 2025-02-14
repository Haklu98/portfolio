export interface Project {
  id: number;
  name: string;
  roles: string;
  time: string;
  duration: number;
  description: string;
  images: string[];
  focus: string;
  github?: URL;
}
