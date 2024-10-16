import ecomproject from "../assets/projects/ecomproject.jpg";
import portfolioproject from "../assets/projects/portfolioproject.jpg";
import chatproject from "../assets/projects/chatproject.jpg";

export const HERO_CONTENT = `I am a passionate Web developer and Data Structure & Algorithm enthusiast with a strong understanding of DBMS and OOPs concepts. As a freelancer, I specialize in crafting scalable web applications using front-end technologies like React and Next.js, and back-end technologies such as Node.js, MySQL, and MongoDB. My goal is to leverage my skills to deliver innovative solutions that enhance business growth and provide exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly websites. Currently in my final year of Computer Science and Engineering at Jadavpur University , I have worked with a variety of technologies, including React, Next.js, Node.js, Express, SocketIO, Firebase, MySQL, Prisma and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

// export const EXPERIENCES = [
//   {
//     year: "2023 - Present",
//     role: "Senior Full Stack Developer",
//     company: "Google Inc.",
//     description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
//     technologies: ["Javascript", "React.js", "Next.js", "MongoDB"],
//   },
//   {
//     year: "2022 - 2023",
//     role: "Frontend Developer",
//     company: "Adobe",
//     description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
//     technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
//   },
//   {
//     year: "2021 - 2022",
//     role: "Full Stack Developer",
//     company: "Facebook",
//     description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
//     technologies: ["Python", "Svelte", "Three.js", "Postgres"],
//   },
//   {
//     year: "2020 - 2021",
//     role: "Software Engineer",
//     company: "Paypal",
//     description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
//     technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
//   },
// ];
export const CODING = [
  {
    site: "Codeforces",
    rating: "Specialist",
    description: `Solved more than 200 problems and currently 1400 rated`,
  },
  {
    site: "Leetcode",
    rating: "Knight",
    description: `Solved more than 500 problems and currently 2006 rated`,
  },
  {
    site: "Others",
    rating: "",
    description: `Strong grasp over Data Structure & Algorithm, OOPS, DBMS, Computer Network concepts`,
  }
];

export const PROJECTS = [
  {
    title: "Smart Health Monitoring System",
    image: chatproject,
    link:"https://github.com/null-Character7/Chat-App",
    description:
      "Healthcare app for patient and doctor to track appointment and prescription and AI based healthcare recomendation",
    technologies: ["NextJS", "ShadCN UI", "Tailwind", "Express", "ML", "Postgres", "Prisma","Redis"],
  },
  {
    title: "RealTime Chat Application",
    image: chatproject,
    link:"https://github.com/null-Character7/Chat-App",
    description:
      "A real-time chat web app that enables instant messaging, group chats, and file sharing with seamless user experience and robust security features and user authentication",
    technologies: ["React", "ShadCN UI", "Tailwind", "Express", "SocketIO", "MongoDB", "Firebase"],
  },
  {
    title: "Soundscape",
    image: chatproject,
    link:"https://github.com/null-Character7/Chat-App",
    description:
      "Collaborative music platform, create space, share with others and build a interactive music streaming platform",
    technologies: ["NextJS", "ShadCN UI", "Tailwind", "Express", "Websocket", "Postgres", "Prisma", "Acternity UI", "OAuth"],
  },
  {
    title: "Flight Booking Website",
    image: chatproject,
    link:"https://github.com/null-Character7/Chat-App",
    description:
      "End to end flight booking website, with realtime fligh check from source to destination, seat selection and ticket booking",
    technologies: ["NextJS", "Tailwind", "Express", "MySQL", "SpringBoot", "RapidAPI"],
  },
  {
    title: "Portfolio Website",
    image: portfolioproject,
    link:"https://github.com/null-Character7/Portfolio",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Bootstrap", "Tailwind", "Framer Motion"],
  },
  
];

export const CONTACT = {
  address: "Jadavpur, Kolkata 700032 ",
  phoneNo: "+91 9474927459 ",
  email: "subhamdey1307@gmail.com",
};
