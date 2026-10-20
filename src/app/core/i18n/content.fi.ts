import type { SiteContent } from './content';

/**
 * Kaikki sivuston suomenkieliset tekstit (projektien tekstit ovat projects-data.ts:ssä).
 * Rakenne on sama kuin content.en.ts:ssä; TypeScript ilmoittaa, jos jokin teksti puuttuu.
 */
export const fi: SiteContent = {
  meta: {
    description:
      'Aleksi Hakalan portfolio. Ohjelmistokehittäjä Peasy Gig Oy:llä Seinäjoella; Angular, React, React Native, TypeScript ja Supabase.',
  },

  titles: {
    home: 'Aleksi Hakala | Ohjelmistokehittäjän portfolio',
    work: 'Työt | Aleksi Hakala',
    contact: 'Yhteystiedot | Aleksi Hakala',
    about: 'Tietoa minusta | Aleksi Hakala',
    project: (name: string) => `${name} | Aleksi Hakala`,
  },

  nav: {
    home: 'Etusivu',
    work: 'Työt',
    contact: 'Yhteystiedot',
    homeLink: 'Aleksi Hakala, etusivu',
    main: 'Päävalikko',
    language: 'Kieli',
    toLight: 'Vaihda vaaleaan teemaan',
    toDark: 'Vaihda tummaan teemaan',
    openMenu: 'Avaa valikko',
    closeMenu: 'Sulje valikko',
  },

  footer: {
    copyright: (year: number) => `© ${year} Aleksi Hakala. Kaikki oikeudet pidätetään.`,
    sourceCode: 'Lähdekoodi',
  },

  home: {
    greetings: {
      night: 'Hei siellä, yökukkuja!',
      morning: 'Hyvää huomenta, ystäväni!',
      afternoon: 'Hyvää iltapäivää sinulle!',
      evening: 'Hyvää iltaa, matkalainen!',
    },
    photoAlt: 'Aleksi Hakala hymyilee kaupungin kadulla',
    role: 'Ohjelmistokehittäjä Seinäjoelta',
    intro: (age: number) =>
      `Olen ${age}-vuotias ja asun Seinäjoella. Työskentelen ohjelmistokehittäjänä Peasy Gig Oy:llä, ` +
      `ja olen tutkinnoltani Tietojenkäsittelyn Tradenomi.`,
    background:
      'Ennen ohjelmistoalaa keräsin kokemusta valokuvauksesta, videokuvauksesta, tapahtumien järjestämisestä ja somemarkkinoinnista. ' +
      'Vapaa-ajallani käyn ahkerasti salilla ja pelaan vaihtelevia määriä Dungeons & Dragons -roolipeliä.',
    seeProjects: 'Katso projektini',
    contactMe: 'Ota yhteyttä',
  },

  work: {
    title: 'Työt',
    intro:
      'Työskentelen ohjelmistokehittäjänä Peasy Gig Oy:llä Seinäjoella. Valmistuin tradenomiksi (tietojenkäsittely) ' +
      'Jyväskylän ammattikorkeakoulusta, jossa opintoni painottuivat full stack -kehitykseen.',
    experience:
      'Hallitsen JavaScriptin ja TypeScriptin hyvin sekä useita niiden päälle rakennettuja sovelluskehyksiä, ja olen hiljattain ' +
      'ottanut työkaluiksi myös React Nativen, Expon ja Supabasen. Tämä sivusto on tehty Angularilla ja Tailwindilla.',
    experienceTitle: 'Työkokemus',
    jobs: [
      {
        role: 'Ohjelmistokehittäjä',
        company: 'Peasy Gig Oy',
        period: '8/2026 – nyt',
        place: 'Seinäjoki',
        current: true,
        text:
          'Toimin ohjelmistokehittäjänä sekä mobiili- että websovelluksen parissa. Työnkuvaani kuuluvat myös tietokannan ' +
          'ylläpito ja muokkaukset sekä arkkitehtuurisuunnittelu.',
        tech: ['React Native', 'Expo', 'Supabase', 'TypeScript'],
      },
      {
        role: 'Pilvikehityksen harjoittelija',
        company: 'Skillwell Oy',
        period: '8/2025 – 12/2025',
        place: 'Jyväskylä',
        current: false,
        text:
          'Osana tiimiä, joka rakensi pilvipohjaisen tarjousten arviointityökalun. Työskentelin Nova Pro- ja Claude 3 Sonnet ' +
          '-mallien parissa ja toteutin rajapintaintegraation hankintailmoitukset.fi-palveluun.',
        tech: ['AWS', 'TypeScript', 'Python', 'React'],
      },
    ],
    projects: 'Projektit',
    barsHint: 'Palkin pituus kertoo, kuinka paljon aikaa käytin projektiin.',
    project: 'Projekti',
    hours: (hours: number) => `~${hours} h`,
    hoursSoFar: (hours: number) => `~${hours} h tähän mennessä`,
    highlight: {
      label: 'Poiminta Ellistä',
      title: 'Roadmap-tyylinen vuosikalenteri',
      text:
        'Responsiivinen vuosinäkymä, jota voi suodattaa projektityypin ja ajan mukaan. Toteutettu Angularilla ja Tailwindilla ' +
        'kahden viikon Scrum-sprinteissä yhdessä Elisan kanssa.',
      imageAlt: 'Ellin roadmap-tyylinen vuosikalenteri',
    },
    skills: 'Taidot',
    buildWith: 'Työkaluni',
    alsoKnow: 'Osaan myös',
    backgroundTitle: 'Tausta',
    background: ['Tradenomi (tietojenkäsittely), Jamk', 'AWS Certified Cloud Practitioner'],
    certificates: 'Sertifikaatit',
    badgeAlt: (name: string) => `${name} -merkki`,
  },

  status: {
    Completed: 'Valmis',
    'In Development': 'Kehitteillä',
  },

  project: {
    allProjects: 'Kaikki projektit',
    visit: (site: string) => `Avaa ${site}`,
    status: 'Tila',
    timeSpent: 'Käytetty aika',
    aboutHours: (hours: number) => `Noin ${hours} tuntia`,
    roles: 'Roolit',
    technologies: 'Teknologiat',
    screenshots: 'Kuvakaappaukset',
    openImage: (alt: string) => `Avaa kuva: ${alt}`,
    closeImage: 'Sulje kuva',
  },

  contact: {
    title: 'Onko mielessäsi projekti tai työpaikka?',
    intro: 'Täältä löydät yhteystietoni ja somekanavani. Sähköposti on nopein tapa tavoittaa minut.',
    businessId: 'Y-tunnus',
    location: 'Sijainti',
    locationValue: 'Seinäjoki',
    socials: 'Sosiaalisen median profiilit',
  },
};
