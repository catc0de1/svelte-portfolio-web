import htmlIcon from './svg/html.svg';
import cssIcon from './svg/css.svg';
import jsIcon from './svg/js.svg';
import tsIcon from './svg/ts.svg';
import cppIcon from './svg/cpp.svg';
import rustIcon from './svg/rust.svg';
import reactIcon from './svg/react.svg';
import svelteIcon from './svg/svelte.svg';
import angularIcon from './svg/angular.svg';
import astroIcon from './svg/astro.svg';
import tailwindIcon from './svg/tailwind.svg';
import bootstrapIcon from './svg/bootstrap.svg';
import sassIcon from './svg/sass.svg';
import expressIcon from './svg/express.svg';
import adonisIcon from './svg/adonis.svg';
import nestjsIcon from './svg/nestjs.svg';
import mysqlIcon from './svg/mysql.svg';
import sqliteIcon from './svg/sqlite.svg';
import pgIcon from './svg/pg.svg';
import qtIcon from './svg/qt.svg';
import mongodbIcon from './svg/mongodb.svg';
import muiIcon from './svg/mui.svg';
import redisIcon from './svg/redis.svg';
import dockerIcon from './svg/docker.svg';
import linuxIcon from './svg/linux.svg';
import githubIcon from './svg/github.svg';
import jestIcon from './svg/jest.svg';
import swaggerIcon from './svg/swagger.svg';
import postmanIcon from './svg/postman.svg';
import tauriIcon from './svg/tauri.svg';
import reactNativeIcon from './svg/react-native.svg';
import gitIcon from './svg/git.svg';
import nxIcon from './svg/nx.svg';
import graphqlIcon from './svg/graphql.svg';
import meilisearchIcon from './svg/meilisearch.svg';

export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      {
        name: "JavaScript",
        icon: jsIcon,
      },
      {
        name: "TypeScript",
        icon: tsIcon,
      },
      {
        name: "C++",
        icon: cppIcon,
      },
      {
        name: "Rust",
        icon: rustIcon,
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML5",
        icon: htmlIcon,
      },
      {
        name: "React",
        icon: reactIcon,
      },
      {
        name: "Svelte",
        icon: svelteIcon,
      },
      {
        name: "Angular",
        icon: angularIcon,
      },
      {
        name: "Astro",
        icon: astroIcon,
      },
    ],
  },
  {
    title: "UI Styling",
    skills: [
      {
        name: "CSS",
        icon: cssIcon,
      },
      {
        name: "Tailwind CSS",
        icon: tailwindIcon,
      },
      {
        name: "Bootstrap",
        icon: bootstrapIcon,
      },
      {
        name: 'SASS',
        icon: sassIcon,
      },
      {
        name: "Material UI",
        icon: muiIcon,
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Express",
        icon: expressIcon,
      },
      {
        name: "AdonisJS",
        icon: adonisIcon,
      },
      {
        name: "NestJS",
        icon: nestjsIcon,
      },
    ],
  },
  {
    title: "Database",
    skills: [
      {
        name: "MySQL",
        icon: mysqlIcon,
      },
      {
        name: "SQLite",
        icon: sqliteIcon,
      },
      {
        name: "PostgreSQL",
        icon: pgIcon,
      },
      {
        name: "MongoDB",
        icon: mongodbIcon,
      },
      {
        name: "Redis",
        icon: redisIcon,
      },
    ],
  },
  {
    title: "DevOps",
    skills: [
      {
        name: "Docker",
        icon: dockerIcon,
      },
      {
        name: "Linux",
        icon: linuxIcon,
      },
      {
        name: "GitHub",
        icon: githubIcon,
      },
    ],
  },
  {
    title: "Testing",
    skills: [
      {
        name: "Jest",
        icon: jestIcon,
      },
      {
        name: "Swagger",
        icon: swaggerIcon,
      },
      {
        name: "Postman",
        icon: postmanIcon,
      }
    ],
  },
  {
    title: "Other Platforms",
    skills: [
      {
        name: "Tauri",
        icon: tauriIcon,
      },
      {
        name: "React Native",
        icon: reactNativeIcon,
      },
      {
        name: "Qt",
        icon: qtIcon,
      }
    ],
  },
  {
    title: "Dev Tools",
    skills: [
      {
        name: "Git",
        icon: gitIcon,
      },
      {
        name: "NX",
        icon: nxIcon,
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "GraphQL",
        icon: graphqlIcon,
      },
      {
        name: "Meilisearch",
        icon: meilisearchIcon,
      },
    ],
  },
]
