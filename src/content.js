// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"

import angularIcon from "./images/skills/angular.png"
import denoIcon from "./images/skills/deno.png"
import gitIcon from "./images/skills/git.png"
import javaIcon from "./images/skills/java.png"
import javascriptIcon from "./images/skills/javascript.png"
import mongodbIcon from "./images/skills/mongodb.png"
import nodejsIcon from "./images/skills/nodejs.png"
import oracleIcon from "./images/skills/oracle.png"
import springIcon from "./images/skills/spring.png"

import avatarIcon from "./images/avatar.png"
import rogerAboutImg from "./images/roger.png"

import skimmingWorkImg from "./images/work/skimming.png"
import splitmateWorkImg from "./images/work/splitmate.png"
import emptyWorkImg from "./images/work/empty.png"
import switcherapiWorkImg from "./images/work/switcherapi.png"
import trackerforceWorkImg from "./images/work/trackerforce.png"
import githubWorkImg from "./images/work/github.png"

export default {
  //   Header Details ---------------------
  name: "Roger",
  avatarImg: avatarIcon,
  headerTagline: [
    "Founder,",
    "Full-stack Developer",
    "and Music Producer"
  ],

  //   Header Paragraph
  headerParagraph:
    "Friendly, enthusiastic, and upbeat Full-stack Developer with more than 10 years of experience in the field, a Project Founder, and self-taught Music Composer & Producer.",

  //Contact Email
  contactEmail: "roger.petruki@gmail.com",

  // Work Section ------------------------
  projects: [
    {
      id: 1,
      title: "Switcher API",
      para:
        "Not only an API that has a goal of providing a toggling mechanism, but a platform which can offer a wide range of customization and control regarding software behavior.",
      imageSrc: switcherapiWorkImg,
      url: "https://switcherapi.github.io/switcher-management/",
    },
    {
      id: 2,
      title: "Trackerforce",
      para:
        "A CXM platform that componentize your business processes. Trackerforce is aimed to provide tracking capabilities for both business and customers.",
      imageSrc: trackerforceWorkImg,
      url: "https://github.com/trackerforce",
    },
    {
      id: 3,
      title: "SplitMATE",
      para:
        "Split whatever you want with SplitMATE, create voting polls, check items & tasks, estimate individual costs, everything in real-time, and of course, do not let the fun goes away.",
      imageSrc: splitmateWorkImg,
      url: "https://github.com/trackerforce/splitmate-android-app",
    },
    {
      id: 4,
      title: "Skimming Deno Library",
      para:
        "Skimming is a data fetcher based on Deno runtime for JavaScript and TypeScript. The idea is to provide a simple and efficient search engine module.",
      imageSrc: skimmingWorkImg,
      url: "https://deno.land/x/skimming@v1.0.7",
    },
    {
      id: 5,
      title: "EMPTY EP",
      para:
        "2018 – Released an EP called “Empty” under my label ℗ Rogerio Petruki. Available on all mainstream music platforms.",
      imageSrc: emptyWorkImg,
      url: "https://rogeriopetruki.bandcamp.com/album/empty-revisited",
    },
    {
      id: 6,
      title: "Other Projects",
      para:
        "From granular APIs to Full-stack applications. Find out more about my recent projects and experiments on my GitHub page.",
      imageSrc: githubWorkImg,
      url: "https://github.com/petruki?tab=repositories",
    }

  ],

  // About Secton --------------
  aboutParaOne:
    "I dived into the coding world just before I entered the College. " + 
    "My first contact with programming was customizing and developing game mods which stimulated my sense of curiosity to learn more.",
  aboutParaTwo:
    "Fast-forwarding to my first job as a Java Developer, I was challenged to write a compiler using Java CC. " +
    "The funny thing is that in terms of coding complexity, my first hands-on project is still in my top 5 challenging projects that I have ever worked with.",
  aboutParaThree:
    "After gaining enough experience, I've assumed more complex projects on which programming was not the only variable. " + 
    "As a Senior Architect, I was able to use and learn several other skills to deliver the best solution through a concise roadmap that would lead to results.",
  aboutParaFour:
    "Throughout this exciting journey as a Software Engineer, I also have other interests that unconsciously go hand in hand, such as Music Production. " +
    "Being able to produce such materials has to do with translating tons of information into analog sound waves. " + 
    "And to be honest, I would have to create a new portfolio to just talk about this. =D",
  aboutImage: rogerAboutImg,

  // Skills Section ---------------

  skills: [
    {
      id: 1,
      img: javaIcon,
      para:
        "Started using Java from the beginning of my career. I have developed software of all kind, " +
        "from desktop, web, mobile and webservices, to compiler, APIs, libraries and much more.",
    },
    {
      id: 2,
      img: javascriptIcon,
      para:
        "JavaScript is present on my stack since I started working as Full-stack developer. " +
        "Never alone, JS is the very cornerstone of almost every recent framework I've learned so far.",
    },
    {
      id: 3,
      img: denoIcon,
      para:
        "Skimming Module was my first contribution to Deno project. " +
        "It allowed me to taste developing backend applications written in TypeScript and tons of out-of-the-box features " +
        "that would not be trivial while using other technologies.",
    },
    {
      id: 4,
      img: springIcon,
      para:
        "Started using Spring framework since v3 and still incorporating it to my recent projects. " +
        "Switcher AC is project that uses Spring Boot v2.3.7 and Spring Security v5.3 for handling all account profiler over the Switcher API platform. " +
        "Spring framework was also chosen to orchestrate a multi-tenancy implementation on Trackerforce project.",
    },
    {
      id: 5,
      img: angularIcon,
      para:
        "For my front-end development framework of choice, Angular 2 was used to build Switcher Management, " +
        "a project that interfaces with Switcher API and provides a simple yet robust UI. " +
        "Recently, I have been using React as well as part of my front-end stack.",
    },
    {
      id: 6,
      img: nodejsIcon,
      para:
        "Nodejs has been the chosen runtime for some of my recent open-source projects. " +
        "I have written APIs, web crawlers and libraries in conjunction with several different frameworks. " +
        "Just to mention a few, express, express-graphql, socket.io, cheerio, supertest, jest, sinon, mocha, and much more.",
    },
    {
      id: 7,
      img: oracleIcon,
      para:
        "Hands-on experience working for 8 years with Oracle solutions. " +
        "Developed an enterprise solution using Oracle 11g as DBMS, Oracle Coherence for in-memory data caching and Oracle RTD as our machine learning component.",
    },
    {
      id: 8,
      img: mongodbIcon,
      para:
        "When the goal is to develop a concise and granular APIs which scales horizontally, " +
        "MongoDB is my NoSQL DB of choice. Using it to produce aggregation analysis or " +
        "even using multi-tenancy approach to create independent data store mechanism over the same platform were the reason MongoDB shined.",
    },
    {
      id: 9,
      img: gitIcon,
      para:
        "Not only a version controller, but part of the process of creating software which each one of them might have different approaches. " +
        "As we have worked mostly with open-source projects, it requires a high level of code verification and " +
        "quality gates over the version control that led us to use Git Fork workflow.",
    }
  ],

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",

  //   Contact Section --------------
  contactSubHeading: "Let's connect!",
  social: [
    { 
      img: linkedinIcon, 
      url: "https://www.linkedin.com/in/rogerit" 
    },
    {
      img: githubIcon,
      url: "https://github.com/petruki",
    }
  ]
  
}
