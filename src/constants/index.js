import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    java,
    c,
    python,
    androidstudio,
    vscode,
    mysql,
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
    oasis,
    dsmnru,
    technex,
    scical,
    portfolio,
    voting,
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
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Android App Developer",
      icon: creator,
    },
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
      name: "AndroidStudio",
      icon: androidstudio,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "VSCode",
      icon: vscode,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "MySQL",
      icon: mysql,
    },
  ];
  
  const experiences = [
    {
      title: "Java Developer",
      company_name: "Oasis Infobytes",
      icon: oasis,
      iconBg: "#383E56",
      date: "May 2023 - July 2023",
      points: [
        "Developing and maintaining Java applications using Java awt and other related technologies.",
        "Implementing responsive design and ensuring cross-platform compatibility.",
        "Participating in projects and gaining constructive feedback from other developers.",
      ],
    },
    {
      title: "Android App Developer",
      company_name: "Technex",
      icon: technex,
      iconBg: "#E6DEDD",
      date: "December 2021 - January 2022",
      points: [
        "Developing and maintaining Android applications using Android Studio and other related technologies.",
        "Implementing responsive design and ensuring cross-device compatibility.",
        "Participating in projects and gaining constructive feedback from other developers.",
      ],
    },
    {
      title: "Member of Management Committee",
      company_name: "IET DSMNRU Agnito'22 ",
      icon: dsmnru,
      iconBg: "#383E56",
      date: "December 2022",
      points: [
        "Successfully organized and managed the event 'Agnito' at Atal Auditorium",
        "Collaborating with committees including discipline, hospitality, and other members to make it successful.",
        "Gathering the group of students and collegues to stand together as one.",
      ],
    },
    {
      title: "",
      company_name: "Eager to attain more experiences in coming future",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "",
      points: [

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
      name: "Personal Portfolio",
      description:
        "A professional website that provides information about my experience, skills and projects, what services I may offer, and how to contact me.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Nandan-Bhardwaj/3D-Portfolio",
    },
    {
      name: "Voting System",
      description:
        "Application that allows you to choose number, name and image of candidate including NOTA and vote them for a particular post.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "swing",
          color: "green-text-gradient",
        },
        {
          name: "awt",
          color: "pink-text-gradient",
        },
      ],
      image: voting,
      source_code_link: "https://github.com/Nandan-Bhardwaj/Voting_System",
    },
    {
      name: "Advanced Calculator",
      description:
        "The advanced calculator project offers features, including a scientific calculator, unit converter, and standard calculator with SQLite as database to retrieve history.",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "xml",
          color: "green-text-gradient",
        },
        {
          name: "SQLite",
          color: "pink-text-gradient",
        },
      ],
      image: scical,
      source_code_link: "https://github.com/Nandan-Bhardwaj/AdvancedMultiCalculator",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
