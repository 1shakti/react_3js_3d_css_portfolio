import {
    mobile,
    backend,
    creator,
    webdev,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    carnot,
    savvy,
    nextjs,
    styledcomponents,
    airtable,
    appsmith,
    mysql,
    php,
    python,
    bootstrap,
    netflixHome,
    orderimages,
    speedtypinggame,
    pacmangame,
    snakegame,
    dicerollergame,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: webdev,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Backend Developer",
      icon: webdev,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Appsmith",
      icon: appsmith,
    },
    {
      name: "Styeld -Components",
      icon: styledcomponents,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "Airtable",
      icon: airtable,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Mysql",
      icon: mysql,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Carnot Technologies Private Limited",
      icon: carnot,
      iconBg: "#383E56",
      date: "Aug 2022 - Present",
      points: [
        "Worked on several projects using multiple technologies like React Js, Javascript, TypeScript and low-code platforms Appsmith, Airtable",
        "Developed a multi-language platform for showcasing used tractor inventory and dealer profiles, incorporating lead generation features. Created dynamic dealer profile pages within Digital Dukaan, enabling dealers to showcase tractor videos and generate leads.",
        "Built an auction platform for used tractors where dealers could bid",
        "Implemented a system for adding sections or modules without requiring app releases.",
        "Developed and implemented a server-driven module enabling dynamic additions or modifications from the backend utilizing JSON.",
        "Collaborated closely with cross-functional teams to gather requirements, design user interfaces, and implement features that align with business objectives."
      ],
    },
    {
      title: "Full(PHP and React) stack Developer",
      company_name: "savvy business solutions private limited",
      icon: savvy,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - Aug 2022",
      points: [
        "Worked on several projects using multiple technologies like React Js, Javascript, PHP, MySQL, Material UI,",
        "Developed a ticketing system to manage tickets, registrations and provide authority-wise access.",
        "Implemented a system for generating IRN using E-invoice API and accepting payments via UPI code. ",
        "Designed a contract management system to handle contracts for parties including sending reminder emails before 60 days of contract expiry",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NetFlix",
      description: "A react clone app built using React.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "fuse.js",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "pink-text-gradient",
        },
        {
          name: "styled-components",
          color: "orange-text-gradient",
        },
      ],
      image: netflixHome,
      source_code_link: "https://github.com/1shakti/practicecode/tree/main/netflix",
    },
    {
      name: "Buy Images",
      description: "A react app to order some random images.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "api-call",
          color: "green-text-gradient",
        },
        {
          name: "custom-hooks",
          color: "pink-text-gradient",
        },
        {
          name: "react-router",
          color: "white-text-gradient",
        }
      ],
      image: orderimages,
      source_code_link: "https://github.com/1shakti/practicecode/tree/main/reactbasic/buyimage",
    },
    {
      name: "Speedtyping Game",
      description: "A simple speedtyping game built using react.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
      ],
      image: speedtypinggame,
      source_code_link: "https://github.com/1shakti/practicecode/tree/main/speedtyping",
    },
    {
      name: "Pacman Game",
      description: "Building a simple pacman game.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript DOM",
          color: "pink-text-gradient",
        },
        {
          name: "event listeners",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "purple-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        }
      ],
      image: pacmangame,
      source_code_link: "https://github.com/1shakti/practicecode/tree/main/js_concepts/pacman",
    },
    {
      name: "Snake Game",
      description: "A simple snake game.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript DOM",
          color: "pink-text-gradient",
        },
        {
          name: "event listeners",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "purple-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        }
      ],
      image: snakegame,
      source_code_link: "https://github.com/1shakti/practicecode/tree/main/css_jsfundamentals/Snake_Game",
    },
    {
      name: "Dice Roller Game",
      description: "Again a simple roller dice game.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript DOM",
          color: "pink-text-gradient",
        },
        {
          name: "event listeners",
          color: "green-text-gradient",
        },
        {
          name: "html",
          color: "purple-text-gradient",
        },
        {
          name: "css",
          color: "orange-text-gradient",
        }
      ],
      image: dicerollergame,
      source_code_link: "https://github.com/1shakti/practicecode/tree/main/css_jsfundamentals/Dice_Game",
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects };