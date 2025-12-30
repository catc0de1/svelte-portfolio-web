import projectDirectoryListingApp from './images/project-directory-listing-app.webp';
import projectPersonalWeb from './images/project-personal-web.webp';
import projectPersonalBlog from './images/project-personal-blog.webp';
import projectSmtpApi from './images/project-smtp-api.webp';
import projectBisaEnggress from './images/project-bisa-enggress.webp';
import projectDiaryDesktopApp from './images/project-diary-desktop-app.webp';

import certifAdonis from './images/certif-adonisjs.webp';
import certifNestjs from './images/certif-nestjs.webp';
import certifExpress from './images/certif-expressjs.webp';

import jsIcon from './svg/js.svg';
import tsIcon from './svg/ts.svg';
import ejsIcon from './svg/ejs.svg';
import bootstrapIcon from './svg/bootstrap.svg';
import expressIcon from './svg/express.svg';
import mongodbIcon from './svg/mongodb.svg';
import adonisIcon from './svg/adonis.svg';
import mysqlIcon from './svg/mysql.svg';
import nestjsIcon from './svg/nestjs.svg';
import pgIcon from './svg/pg.svg';
import redisIcon from './svg/redis.svg';
import typeormIcon from './svg/typeorm.svg';
import svelteIcon from './svg/svelte.svg';
import tailwindIcon from './svg/tailwind.svg';
import hbsIcon from './svg/hbs.svg';
import astroIcon from './svg/astro.svg';
import reactNativeIcon from './svg/react-native.svg';
import rustIcon from './svg/rust.svg';
import tauriIcon from './svg/tauri.svg';
import reactIcon from './svg/react.svg';
import sqliteIcon from './svg/sqlite.svg';

export interface ProjectTech {
  name: string;
  icon: string;
}

export interface Projects {
  url: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  desc: string;
  technologies: ProjectTech[];
  build: string;
}

export const projects: Projects[] = [
  {
    url: "https://github.com/catc0de1/express-directory-listing-app",
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
    build: "",
  },
  {
    url: "https://github.com/catc0de1/adonis-forum-api",
    imgSrc: certifAdonis,
    imgAlt: "Certificate of completion AdonisJS study case course by Codepolitan",
    title: "Forum API",
    desc: "RESTful API server using AdonisJS for discussion forum application. Supports authentication, posting, and forum data management features efficiently.",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "AdonisJS", icon: adonisIcon },
      { name: "MySQL", icon: mysqlIcon },
    ],
    build: "",
  },
  {
    url: "https://github.com/catc0de1/nestjs-myex-api",
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
    build: "",
  },
  {
    url: "https://github.com/catc0de1/svelte-portfolio-web",
    imgSrc: projectPersonalWeb,
    imgAlt: "Hero section of personal portfolio website",
    title: "Personal Portfolio Website",
    desc: "Personal portfolio website showcasing my projects and skills as a developer. Built with Svelte for performance and a modern website.",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "Svelte", icon: svelteIcon },
      { name: "Tailwind CSS", icon: tailwindIcon },
    ],
    build: "https://iyan-zuli-armanda.netlify.app",
  },
  {
    url: "https://github.com/catc0de1/express-smtp-api",
    imgSrc: projectSmtpApi,
    imgAlt: "Preview of Gmail template from SMTP",
    title: "SMTP API Server",
    desc: "Simple main transfer protocol API server with Express.js to send gmail.",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "Express", icon: expressIcon },
      { name: "Handlebars", icon: hbsIcon },
    ],
    build: "https://iyan-zuli-armanda.netlify.app",
  },
  {
    url: "https://github.com/catc0de1/astro-zblogzone-app",
    imgSrc: projectPersonalBlog,
    imgAlt: "Homepage of ZBlog Zone",
    title: "Personal Blogsite",
    desc: "Simple and fast SSG dynamic blogs made with astro and markdown as content. The blogs show content for developers from me",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "Astro", icon: astroIcon },
      { name: "Bootstrap", icon: bootstrapIcon },
    ],
    build: "https://iyan-zuli-armanda.netlify.app",
  },
  {
    url: "https://github.com/catc0de1/react-native-enggress-mobile",
    imgSrc: projectBisaEnggress,
    imgAlt: "Two UI of Bisa Enggress on Android, hompage on the left and chatting with bot on the right",
    title: "Bisa Enggress",
    desc: "Android application for learning English with interactive chatbot. Made with React Native Manually without Expo.",
    technologies: [
      { name: "TypeScript", icon: tsIcon },
      { name: "React Native", icon: reactNativeIcon },
    ],
    build: "",
  },
  {
    url: "https://github.com/catc0de1/tauri-mydiary-desktop",
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
    build: "",
  }
];
