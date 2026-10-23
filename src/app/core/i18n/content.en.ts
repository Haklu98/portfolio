/**
 * All English copy on the site (project texts live in projects-data.ts).
 * content.fi.ts must have exactly the same keys; TypeScript reports anything missing.
 */
export const en = {
  meta: {
    description:
      'Portfolio of Aleksi Hakala, a software developer at Peasy Gig Oy in Seinäjoki, Finland, working with Angular, React, React Native, TypeScript and Supabase.',
  },

  titles: {
    home: 'Aleksi Hakala | Developer Portfolio',
    work: 'Work | Aleksi Hakala',
    contact: 'Contact | Aleksi Hakala',
    about: 'About | Aleksi Hakala',
    pricing: 'Pricing | Aleksi Hakala',
    project: (name: string) => `${name} | Aleksi Hakala`,
  },

  nav: {
    home: 'Home',
    work: 'Work',
    pricing: 'Pricing',
    contact: 'Contact',
    homeLink: 'Aleksi Hakala, home',
    main: 'Main',
    language: 'Language',
    toLight: 'Switch to light mode',
    toDark: 'Switch to dark mode',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
  },

  footer: {
    copyright: (year: number) => `Copyright © ${year} Aleksi Hakala. All rights reserved.`,
    sourceCode: 'Source code',
  },

  home: {
    greetings: {
      night: 'Hello there, insomniac!',
      morning: 'Good Morning, my friend!',
      afternoon: 'Good Afternoon, you!',
      evening: 'Good Evening, fellow traveller!',
    },
    photoAlt: 'Aleksi Hakala smiling on a city street',
    role: 'Software Developer based in Seinäjoki',
    intro: (age: number) =>
      `I'm ${age} years young, living in Seinäjoki. I work as a Software Developer at Peasy Gig Oy, ` +
      `and I hold a Bachelor of Business Information Technology from Jamk.`,
    background:
      'Before software, I gained experience in photography, videography, event planning and social media marketing. ' +
      'For personal hobbies I actively go to the gym and indulge in varying amounts of the Dungeons & Dragons tabletop role-playing game.',
    seeProjects: 'See my projects',
    pricing: 'Pricing',
    contactMe: 'Contact me',
  },

  work: {
    title: 'Work',
    intro:
      'I work as a Software Developer at Peasy Gig Oy in Seinäjoki. I graduated as a Bachelor of Business Information Technology ' +
      'from Jamk University of Applied Sciences, where my studies focused on full-stack development.',
    experience:
      'I know JavaScript and TypeScript well, along with several frameworks built on them, and I have recently added React Native, ' +
      'Expo and Supabase to my toolkit. This website is built with Angular and Tailwind.',
    experienceTitle: 'Work experience',
    jobs: [
      {
        role: 'Software Developer',
        company: 'Peasy Gig Oy',
        period: 'Aug 2026 – present',
        place: 'Seinäjoki',
        current: true,
        text:
          'I work as a software developer on both the mobile app and the web app. My role also covers maintaining and ' +
          'evolving the database, as well as architecture design.',
        tech: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
      },
      {
        role: 'Cloud Development Intern',
        company: 'Skillwell Oy',
        period: 'Aug 2025 – Dec 2025',
        place: 'Jyväskylä',
        current: false,
        text:
          'Part of a team that built a cloud-based business offer evaluator. I worked with models like Nova Pro and Claude 3 Sonnet ' +
          'and built the API integration with hankintailmoitukset.fi.',
        tech: ['AWS', 'TypeScript', 'Python', 'React'],
      },
    ],
    projects: 'Projects',
    barsHint: 'Each bar is the time I put into the project.',
    project: 'Project',
    hours: (hours: number) => `~${hours} h`,
    hoursSoFar: (hours: number) => `~${hours} h so far`,
    highlight: {
      label: 'From Elli',
      title: 'Roadmap-style yearly calendar',
      text:
        'A responsive yearly view with filtering by project type and time, built in Angular and Tailwind ' +
        'during two-week Scrum sprints with Elisa.',
      imageAlt: "Elli's roadmap-style yearly calendar",
    },
    skills: 'Skills',
    buildWith: 'Build with',
    alsoKnow: 'Also know',
    backgroundTitle: 'Background',
    background: ['BBA in Business Information Technology, Jamk', 'AWS Certified Cloud Practitioner'],
    certificates: 'Certificates',
    badgeAlt: (name: string) => `${name} badge`,
  },

  status: {
    Completed: 'Completed',
    'In Development': 'In development',
  },

  project: {
    allProjects: 'All projects',
    visit: (site: string) => `Visit ${site}`,
    status: 'Status',
    timeSpent: 'Time spent',
    aboutHours: (hours: number) => `About ${hours} hours`,
    roles: 'Roles',
    technologies: 'Technologies',
    screenshots: 'Screenshots',
    openImage: (alt: string) => `Open image: ${alt}`,
    closeImage: 'Close image',
  },

  pricing: {
    title: 'Pricing',
    intro:
      'Starting prices for the most common projects. Every project is a little different, ' +
      'so you always get a written quote before any work begins.',
    from: 'from',
    vat: '+ VAT',
    perMonth: '/ month',
    plansLabel: 'Services and starting prices',
    plans: [
      {
        name: 'Website',
        price: 690,
        monthly: false,
        text: 'A fast, responsive website for a business, an association or a personal brand.',
        includes: ['Up to 5 pages', 'Works on phones, tablets and desktops', 'Contact form and basic SEO', 'Help with the domain and hosting'],
      },
      {
        name: 'Web application',
        price: 1400,
        monthly: false,
        text: 'A custom web app, such as a booking system, a customer portal or an internal tool.',
        includes: ['Sign-in and user roles', 'Database and admin panel', 'Built with Angular or React', 'Integrations with other services'],
      },
      {
        name: 'Mobile application',
        price: 3500,
        monthly: false,
        text: 'An app for both iOS and Android from a single codebase.',
        includes: ['Built with React Native and Expo', 'iOS and Android', 'Backend with Supabase', 'Help publishing to the app stores'],
      },
      {
        name: 'Maintenance',
        price: 30,
        monthly: true,
        text: 'Keeps your website or app secure, up to date and running.',
        includes: ['Updates and security patches', 'Backups', 'Uptime monitoring', 'Small fixes as agreed'],
      },
    ],
    note: 'All prices are starting prices. The final price depends on the scope of the project and is agreed in a written quote.',
    ctaTitle: 'Have a project in mind?',
    cta: 'Ask for a quote',
  },

  contact: {
    title: 'Got a project or a role in mind?',
    intro: 'Here you can find my contact information and socials. Email is the quickest way to reach me.',
    businessId: 'Business ID / Y-tunnus',
    location: 'Location',
    locationValue: 'Seinäjoki, Finland',
    socials: 'Social profiles',
  },
};
