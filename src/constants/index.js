
import Blog from "../assets/projects/blog.png";
import shop from "../assets/projects/shop.png";
import Trip from "../assets/projects/Trip.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1 year of hands-on experience, I have honed my skills in front-end technologies like React , as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
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

export const PROJECTS = [
  {
    title: "Bazario",
    image: shop,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["React", "Node.js", "MongoDB", "Shadcn"],
    link: "https://deploy-shop-1-qyy9.onrender.com/shop/home"
  },
  {
    title: "Smart Voyage",
    image: Trip,
    description:
      "An AI-powered travel planner that creates personalized itineraries, suggests destinations, and optimizes travel plans.",
    technologies: ["React", "Shadcn", "Firebase", "Tailwind"],
    link: "https://travel-one-lime.vercel.app/"
  },
  {
    title: "BlogHaven",
    image: Blog,
    description:
      "A full-stack blog app enables users to create, edit, and manage blog posts with a frontend UI, backend API, and database for storage..",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "https://github.com/Rishivenkatakousik/Blogapp"
  },

];

export const CONTACT = {
  address: "Guntur , Andhra pradesh , 522019 ",
  phoneNo: "+91 9550711886",
  email: "koushikrishi23@gmail.com",
};
