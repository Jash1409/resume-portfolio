
import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "JASH SANGHVI",
  location: "Mumbai, India 400075",
  phone: "+91-9372151772",
  email: "jashsanghvi42@gmail.com",
  linkedin: "linkedin.com/in/jashksanghvi",
  github: "github.com/Jash1409",
  summary: "Aspiring Software Engineer with expertise in full-stack web development, specializing in React.js and modern JavaScript frameworks. Demonstrated ability to build scalable applications with clean code practices and strong problem-solving skills through academic projects and professional internships.",
  education: [
    {
      institution: "K.J. Somaiya Institute of Technology",
      location: "Mumbai, India",
      // Fix: Separate degree and CGPA into their respective properties to satisfy Education interface
      degree: "Bachelor of Technology in Computer Engineering",
      cgpa: "8.5/10",
      expectedDate: "Expected May 2027",
      coursework: ["Data Structures & Algorithms", "Computer Networks", "Operating Systems", "Database Management Systems", "Machine Learning", "Analysis of Algorithms"]
    }
  ],
  skills: [
    { label: "Languages", items: "JavaScript, C, C++, PHP, HTML, CSS" },
    { label: "Frameworks & Libraries", items: "React.js, Next.js, Node.js, Express.js, Tailwind CSS, Bootstrap" },
    { label: "Databases", items: "MongoDB, MySQL, Firebase, Supabase" },
    { label: "Tools & Platforms", items: "Git, GitHub, Figma, AWS Cloud" },
    { label: "Certifications", items: "Stacks and Queues (Coursera), Generative AI (Yanisa Execution)" },
    { label: "Achievements", items: "Won 1st place in 8-hour hackathon, developing innovative solution under time constraints" }
  ],
  experience: [
    {
      role: "React Developer",
      company: "SoulYatri",
      location: "Mumbai, India",
      period: "July 2025 – Dec 2025",
      highlights: [
        "Engineered responsive user interfaces using React.js for multiple web applications, ensuring cross-browser compatibility and mobile responsiveness",
        "Integrated 10+ RESTful APIs to enhance application performance and streamline data flow between frontend and backend services",
        "Collaborated with design and backend teams to develop the company website, improving online presence and user engagement",
        "Conducted comprehensive code reviews and debugging during testing phases, identifying and resolving critical bugs to maintain code quality"
      ]
    }
  ],
  projects: [
    {
      title: "Job Pilot",
      technologies: "React, TypeScript, Tailwind CSS, Firebase",
      highlights: [
        "Built a modern resume-building SaaS platform enabling users to create, edit, and manage professional resumes with real-time preview functionality",
        "Implemented customizable templates with drag-and-drop interface, allowing users to personalize layout and design elements",
        "Integrated secure authentication and user management using Firebase, ensuring data privacy and seamless user experience",
        "Optimized application performance through efficient state management and responsive UI design using TypeScript for type safety"
      ]
    },
    {
      title: "Work from Cafe",
      technologies: "Next.js, React Leaflet, Supabase, M-Lab API",
      highlights: [
        "Developed a crowdsourced platform helping students and freelancers discover productive café workspaces using real-time data",
        "Built an interactive map interface with Next.js and React Leaflet for intuitive browsing and filtering of café locations by amenities",
        "Implemented real-time updates for crowd levels, seating availability, and user check-ins using Supabase backend",
        "Integrated M-Lab tools for accurate in-app internet speed testing, enabling users to share connectivity insights"
      ]
    },
    {
      title: "MockMate",
      technologies: "Node.js, Express.js, MongoDB, OpenAI API, Monaco Editor",
      highlights: [
        "Architected an AI-powered coding interview preparation platform with integrated Monaco code editor for multi-language support",
        "Enabled real-time code execution and automated test case validation with intelligent, context-aware feedback generation",
        "Implemented backend services using Node.js and Express.js, integrating OpenAI API for dynamic question generation logic",
        "Designed responsive frontend with vanilla JavaScript, HTML5, and CSS3 ensuring smooth, interactive user experience"
      ]
    }
  ]
};
