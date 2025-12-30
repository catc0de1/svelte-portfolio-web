import projectDirectoryListingApp from './images/project-directory-listing-app.webp';
import projectPersonalWeb from './images/project-personal-web.webp';
import projectPersonalBlog from './images/project-personal-blog.webp';
import projectSmtpApi from './images/project-smtp-api.webp';
import projectBisaEnggress from './images/project-bisa-enggress.webp';
import projectDiaryDesktopApp from './images/project-diary-desktop-app.webp';
import projectPuriRanilasem from './images/project-puri-ranilasem.webp';
import projectGithubPortfolioTempalte from './images/project-github-portfolio-template.webp';

import certifAdonis from './images/certif-adonisjs.webp';
import certifNestjs from './images/certif-nestjs.webp';
import certifExpress from './images/certif-expressjs.webp';

import adonisIcon from './svg/adonis.svg';
import astroIcon from './svg/astro.svg';
import bootstrapIcon from './svg/bootstrap.svg';
import cssIcon from './svg/css.svg';
import ejsIcon from './svg/ejs.svg';
import expressIcon from './svg/express.svg';
import framerIcon from './svg/framer.svg';
import hbsIcon from './svg/hbs.svg';
import htmlIcon from './svg/html.svg';
import jsIcon from './svg/js.svg';
import mongodbIcon from './svg/mongodb.svg';
import mysqlIcon from './svg/mysql.svg';
import nestjsIcon from './svg/nestjs.svg';
import pgIcon from './svg/pg.svg';
import redisIcon from './svg/redis.svg';
import reactIcon from './svg/react.svg';
import reactNativeIcon from './svg/react-native.svg';
import rustIcon from './svg/rust.svg';
import sqliteIcon from './svg/sqlite.svg';
import svelteIcon from './svg/svelte.svg';
import swaggerIcon from './svg/swagger.svg';
import tailwindIcon from './svg/tailwind.svg';
import tauriIcon from './svg/tauri.svg';
import tsIcon from './svg/ts.svg';
import typeormIcon from './svg/typeorm.svg';

export interface ProjectTech {
  name: string;
  icon: string;
}

export interface PersonalProjects {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  technologies: ProjectTech[];
  repo: string;
  product?: string;
}

export interface ClientProjects {
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  technologies: ProjectTech[];
  product: string;
  tag: 'Website' | 'Web App' | 'Mobile App' | 'Android App' | 'Desktop App' | 'Linux App' | 'API';
}

export const personalProjects: PersonalProjects[] = [
  {
    imgSrc: projectDirectoryListingApp,
    imgAlt: "Homepage of Directory Listing web apps",
    title: "Directory Listing App",
    desc: "SSR web apps with Express.js that displays a list of the best locations in Surabaya. This web allows users to search and browse various places.",
    technologies: [
      { name: "JavaScript", icon: jsIcon },
      { name: "EJS", icon: ejsIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
      { name: "Express", icon: expressIcon },
      { name: "MongoDB", icon: mongodbIcon },
    ],
    repo: "https://github.com/catc0de1/express-directory-listing-app",
  },
  {
    imgSrc: certifAdonis,
    imgAlt: "Certificate of completion AdonisJS study case course by Codepolitan",
    title: "Forum API",
    desc: "RESTful API server using AdonisJS for discussion forum application. Supports authentication, posting, and forum data management features efficiently.",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "AdonisJS", icon: adonisIcon },
      { name: "MySQL", icon: mysqlIcon },
    ],
    repo: "https://github.com/catc0de1/adonis-forum-api",
  },
  {
    imgSrc: certifNestjs,
    imgAlt: "Certificate of completion NestJS study case course by Codepolitan",
    title: "Pre Owned Store API",
    desc: "RESTful API server for a pre-owned goods store application using NestJS. Features include user authentication, product listings, and order management.",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "NestJS", icon: nestjsIcon },
      { name: "PostgreSQL", icon: pgIcon },
      { name: "Redis", icon: redisIcon },
      { name: "TypeORM", icon: typeormIcon },
    ],
    repo: "https://github.com/catc0de1/nestjs-myex-api",
  },
  {
    imgSrc: projectPersonalWeb,
    imgAlt: "Hero section of personal portfolio website",
    title: "Personal Portfolio Website",
    desc: "Personal portfolio website showcasing my projects and skills as a developer. Built with Svelte for performance and a modern website.",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "Svelte", icon: svelteIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
    ],
    repo: "https://github.com/catc0de1/svelte-portfolio-web",
    product: "https://iyan-zuli-armanda.netlify.app",
  },
  {
    imgSrc: projectSmtpApi,
    imgAlt: "Preview of Gmail template from SMTP",
    title: "SMTP API Server",
    desc: "Simple main transfer protocol API server with Express.js to send gmail.",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "Express", icon: expressIcon },
      { name: "Handlebars", icon: hbsIcon },
      { name: "Swagger", icon: swaggerIcon },
    ],
    repo: "https://github.com/catc0de1/express-smtp-api",
    product: "https://iyan-zuli-armanda.netlify.app",
  },
  {
    imgSrc: projectPersonalBlog,
    imgAlt: "Homepage of ZBlog Zone",
    title: "Personal Blogsite",
    desc: "Simple and fast SSG dynamic blogs made with astro and markdown as content. The blogs show content for developers from me",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "Astro", icon: astroIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
    ],
    repo: "https://github.com/catc0de1/astro-zblogzone-app",
    product: "https://iyan-zuli-armanda.netlify.app",
  },
  {
    imgSrc: projectBisaEnggress,
    imgAlt: "Two UI of Bisa Enggress on Android, hompage on the left and chatting with bot on the right",
    title: "Bisa Enggress",
    desc: "Android application for learning English with interactive chatbot. Made with React Native Manually without Expo.",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "React Native", icon: reactNativeIcon },
    ],
    repo: "https://github.com/catc0de1/react-native-enggress-mobile",
  },
  {
    imgSrc: projectDiaryDesktopApp,
    imgAlt: "Prototype homepage of MyDiary on desktop",
    title: "Diary Desktop App",
    desc: "A prototype desktop diary application based on Tauri and React. Allows users to record daily activities with a simple and secure interface.",
    technologies: [
      { name: "Rust", icon: rustIcon },
      { name: "TypeScript", icon: tsIcon },
      { name: "Tauri", icon: tauriIcon },
      { name: "React", icon: reactIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "SQLite", icon: sqliteIcon },
    ],
    repo: "https://github.com/catc0de1/tauri-mydiary-desktop",
  }
];

export const clientProjects: ClientProjects[] = [
  {
    imgSrc: projectPuriRanilasem,
    imgAlt: "E-commerce platform for make up artist service showcase",
    title: "Make Up Artist Showcase E-commerce",
    desc: "Helped the client increase online sales by more than 20% through a seamless showcases of client service.",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "React", icon: reactIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
      { name: "Framer", icon: framerIcon },
    ],
    product: "https://puri-ranilasem.netlify.app/",
    tag: "Website",
  },
  {
    imgSrc: projectGithubPortfolioTempalte,
    imgAlt: "Showcase of GitHub Portfolio Template",
    title: "GitHub Repository Showcase Template",
    desc: "Improving personal branding of project repositories in GitHub.",
    technologies: [
      { name: "HTML5", icon: htmlIcon },
      { name: "CSS", icon: cssIcon },
      { name: "JavaScript", icon: jsIcon },
    ],
    product: "https://catc0de1.github.io/github-portfolio-template/",
    tag: "Website",
  },
];
