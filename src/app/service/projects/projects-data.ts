import { Project } from './projects-template';

/**
 * All portfolio projects, in the order they appear on the Code page.
 * To add a project, add an entry here: the Code page card and the
 * /projects/:slug page are generated from it.
 */
export const projects: Project[] = [
  {
    slug: 'elli',
    name: 'Elli-Ticorporate',
    cardTitle: 'Elli-Ticorporate',
    thumbnail: '/ElliShortcut.webp',
    status: 'Completed',
    hours: 450,
    roles: ['Frontend Developer', 'Project Manager', 'The helping hand'],
    technologies: [
      { name: 'Angular', icon: 'angularjs-plain' },
      { name: 'Tailwind', icon: 'tailwindcss-plain' },
      { name: 'TypeScript', icon: 'typescript-plain' },
      { name: 'GitHub', icon: 'github-plain' },
      { name: 'Figma', icon: 'figma-plain' },
    ],
    sections: [
      {
        heading: 'Description',
        paragraphs: [
          `<span class="font-semibold">Elli</span> was our team's FF Ticorporate project during the 2024 autumn.
          This project was a commission given to us by Elisa Oyj as a part of their collaboration program with Jamk.
          Our goal was to create a collaboration tool between Jamk and Elisa Oyj to provide better communication
          with transparency and efficiency.`,
          `<span class="font-semibold">My job</span> was mainly on the frontend side of the project. I spent copious
          amounts of time on the different <span class="font-semibold">calendar and task management features</span>,
          as well as the <span class="font-semibold">filtering and confirmation modules</span>.
          Working with <span class="font-semibold text-red-500">Angular</span> and
          <span class="font-semibold text-blue-400">Tailwind</span>, I was able to create a visually appealing and
          user-friendly interfac that followed the UI/UX planning of the project. I was also responsible for the
          <span class="font-semibold">project manager</span> role, which involved overseeing the project with the
          help of our Scrum Master.`,
        ],
      },
      {
        heading: 'Agile Workflow',
        paragraphs: [
          `We used the agile method of <span class="font-semibold">Scrum</span> for this project. Our sprints were
          2 weeks long, and we had daily scrum meetings to keep track on what everyone was doing. At the end of the
          sprint we would have a <span class="font-semibold">Sprint Review with Elisa Oyj</span> to give feedback on
          the project and Sprint Retrospective to reflect on the sprint. At the start of the new sprint, we would
          have a Sprint Planning meeting where we would decide on the tasks for the next sprint with the help of the
          Elisa personnel.`,
        ],
      },
      {
        heading: 'Personal Retrospective',
        paragraphs: [
          `<span class="font-semibold">Personally</span> I enjoyed and learned a lot from this project. I was able
          to delve deep into the software development process and understand the agile methods that we used.
          I also deepened my understanding on Angular Framework and to my personal surprise I also learned how to
          create a responsive roadmap -styled yearly calendar with filtering based on project type and time.`,
        ],
      },
    ],
    images: [
      { src: '/screenshots/elli/ElliLogin.webp', thumb: '/screenshots/elli/ElliLogin-thumb.webp', width: 1680, height: 878, alt: 'Elli login page' },
      { src: '/screenshots/elli/elli-cards.webp', thumb: '/screenshots/elli/elli-cards-thumb.webp', width: 1920, height: 909, alt: 'Elli project cards view' },
      { src: '/screenshots/elli/elli-yearlycal.webp', thumb: '/screenshots/elli/elli-yearlycal-thumb.webp', width: 1680, height: 880, alt: 'Elli roadmap-style yearly calendar' },
      { src: '/screenshots/elli/elli-filtering.webp', thumb: '/screenshots/elli/elli-filtering-thumb.webp', width: 1678, height: 742, alt: 'Elli filtering by project type and time' },
      { src: '/screenshots/elli/elli-confirmation.webp', thumb: '/screenshots/elli/elli-confirmation-thumb.webp', width: 1027, height: 551, alt: 'Elli confirmation dialog' },
      { src: '/screenshots/elli/elli-archive.webp', thumb: '/screenshots/elli/elli-archive-thumb.webp', width: 1678, height: 811, alt: 'Elli project archive' },
    ],
  },
  {
    slug: 'turvajatkat',
    name: 'Turvajätkät',
    cardTitle: 'Turvajätkät',
    thumbnail: '/turvajatkatShortcut.webp',
    status: 'Completed',
    hours: 50,
    roles: ['Full-Stack Developer', 'UI/UX Designer'],
    technologies: [
      { name: 'WordPress', icon: 'wordpress-plain' },
      { name: 'CSS', icon: 'css3-plain' },
    ],
    sections: [
      {
        heading: 'Description',
        paragraphs: [
          `<span class="font-semibold">Turvajätkät</span> is a security management corporation who specialize in
          selling security solutions. I was commissioned to provide a simple web-site for their company using
          wordpress. The site includes information about the company itself, their services and contact details.`,
          `The website is built using a pre-made wordpress theme, with customizations made to fit the company's
          branding and requirements.`,
        ],
      },
      {
        heading: 'Key Features',
        paragraphs: [
          `The commissioner requested a simple and clean web-site to showcase their services and contact
          information. I implemented a responsive design so that the site looks good on both desktop and mobile
          devices, as well as contact form to allow potential clients to reach out easily.`,
        ],
      },
      {
        heading: 'Development Status',
        paragraphs: [
          `<span class="font-semibold">Currently</span> this project is live and in use by the commissioner.
          I did not stay to maintain the site after delivery since the commissioner had their own internal IT team
          for that purpose.`,
        ],
      },
    ],
    liveUrl: 'https://turvajatkat.fi/',
    liveLabel: 'turvajatkat.fi',
  },
  {
    slug: 'musicportfolio',
    name: 'Music Portfolio Website',
    cardTitle: 'Music portfolio',
    thumbnail: '/MusicShortcut.webp',
    status: 'In Development',
    hours: 80,
    roles: ['Full-Stack Developer', 'UI/UX Designer', 'Content Creator'],
    technologies: [
      { name: 'React + Vite', icon: 'react-original' },
      { name: 'AWS', icon: 'amazonwebservices-plain' },
      { name: 'TypeScript', icon: 'typescript-plain' },
      { name: 'CSS', icon: 'css3-plain' },
      { name: 'Node.js', icon: 'nodejs-plain' },
    ],
    sections: [
      {
        heading: 'Description',
        paragraphs: [
          `<span class="font-semibold">Music Portfolio Website</span> is a web development project I created to
          showcase my musical works and audio production skills. The website serves as a digital portfolio for my
          music career, featuring audio samples, latest releases, and professional information for potential
          collaborators and clients.`,
          `<span class="font-semibold">The website</span> includes features such as
          <span class="font-semibold">audio streaming</span> through soundcloud's embed player,
          <span class="font-semibold">project showcases</span> with descriptions of my work,
          and <span class="font-semibold">contact forms</span> for booking inquiries.
          The website also provides information about my background in music production.`,
        ],
      },
      {
        heading: 'Key Features',
        paragraphs: [
          `The website includes responsive design to ensure optimal viewing on various devices, a language switcher
          for english and finnish, SEO optimization to enhance online visibility, and work-in-progress social media
          integration. The website is built using <span class="font-semibold">React</span> for the front-end,
          with <span class="font-semibold">AWS</span> services for hosting and backend functionalities.
          The AWS infrastructure uses AWS CDK for easy deployment and management, ensuring scalability and
          reliability. It's hosted through <span class="font-semibold">AWS S3</span> with a
          <span class="font-semibold">CloudFront</span> distribution for fast content delivery,
          and <span class="font-semibold">AWS Route 53</span> for domain management.`,
        ],
      },
      {
        heading: 'Development Status',
        paragraphs: [
          `<span class="font-semibold">Currently</span> this project is in active development. I am implementing
          additional features such as built-in music player so I don't have to rely on external services, social
          media integration, and content management capabilities. Implementation of AWS Dynamo DB as database is
          planned for future development. The site will continue to evolve as my music portfolio grows.`,
        ],
      },
    ],
    liveUrl: 'https://www.hakalamusic.com/',
    liveLabel: 'hakalamusic.com',
  },
];
