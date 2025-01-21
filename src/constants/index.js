import portfolioproject from "../assets/projects/portfolioproject.jpg";
import chatproject from "../assets/projects/chatproject.jpg";

export const HERO_CONTENT = `Scalable Web Developer | DSA enthusiast`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly websites. , I have worked with a variety of technologies, including React, Next.js, Node.js, Express, SocketIO, Firebase, MySQL, Postgres, Websocket, AWS, Razorpay, Prisma, Docker and MongoDB. `;

export const EXPERIENCES = [
  {
    year: "2025 - Present",
    role: "Digital Transofrmation",
    company: "Cloudcraftz",
    description: `Data extraction`,
    technologies: ["LLM", "Prompt Engineering", "Python", "AWS"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];
export const CODING = [
  {
    site: "Codeforces",
    rating: "Specialist",
    description: `Solved more than 200 problems and currently 1400 rated`,
  },
  {
    site: "Leetcode",
    rating: "Knight",
    description: `Solved more than 800 problems and currently 2006 rated`,
  },
  {
    site: "Others",
    rating: "",
    description: `Strong grasp over Operating System, Database, Computer Network concepts`,
  }
];

export const PROJECTS = [
  {
    title: "Educraft",
    image: portfolioproject,
    link:"https://github.com/Subham1307/EduCraft",
    description:
      "A course website where owner can publish their courses which includes video and notes which users can purchase",
    technologies: ["NextJS", "ShadCN","Tailwind","Typescript", "Postgres", "AWS-s3", "Razorpay","Prisma"],
  },
  {
    title: "RealTime Chat Application",
    image: chatproject,
    link:"https://github.com/Subham1307/Chat-App",
    description:
      "A real-time chat web app that enables instant messaging, group chats, and file sharing with seamless user experience and robust security features and user authentication",
    technologies: ["React", "Tailwind", "Express", "SocketIO", "MongoDB", "Firebase"],
  },
  {
    title: "Soundscape",
    image: chatproject,
    link:"https://github.com/Subham1307/Soundscape",
    description:
      "Collaborative music platform, create space, share with others and build a interactive music streaming platform",
    technologies: ["NextJS", "ShadCN UI", "Tailwind", "Typescript", "Websocket", "Postgres", "Prisma", "Acternity UI", "NextAuth"],
  },
  {
    title: "Flight Booking Website",
    image: chatproject,
    link:"https://github.com/nityasundar2743/Flight-Booking",
    description:
      "End to end flight booking website, with realtime fligh check from source to destination, seat selection and ticket booking",
    technologies: ["NextJS", "Tailwind", "Typescript", "MySQL", "SpringBoot", "RapidAPI"],
  },

  
  
];

export const CONTACT = {
  address: "Jadavpur, Kolkata 700032 ",
  phoneNo: "+91 ********** ",
  email: "******@gmail.com",
};
