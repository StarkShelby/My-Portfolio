export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Strong client collaboration drives my work.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[80vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 ",
    imgClassName: "",
    titleClassName: "justify-start items-start",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Driven by code, powered by curiosity.",
    description: "",
    className: "hidden md:block lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: " justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Minimal code, maximal impact.",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName:
      "justify-start items-start md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
    exImage: "/git.svg",
  },
  {
    id: 6,
    title: "Let's start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Hotwheels-Collection",
    des: "🚗 Hot Wheels Collection is a web app to track, organize, and showcase your favorite Hot Wheels cars. And many more",
    img: "/hotwheels copy.png",
    iconLists: [
      "/html.png",
      "/tail.svg",
      "/js.png",
      "/mongodb.png",
      "express.png",
    ],
    link: "https://hotwheelscollection.vercel.app/index.html",
  },
  {
    id: 2,
    title: "ArtifexAI",
    des: "ArtifexAI is a web app that uses AI to generate images from text prompts.",
    img: "/artifex.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.png",
      "/mongodb.png",
      "express.png",
    ],
    link: "https://artifex-ai-fawn.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio Website",
    des: "Everyone needs a way to showcase their work. My portfolio website is a great place to do just that.",
    img: "/port.jpg",
    iconLists: ["/re.svg", "/tail.svg", "/html.png", , "/js.png"],
    link: "https://portfolio-drab-six-17.vercel.app/",
  },
  {
    id: 4,
    title: "Recipe Saver App",
    des: "Made the recipe saver app using SwiftUI for the user to add and look at..",
    img: "/reci.png",
    iconLists: ["/apple.png", "/swift.png"],
    link: "https://github.com/StarkShelby/RecipeApp-iOS-",
  },
];

export const testimonials = [
  {
    quote:
      "Sharique is incredibly talented, dedicated, and easy to work with. His creativity and problem-solving skills always shine through in everything he does. I genuinely enjoyed collaborating with him and was impressed by his professionalism and commitment.",
    name: "Ayush",
    title: "Video Editor",
  },
  {
    quote:
      "Has a sharp eye for design and an incredible knack for creating logos that truly capture the essence of a brand. The attention to detail and creative vision made the process seamless and the result outstanding. Highly recommended for anyone looking for professional and impactful logo design.",
    name: "Clara",
    title: "Logo Designer",
  },
  {
    quote:
      "Collaborating with Sharique was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. His enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Shaarique is the ideal partner.",
    name: "Vishal MEghani",
    title: "Director of AlphaStream Technologies",
  },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Denis",
  //   title: "Director of AlphaStream Technologies",
  // },
  // {
  //   quote:
  //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
  //   name: "Aeun",
  //   title: "Director of AlphaStream Technologies",
  // },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "React",
    img: "/re.svg",
    nameImg: "/react.svg",
  },
  {
    id: 4,
    name: "NEXT",
    img: "/next.svg",
    nameImg: "/nextname.svg",
  },
  {
    id: 5,
    name: "Github",
    img: "/git.svg",
    nameImg: "/gitname.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/StarkShelby",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "https://x.com/ShariqueStark",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/sharique-rahmani-63b7182a3/",
  },
];
