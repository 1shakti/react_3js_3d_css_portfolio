import {
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
    carnot,
    savvy,
    fortytwo,
    flexm,
    nextjs,
    mysql,
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
      title: "Frontend Engineer",
      icon: webdev,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Performance Optimizer",
      icon: webdev,
    }
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Node.js",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Figma",
      icon: figma,
    }
  ];
  
  const experiences = [
    {
      title: "Frontend Development Engineer",
      company_name: "42 Card Solutions Private Limited",
      icon: fortytwo,
      iconBg: "#383E56",
      date: "Sep 2025 - Present",
      points: [
        "Leading frontend development for fintech product modules serving multiple banking partners using React.js, TypeScript, Redux Toolkit, and Material UI.",
        "Led migration from Create React App (CRA) to Vite, reducing local build/startup time by ~70% and improving developer productivity.",
        "Improved frontend performance and Core Web Vitals using route-level code splitting, React.lazy, dynamic imports, memoization, and asset optimization.",
        "Resolved critical frontend security vulnerabilities and implemented secure coding practices across authentication flows and API integrations.",
        "Managed CI/CD workflows using AWS Amplify, streamlining deployment processes and reducing manual release overhead.",
      ],
    },
    {
      title: "Software Development Engineer",
      company_name: "Flexm Pvt Ltd",
      icon: flexm,
      iconBg: "#E6DEDD",
      date: "Sep 2024 - Aug 2025",
      points: [
        "Enhanced enterprise compliance platform using React.js, TypeScript, Redux Toolkit, React Router, and React Hook Form.",
        "Built scalable and reusable UI systems using Material UI and customized design patterns for consistency across modules.",
        "Improved rendering performance using route-level code splitting, memoization, virtualization, debouncing, and progressive rendering.",
        "Conducted frontend performance audits using Lighthouse and WebPageTest, optimizing bundle size, load time, and interaction responsiveness.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Carnot Technologies Private Limited",
      icon: carnot,
      iconBg: "#383E56",
      date: "Aug 2022 - May 2024",
      points: [
        "Developed a multilingual tractor marketplace platform enabling dealers across multiple states to manage inventory listings.",
        "Built a real-time bidding platform for NBFC-managed tractor inventory actively used by 50+ dealers for auction participation.",
        "Built a server-driven UI module allowing frontend sections to be dynamically rendered through backend JSON configurations.",
        "Optimized API handling using TanStack Query for caching, background synchronization, and efficient server-state management.",
      ],
    },
    {
      title: "Junior Software Developer",
      company_name: "Savvy Business Solutions Pvt. Ltd",
      icon: savvy,
      iconBg: "#E6DEDD",
      date: "Feb 2020 - Aug 2022",
      points: [
        "Developed responsive business web applications using React.js, JavaScript, PHP, MySQL, Material UI, and Bootstrap.",
        "Built a ticketing and registration management system with role-based access controls for operational workflow management.",
        "Integrated E-invoice APIs for automated IRN generation and implemented UPI-based payment processing workflows.",
        "Developed a contract lifecycle management system with automated expiry reminders, improving compliance tracking.",
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