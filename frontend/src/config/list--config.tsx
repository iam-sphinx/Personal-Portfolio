import { FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { ReactNode } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const navList = [
  {
    title: "Home",
    link: "/",
    target: "_self",
  },
  {
    title: "Projects",
    link: "/projects",
    target: "_self",
  },
  {
    title: "About",
    link: "/about",
    target: "_self",
  },
  {
    title: "Contact",
    link: "/contact",
    target: "_self",
  },
  {
    title: "FAQ",
    link: "/faq",
    target: "_self",
  },
];

// FAQ Question and answers
export const FAQList = [
  {
    question: "What services do you offer as a frontend developer?",
    answer:
      "As a frontend developer, I specialize in creating engaging and user-friendly websites and web applications. I focus on crafting visually appealing designs and implementing interactive features to enhance the user experience.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "I am proficient in HTML, CSS, and JavaScript, the core technologies of frontend development. Additionally, I have experience with popular frontend frameworks like React and Angular, as well as CSS preprocessors like Sass. & Tailwind CSS",
  },
  {
    question: "How do you ensure that my website is mobile-friendly?",
    answer:
      "I prioritize responsive web design principles to ensure that your website looks and functions seamlessly across all devices, including smartphones, tablets, and desktops. This approach guarantees a consistent user experience regardless of the device being used.",
  },
  {
    question:
      "Can you integrate animations and interactive elements into my website?",
    answer:
      "Absolutely! I love incorporating animations and interactive elements to make websites more engaging and dynamic. Whether it's subtle hover effects, smooth transitions, or interactive sliders, I can bring your website to life.",
  },
  {
    question:
      "Do you have experience with website optimization for speed and performance?",
    answer:
      "Yes, optimizing website performance is a crucial aspect of my work. I utilize techniques such as minification, lazy loading, and image optimization to ensure that your website loads quickly and delivers a seamless user experience.",
  },
  {
    question: "How do you link browser compatibility issues?",
    answer:
      "I thoroughly test websites across multiple browsers and devices to ensure compatibility. Additionally, I utilize modern web development practices and tools to minimize compatibility issues and provide a consistent experience for all users.",
  },
  {
    question:
      "Can you assist with website maintenance and updates after the initial development?",
    answer:
      "Absolutely, I offer ongoing support and maintenance services to ensure that your website remains up-to-date and secure. Whether it's fixing bugs, adding new features, or updating content, I'm here to help you keep your website running smoothly.",
  },
  {
    question:
      "What is your approach to user interface (UI) and user experience (UX) design?",
    answer:
      "I believe in creating intuitive and user-friendly interfaces that prioritize usability and accessibility. I conduct user research and usability testing to inform my design decisions and ensure that the final product meets the needs of your target audience.",
  },
  {
    question: "How do you link website security and data privacy?",
    answer:
      "Security is paramount, and I implement best practices to safeguard your website against common threats such as cross-site scripting (XSS) and SQL injection. Additionally, I adhere to data privacy regulations and use encryption and secure protocols to protect sensitive information.",
  },
  {
    question:
      "Can you assist with website optimization for search engines (SEO)?",
    answer:
      "Yes, I implement SEO best practices during development to optimize your website's visibility and ranking in search engine results. This includes optimizing meta tags, improving site speed, and ensuring proper HTML structure for search engine crawlers.",
  },
];

// SOCIAL LINKS
export const socialLinks = [
  {
    title: "Instagram",
    link: "https://www.instagram.com/kandarp_018/",
    element: (<FaInstagram size={24} />) as ReactNode,
    target: "_blank",
  },
  {
    title: "Twitter",
    link: "https://twitter.com/imsphinx_18",
    element: (<FaSquareXTwitter size={24} />) as ReactNode,
    target: "_blank",
  },
  {
    title: "Linked In",
    link: "https://www.linkedin.com/in/kandarp-mishra-336461244/",
    element: (<FaLinkedin size={24} />) as ReactNode,
    target: "_blank",
  },
  {
    title: "Github",
    link: "https://github.com/iam-sphinx",
    element: (<FaGithub size={24} />) as ReactNode,
    target: "_blank",
  },
];

// Contact Info
export const contactInfo = [
  {
    title: "kandarp1803@gmail.com",
    link: "mailto:kandarp1803@gmail.com",
    target: "_blank",
    element: (<MdOutlineEmail size={24} />) as ReactNode,
  },
  {
    title: "+91 8840 811 282",
    element: (<FaWhatsapp size={24} />) as ReactNode,
  },
];

// skills
export const skillList = [
  {
    title: "HTML",
    imgSrc: "/skills/HTML.png",
  },
  {
    title: "CSS",
    imgSrc: "/skills/CSS.png",
  },
  {
    title: "JavaScript",
    imgSrc: "/skills/javascript.png",
  },
  {
    title: "TypeScript",
    imgSrc: "/skills/typescript.png",
  },
  {
    title: "React.js",
    imgSrc: "/skills/reactJs.png",
  },
  {
    title: "Next.js",
    imgSrc: "/skills/nextJs.png",
  },
  {
    title: "Tailwind CSS",
    imgSrc: "/skills/tailwind.png",
  },
  {
    title: "SCSS",
    imgSrc: "/skills/SASS.png",
  },
  {
    title: "Redux",
    imgSrc: "/skills/redux.png",
  },
  {
    title: "React Query",
    imgSrc: "/skills/query.png",
  },
];

// Experience Data

export const experienceList = [
  {
    jobTitle: "Software Engineer Intern",
    company: "Firebond",
    tenure: "Apr-2023 - Jul-2023",
    techStack:
      "Next.js, Redux, Tailwind CSS, Supabase, REST API, figma, Git &amp; Github",
    webUrl: "https://www.firebond.xyz/",
    description: [
      "During my tenure at Firebond, I contributed to the development of a cutting-edge web3-based community gaming platform. Within this role, I focused on crafting an immersive user experience where individuals could seamlessly create, manage, and complete tasks, thereby earning in-game currency. My responsibilities encompassed the creation of numerous responsive, pixel-perfect components and pages for the website",
      "Integral to the project's success, I adeptly integrated various REST APIs from the backend, ensuring smooth communication between the frontend and backend systems. Furthermore, I implemented Redux for efficient global state management, enhancing the robustness and scalability of the application",
      "In adherence to best practices, I meticulously followed the Model-View-Controller (MVC) architecture, optimizing both the scalability and readability of the codebase. Embracing agile workflows, I collaborated closely with cross-functional teams, facilitating rapid iteration and continuous improvement throughout the development lifecycle.",
      "Through these efforts, I not only contributed to the realization of a dynamic gaming platform but also played a pivotal role in elevating Firebond's technological capabilities within the web3 landscape.",
    ],
  },
];

// projects
export const projectList = [
  {
    githubLink: "https://github.com/iam-sphinx/Donut-A-Blog-website",
    liveLink: "https://donut-jet.vercel.app/",
    title: "Donut - Blog website",
    techStack: [
      "MERN",
      "Tailwind CSS",
      "JavaScript",
      "JWT",
      "Bcrypt",
      "Cloudinary",
      "Multer",
    ],
    imgSrc: "/projects/1.png",
    desc: "Donut a Blog website where you can create update manages blog posts. And simply follow other creators.",
  },
  {
    githubLink: "https://github.com/iam-sphinx/Anime-Vault",
    liveLink: "https://anime-vault-tau-one.vercel.app/",
    title: "Anime Vault",
    techStack: [
      "Next.js",
      "tailwind CSS",
      "Rest APIs",
      "TypeScript",
      "Framer Motion",
      "React Intersection Observer",
    ],
    imgSrc: "/projects/2.png",
    desc: "Anime Vault is a anime website which uses shikimori free API to display anime, infinite scrolling and reveal animation",
  },
  {
    githubLink: "https://github.com/iam-sphinx/casecobra",
    liveLink: "https://casecobra-rho.vercel.app/",
    title: "Case Cobra",
    techStack: [
      "Next.js",
      "tailwind CSS",
      "Uploadthing",
      "React-Dropzone",
      "Headless-UI",
      "Tanstack/React-Query",
      "Stripe",
      "Shadcn-ui"
    ],
    imgSrc: "/projects/3.png",
    desc: "Case Cobra is a platform where you can create and buy custom phone covers",
  },
];
