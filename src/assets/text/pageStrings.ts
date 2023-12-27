import imageUrls from "../imgs/imageURLs";

const pageStrings = {
  header: "sarah reimann",
  education_subheader: "education",
  education: [
    {
      school: "Epicodus",
      dates: "March 2023 - September 2023",
      degree: "Certificate in Full Stack Development",
      location: "Portland, OR"
    },
    {
      school: "Colorado College",
      dates: "September 2015 - May 2019",
      degree: "Bachelor of Arts in Political Science",
      location: "Colorado Springs, CO"
    }
  ],
  experience_subheader: "experience",
  experience: [
    {
      company: "Self Employed",
      one: "Built website for local parenting consulting small business allowing clients to view services, contact business, ad make appointments",
      two: "Designed and built webpage for local artist to upload photographs and showing portfolio",
      three: "Designed and built website for local city council campaign allowing for constituents to view platform, make donations, and contact candidate"
    },
    {
      company: "Olio",
      one: "Implemented updates in styling and content on client website increasing navigability and site efficiency",
      two: "Lead and AI research project resulting in decisions regarding integration of AI into company workflow",
      three: "Built Express.js API with React front end for app allowing users to send invitations and receive server confirmation"
    }
  ],
  skills_subheader: "skills",
  skills: [
    {
      name: "JavaScript",
      url: imageUrls.skills_logos.js_logo
    },
    {
      name: "TypeScript",
      url: imageUrls.skills_logos.ts_logo
    },
    {
      name: "React",
      url: imageUrls.skills_logos.react_logo
    },
    {
      name: "C#",
      url: imageUrls.skills_logos.csharp_logo
    },
    {
      name: ".NET",
      url: imageUrls.skills_logos.dotnet_logo
    },
    {
      name: "CSS",
      url: imageUrls.skills_logos.css_logo
    },
    {
      name: "Node.js",
      url: imageUrls.skills_logos.node_logo
    },
    {
      name: "Express.js",
      url: imageUrls.skills_logos.express_logo
    }
  ],
  projects_subheader: "projects",
  projects: [
    {
      name: 'Mad Libs',
      src: imageUrls.projects.mad_libs,
      description: "App that allows users to log in to their account, create mad libs and fill out available mad libs. Quizzes and results are saved to a Firestore Database and listed on the home page. Built with React using Firebase/Firestore",
      techStack: "JavaScript | JSX | CSS | | React | Firebase/Firestore | Webpack | Node.js",
      url: "https://github.com/reimannsarah/mad-libs.git"
    },
  
    {
      name: "Birthday RSVP",
      src: imageUrls.projects.bday_rsvp,
      description: "Webpage that allows the  user to input an amount of free time and desired activities or chores. The user can then use the app to budget their free time efficiently. Built with JavaScript and styled with CSS.",
      techStack: "React | Javascript | JSX | webpack | Node.js | CSS | MySQL",
      url: "https://sarah-reimann-birthday.web.app/"
    },
  
    {
      name: "Parenting Consulting Website",
      src: imageUrls.projects.pc_website,
      description: "A personal website for a parenting consulting business. Built with Typescript and  React.",
      techStack: "Typescript | TSX | Javascript | Vite | Node.js | CSS | Firebase",
      url: "https://lucy-grein-pc.web.app/"
    },
  
    {
      name: "Mouse Mingle",
      src: imageUrls.projects.mouse_mingle,
      description: "Group project from Epicodus to practice C#. This is a dating website for rodents. There is an API that makes use of a MySQL database. A use can create a profile and save their data to the database. There is a client side with a front end also built with C#.",
      techStack: "C# | .NET | ASP.NET Core | MVC | Entity Framework Core | EF Core Migrations | Swashbuckle | Swagger | MySQL | RestSharp",
      url: "https://github.com/reimannsarah/MouseMingleMonoRepo.git"
    },
  
    {
      name: "Prioritime",
      src: imageUrls.projects.prioritime,
      description: "Group project from Epicodus. This is an app where you can enter the amount of free time you have on a given day and then split that up into 15 minute blocks and assign the time to various activities.",
      techStack: "HTML | CSS | Javascript | Webpack | npm",
      url: "https://github.com/reimannsarah/prioritime.git"
    },
  
    {
      name: "Currency Exchanger",
      src: imageUrls.projects.currency,
      description: "An application where a user can exchange currency rates between 160 different currencies.",
      techStack: "HTML | Javascript | CSS | Webpack | npm",
      url: "https://github.com/reimannsarah/currency-exchanger.git"
    },
  
    {
      name: "Studio RJR Portfolio",
      src: imageUrls.projects.studio_rjr,
      description: "A portfolio website for a local artist. User can browse art and contact artist",
      techStack: "Typescript | TSX | Javascript | Vite | Node.js | CSS | Firebase",
      url: "https://github.com/reimannsarah/currency-exchanger.git"
    },
  
    {
      name: "Super Galactic Age Calculator",
      src: imageUrls.projects.galactic,
      description: "Calculate your age and the time between your current age and a past or future age depending on the solar years of a few different planets.",
      techStack: "Javascript | HTML | CSS Webpack | npm",
      url: "https://github.com/reimannsarah/super-galactic-age-calculator.git"
    }
  ],
  about: {
      subheader: "about",
      p1: "Hi! I'm Sarah! I'm 27 years old and I grew up in the southwest hills of Portland, OR. After finishing highschool at St.Mary's Academy, I went to Colorado College where I got my bachelor's degree in Political Science. I loved learning about the structures of government all around the world and thinking about how the systems can be improved. I especially loved living in the mountains in Colorado and spending my time hiking, skiing, and visiting my family in Denver.",

      p2: "After college, I worked in the service industry for several years and for an urban planning firm in Portland specializing in non-motorized transportation. I enjoyed both of these industries but ultimately decided that web development was my path.",

      p3: "Coding is a perfect balance of logic and creativity. I love solving puzzles, creating order and I am passionate about design. Coding is the best of both worlds.",

      p4: "In my free time, I like to play chess, go hiking, try new running routes, go camping in my van, and spend time with my cat.",

    },
    copyright: `\u00A9 Sarah Reimann 2023`
}

export default pageStrings;