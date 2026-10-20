import { ProjectSource } from './projects-template';

/**
 * All portfolio projects, in the order they appear on the Work page.
 * To add a project, add an entry here: the Work page row and the
 * /projects/:slug page are generated from it. Texts are written in both
 * languages ({ en, fi }); TypeScript reports a missing translation.
 */
export const projects: ProjectSource[] = [
  {
    slug: 'thesis',
    name: {
      en: 'AWS Supply Chain and generating realistic data using Bedrock',
      fi: 'AWS Supply Chain ja realistisen datan generointi Bedrockia hyödyntäen',
    },
    cardTitle: { en: "Bachelor's thesis", fi: 'Opinnäytetyö' },
    summary: {
      en: "Bachelor's thesis for Skillwell Oy: an AWS CDK app that generates realistic supply chain data with Amazon Bedrock.",
      fi: 'Opinnäytetyö Skillwell Oy:lle: AWS CDK -sovellus, joka generoi realistista toimitusketjudataa Amazon Bedrockin avulla.',
    },
    thumbnail: '/ThesisShortcut.webp',
    status: 'Completed',
    // 30 ECTS credits × 27 h
    hours: 810,
    roles: {
      en: ['Cloud Developer', 'Thesis Author'],
      fi: ['Pilvikehittäjä', 'Opinnäytetyön tekijä'],
    },
    technologies: [
      { name: 'AWS', icon: 'amazonwebservices-plain' },
      { name: 'TypeScript', icon: 'typescript-plain' },
      { name: 'Node.js', icon: 'nodejs-plain' },
    ],
    sections: {
      en: [
        {
          heading: 'Description',
          paragraphs: [
            `My <span class="font-semibold">Bachelor's thesis</span> for Jamk's Business Information Technology
            programme, completed in November 2025. It was commissioned by <span class="font-semibold">Skillwell Oy</span>,
            who wanted to understand how <span class="font-semibold">AWS Supply Chain</span> works and how AWS services
            communicate with each other, without having to use real customer data.`,
            `I built a <span class="font-semibold">data generator</span> as an <span class="font-semibold">AWS CDK</span>
            app in TypeScript, extending a base that Skillwell provided. Every morning
            <span class="font-semibold">EventBridge</span> starts a <span class="font-semibold">Step Functions</span>
            workflow whose Lambda functions ask <span class="font-semibold">Claude 3 Sonnet on Amazon Bedrock</span> for
            inventory, inbound order and outbound order data in parallel. The data is validated, converted to CSV and
            saved to S3, where Supply Chain picks it up and ingests it automatically.`,
          ],
        },
        {
          heading: 'Challenges',
          paragraphs: [
            `Supply Chain is very strict about its data: a column named <code>date_created</code> instead of the expected
            <code>created_at</code> was enough to reject a whole file, so the prompts had to describe the data model
            precisely. The model's 4096-token output limit also cut off the last rows of larger tables, which I solved
            by fixing the row count in each prompt and adding a validation step before anything reaches S3.`,
          ],
        },
        {
          heading: 'Personal Retrospective',
          paragraphs: [
            `The generated data ingested without errors, and Supply Chain's inventory view and network map showed it as
            expected, which gave Skillwell concrete information about the service. Along the way I became much more
            comfortable with <span class="font-semibold">infrastructure as code</span>, IAM permissions and working from
            developer documentation.`,
          ],
        },
      ],
      fi: [
        {
          heading: 'Kuvaus',
          paragraphs: [
            `<span class="font-semibold">Opinnäytetyöni</span> Jamkin tietojenkäsittelyn tutkinto-ohjelmaan, valmistunut
            marraskuussa 2025. Toimeksiantajana oli <span class="font-semibold">Skillwell Oy</span>, joka halusi
            ymmärtää, miten <span class="font-semibold">AWS Supply Chain</span> toimii ja miten AWS:n palvelut
            kommunikoivat keskenään, ilman että testaukseen tarvitaan oikeaa asiakasdataa.`,
            `Rakensin <span class="font-semibold">datageneraattorin</span> TypeScriptillä
            <span class="font-semibold">AWS CDK</span> -sovelluksena Skillwellin antaman pohjan päälle. Joka aamu
            <span class="font-semibold">EventBridge</span> käynnistää <span class="font-semibold">Step Functions</span>
            -työnkulun, jonka Lambda-funktiot pyytävät <span class="font-semibold">Amazon Bedrockin Claude 3 Sonnet</span>
            -mallilta rinnakkain varasto-, saapuvien tilausten ja lähtevien tilausten dataa. Data validoidaan,
            muunnetaan CSV-muotoon ja tallennetaan S3:een, josta Supply Chain ingestoi sen automaattisesti.`,
          ],
        },
        {
          heading: 'Haasteet',
          paragraphs: [
            `Supply Chain on hyvin tarkka datastaan: jo sarake nimeltä <code>date_created</code> odotetun
            <code>created_at</code>-sarakkeen sijaan riitti hylkäämään koko tiedoston, joten promptien piti kuvata
            tietomalli tarkasti. Mallin 4096 tokenin tulosteraja myös katkaisi suurempien taulukoiden viimeiset rivit.
            Ratkaisin tämän määrittelemällä rivimäärän jokaisessa promptissa ja lisäämällä validointivaiheen ennen
            kuin mitään tallennetaan S3:een.`,
          ],
        },
        {
          heading: 'Oma retrospektiivi',
          paragraphs: [
            `Generoitu data ingestoitui ilman virheitä, ja Supply Chainin varastonäkymä ja verkostokartta näyttivät sen
            odotetusti, mikä antoi Skillwellille konkreettista tietoa palvelusta. Samalla opin työskentelemään paljon
            varmemmin <span class="font-semibold">infrastruktuuri koodina</span> -mallilla, IAM-oikeuksien kanssa ja
            kehittäjädokumentaation pohjalta.`,
          ],
        },
      ],
    },
    images: [
      { src: '/screenshots/thesis/thesis-architecture.webp', thumb: '/screenshots/thesis/thesis-architecture-thumb.webp', width: 1290, height: 730, alt: { en: 'Architecture of the data generation workflow', fi: 'Datan generoinnin arkkitehtuurikaavio' } },
      { src: '/screenshots/thesis/thesis-inventory.webp', thumb: '/screenshots/thesis/thesis-inventory-thumb.webp', width: 1610, height: 716, alt: { en: 'Generated data in the Supply Chain inventory view', fi: 'Generoitu data Supply Chainin varastonäkymässä' } },
      { src: '/screenshots/thesis/thesis-network-map.webp', thumb: '/screenshots/thesis/thesis-network-map-thumb.webp', width: 1473, height: 772, alt: { en: 'Supply Chain network map with the generated sites', fi: 'Supply Chainin verkostokartta generoiduilla toimipisteillä' } },
    ],
    liveUrl: 'https://www.theseus.fi/items/d7f0dd5a-5f03-4a9e-9b51-b471169b7780',
    liveLabel: 'theseus.fi',
  },
  {
    slug: 'elli',
    name: { en: 'Elli-Ticorporate', fi: 'Elli-Ticorporate' },
    cardTitle: { en: 'Elli-Ticorporate', fi: 'Elli-Ticorporate' },
    summary: {
      en: 'Collaboration tool for Jamk and Elisa Oyj, built in Angular and Tailwind.',
      fi: 'Yhteistyötyökalu Jamkille ja Elisa Oyj:lle, toteutettu Angularilla ja Tailwindilla.',
    },
    thumbnail: '/ElliShortcut.webp',
    status: 'Completed',
    hours: 450,
    roles: {
      en: ['Frontend Developer', 'Project Manager', 'The helping hand'],
      fi: ['Frontend-kehittäjä', 'Projektipäällikkö', 'Auttava käsi'],
    },
    technologies: [
      { name: 'Angular', icon: 'angularjs-plain' },
      { name: 'Tailwind', icon: 'tailwindcss-plain' },
      { name: 'TypeScript', icon: 'typescript-plain' },
      { name: 'GitHub', icon: 'github-plain' },
      { name: 'Figma', icon: 'figma-plain' },
    ],
    sections: {
      en: [
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
            Working with <span class="font-semibold">Angular</span> and
            <span class="font-semibold">Tailwind</span>, I was able to create a visually appealing and
            user-friendly interface that followed the UI/UX planning of the project. I was also responsible for the
            <span class="font-semibold">project manager</span> role, which involved overseeing the project with the
            help of our Scrum Master.`,
          ],
        },
        {
          heading: 'Agile Workflow',
          paragraphs: [
            `We used the agile method of <span class="font-semibold">Scrum</span> for this project. Our sprints were
            2 weeks long, and we had daily scrum meetings to keep track of what everyone was doing. At the end of the
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
            I also deepened my understanding of the Angular framework and to my personal surprise I also learned how to
            create a responsive roadmap -styled yearly calendar with filtering based on project type and time.`,
          ],
        },
      ],
      fi: [
        {
          heading: 'Kuvaus',
          paragraphs: [
            `<span class="font-semibold">Elli</span> oli tiimimme FF Ticorporate -projekti syksyllä 2024.
            Projekti oli Elisa Oyj:n toimeksianto osana Elisan ja Jamkin välistä yhteistyöohjelmaa.
            Tavoitteenamme oli rakentaa Jamkin ja Elisan välinen yhteistyötyökalu, joka tekisi viestinnästä
            läpinäkyvämpää ja tehokkaampaa.`,
            `<span class="font-semibold">Työni</span> painottui projektin frontend-puolelle. Käytin runsaasti aikaa
            erilaisiin <span class="font-semibold">kalenteri- ja tehtävienhallintaominaisuuksiin</span> sekä
            <span class="font-semibold">suodatus- ja vahvistusmoduuleihin</span>.
            <span class="font-semibold">Angularin</span> ja <span class="font-semibold">Tailwindin</span> avulla
            rakensin visuaalisesti näyttävän ja helppokäyttöisen käyttöliittymän, joka noudatti projektin
            UI/UX-suunnitelmaa. Vastasin myös <span class="font-semibold">projektipäällikön</span> roolista eli
            ohjasin projektia yhdessä Scrum Masterimme kanssa.`,
          ],
        },
        {
          heading: 'Ketterä työskentely',
          paragraphs: [
            `Käytimme projektissa ketterää <span class="font-semibold">Scrum</span>-menetelmää. Sprinttimme kestivät
            kaksi viikkoa, ja päivittäisissä palavereissa pysyimme kärryillä siitä, mitä kukin teki. Sprintin lopuksi
            pidimme <span class="font-semibold">Sprint Review'n Elisa Oyj:n kanssa</span>, jossa saimme palautetta
            projektista, sekä Sprint Retrospektiivin, jossa arvioimme kulunutta sprinttiä. Uuden sprintin alussa
            pidimme Sprint Planning -palaverin, jossa sovimme seuraavan sprintin tehtävistä yhdessä Elisan
            henkilöstön kanssa.`,
          ],
        },
        {
          heading: 'Henkilökohtainen retrospektiivi',
          paragraphs: [
            `<span class="font-semibold">Henkilökohtaisesti</span> nautin projektista ja opin siitä paljon. Pääsin
            syvälle ohjelmistokehitysprosessiin ja opin ymmärtämään käyttämiämme ketteriä menetelmiä. Syvensin myös
            Angular-osaamistani, ja omaksi yllätyksekseni opin rakentamaan responsiivisen, roadmap-tyylisen
            vuosikalenterin, jota voi suodattaa projektityypin ja ajan mukaan.`,
          ],
        },
      ],
    },
    images: [
      { src: '/screenshots/elli/ElliLogin.webp', thumb: '/screenshots/elli/ElliLogin-thumb.webp', width: 1680, height: 878, alt: { en: 'Elli login page', fi: 'Ellin kirjautumissivu' } },
      { src: '/screenshots/elli/elli-cards.webp', thumb: '/screenshots/elli/elli-cards-thumb.webp', width: 1920, height: 909, alt: { en: 'Elli project cards view', fi: 'Ellin projektikorttinäkymä' } },
      { src: '/screenshots/elli/elli-yearlycal.webp', thumb: '/screenshots/elli/elli-yearlycal-thumb.webp', width: 1680, height: 880, alt: { en: 'Elli roadmap-style yearly calendar', fi: 'Ellin roadmap-tyylinen vuosikalenteri' } },
      { src: '/screenshots/elli/elli-filtering.webp', thumb: '/screenshots/elli/elli-filtering-thumb.webp', width: 1678, height: 742, alt: { en: 'Elli filtering by project type and time', fi: 'Ellin suodatus projektityypin ja ajan mukaan' } },
      { src: '/screenshots/elli/elli-confirmation.webp', thumb: '/screenshots/elli/elli-confirmation-thumb.webp', width: 1027, height: 551, alt: { en: 'Elli confirmation dialog', fi: 'Ellin vahvistusikkuna' } },
      { src: '/screenshots/elli/elli-archive.webp', thumb: '/screenshots/elli/elli-archive-thumb.webp', width: 1678, height: 811, alt: { en: 'Elli project archive', fi: 'Ellin projektiarkisto' } },
    ],
  },
  {
    slug: 'turvajatkat',
    name: { en: 'Turvajätkät', fi: 'Turvajätkät' },
    cardTitle: { en: 'Turvajätkät', fi: 'Turvajätkät' },
    summary: {
      en: 'WordPress website for a security company, live at turvajatkat.fi.',
      fi: 'WordPress-sivusto turvallisuusalan yritykselle, julkaistu osoitteessa turvajatkat.fi.',
    },
    thumbnail: '/turvajatkatShortcut.webp',
    thumbnailBackground: '#2B211C',
    status: 'Completed',
    hours: 50,
    roles: {
      en: ['Full-Stack Developer', 'UI/UX Designer'],
      fi: ['Full stack -kehittäjä', 'UI/UX-suunnittelija'],
    },
    technologies: [
      { name: 'WordPress', icon: 'wordpress-plain' },
      { name: 'CSS', icon: 'css3-plain' },
    ],
    sections: {
      en: [
        {
          heading: 'Description',
          paragraphs: [
            `<span class="font-semibold">Turvajätkät</span> is a security management corporation that specializes in
            selling security solutions. I was commissioned to provide a simple website for their company using
            WordPress. The site includes information about the company itself, their services and contact details.`,
            `The website is built using a pre-made WordPress theme, with customizations made to fit the company's
            branding and requirements.`,
          ],
        },
        {
          heading: 'Key Features',
          paragraphs: [
            `The commissioner requested a simple and clean website to showcase their services and contact
            information. I implemented a responsive design so that the site looks good on both desktop and mobile
            devices, as well as a contact form to allow potential clients to reach out easily.`,
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
      fi: [
        {
          heading: 'Kuvaus',
          paragraphs: [
            `<span class="font-semibold">Turvajätkät</span> on turvallisuusratkaisujen myyntiin erikoistunut yritys.
            Sain toimeksiannon toteuttaa yritykselle yksinkertaisen WordPress-sivuston, josta löytyvät tiedot
            yrityksestä, sen palveluista ja yhteystiedot.`,
            `Sivusto perustuu valmiiseen WordPress-teemaan, jota muokkasin yrityksen brändin ja tarpeiden mukaiseksi.`,
          ],
        },
        {
          heading: 'Keskeiset ominaisuudet',
          paragraphs: [
            `Toimeksiantaja toivoi yksinkertaista ja selkeää sivustoa, joka esittelee palvelut ja yhteystiedot.
            Toteutin responsiivisen ulkoasun, jotta sivusto näyttää hyvältä sekä tietokoneella että mobiilissa, sekä
            yhteydenottolomakkeen, jonka kautta asiakkaat tavoittavat yrityksen helposti.`,
          ],
        },
        {
          heading: 'Kehityksen tila',
          paragraphs: [
            `<span class="font-semibold">Tällä hetkellä</span> sivusto on julkaistu ja toimeksiantajan käytössä.
            En jäänyt ylläpitämään sivustoa luovutuksen jälkeen, sillä toimeksiantajalla oli siihen oma IT-tiimi.`,
          ],
        },
      ],
    },
    liveUrl: 'https://turvajatkat.fi/',
    liveLabel: 'turvajatkat.fi',
  },
  {
    slug: 'musicportfolio',
    name: { en: 'Music Portfolio Website', fi: 'Musiikkiportfolio-sivusto' },
    cardTitle: { en: 'Music portfolio', fi: 'Musiikkiportfolio' },
    summary: {
      en: 'My music site hakalamusic.com, built with React and hosted on AWS.',
      fi: 'Musiikkisivustoni hakalamusic.com, toteutettu Reactilla ja AWS:llä.',
    },
    thumbnail: '/MusicShortcut.webp',
    thumbnailBackground: '#FFFFFF',
    status: 'In Development',
    hours: 110,
    roles: {
      en: ['Full-Stack Developer', 'UI/UX Designer', 'Content Creator'],
      fi: ['Full stack -kehittäjä', 'UI/UX-suunnittelija', 'Sisällöntuottaja'],
    },
    technologies: [
      { name: 'React + Vite', icon: 'react-original' },
      { name: 'AWS', icon: 'amazonwebservices-plain' },
      { name: 'TypeScript', icon: 'typescript-plain' },
      { name: 'CSS', icon: 'css3-plain' },
      { name: 'Node.js', icon: 'nodejs-plain' },
    ],
    sections: {
      en: [
        {
          heading: 'Description',
          paragraphs: [
            `<span class="font-semibold">Music Portfolio Website</span> is a web development project I created to
            showcase my musical works and audio production skills. The website serves as a digital portfolio for my
            music career, featuring audio samples, latest releases, and professional information for potential
            collaborators and clients.`,
            `<span class="font-semibold">The website</span> includes features such as
            <span class="font-semibold">audio streaming</span> through SoundCloud's embed player,
            <span class="font-semibold">project showcases</span> with descriptions of my work,
            and <span class="font-semibold">contact forms</span> for booking inquiries.
            The website also provides information about my background in music production.`,
          ],
        },
        {
          heading: 'Key Features',
          paragraphs: [
            `The website includes responsive design to ensure optimal viewing on various devices, a language switcher
            for English and Finnish, SEO optimization to enhance online visibility, and work-in-progress social media
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
            additional features such as a built-in music player so I don't have to rely on external services, social
            media integration, and content management capabilities. Implementation of AWS DynamoDB as a database is
            planned for future development. The site will continue to evolve as my music portfolio grows.`,
          ],
        },
      ],
      fi: [
        {
          heading: 'Kuvaus',
          paragraphs: [
            `<span class="font-semibold">Musiikkiportfolio-sivusto</span> on verkkokehitysprojekti, jonka tein
            esitelläkseni musiikkiani ja äänituotanto-osaamistani. Sivusto toimii musiikkiurani digitaalisena
            portfoliona: siellä on ääninäytteitä, uusimmat julkaisut ja ammatillista tietoa mahdollisille
            yhteistyökumppaneille ja asiakkaille.`,
            `<span class="font-semibold">Sivuston</span> ominaisuuksiin kuuluvat
            <span class="font-semibold">äänen striimaus</span> SoundCloudin upotetulla soittimella,
            <span class="font-semibold">projektiesittelyt</span> töideni kuvauksineen sekä
            <span class="font-semibold">yhteydenottolomakkeet</span> keikkatiedusteluille.
            Sivustolla kerron myös taustastani musiikkituotannossa.`,
          ],
        },
        {
          heading: 'Keskeiset ominaisuudet',
          paragraphs: [
            `Sivusto on responsiivinen, joten se toimii hyvin eri laitteilla. Siinä on kielivalinta suomeksi ja
            englanniksi, hakukoneoptimointi näkyvyyden parantamiseksi sekä keskeneräinen somekanavien integraatio.
            Frontend on toteutettu <span class="font-semibold">Reactilla</span>, ja hostaus ja taustatoiminnot
            hoituvat <span class="font-semibold">AWS</span>:n palveluilla. Infrastruktuuri on kuvattu AWS CDK:lla,
            mikä tekee julkaisusta ja hallinnasta helppoa sekä skaalautuvaa ja luotettavaa. Sivusto toimii
            <span class="font-semibold">AWS S3</span>:ssa <span class="font-semibold">CloudFront</span>-jakelun
            kautta nopeaa sisällönjakelua varten, ja verkkotunnusta hallitaan
            <span class="font-semibold">AWS Route 53</span>:lla.`,
          ],
        },
        {
          heading: 'Kehityksen tila',
          paragraphs: [
            `<span class="font-semibold">Tällä hetkellä</span> projekti on aktiivisessa kehityksessä. Työn alla on
            lisäominaisuuksia, kuten oma musiikkisoitin, jotta minun ei tarvitse tukeutua ulkoisiin palveluihin,
            somekanavien integraatio ja sisällönhallintatoiminnot. Tietokannaksi on tarkoitus ottaa myöhemmin
            AWS DynamoDB. Sivusto kehittyy edelleen musiikkiportfolioni kasvaessa.`,
          ],
        },
      ],
    },
    liveUrl: 'https://www.hakalamusic.com/',
    liveLabel: 'hakalamusic.com',
  },
];
