import js_logo from '../imgs/js_logo.png';
import ts_logo from '../imgs/ts_logo.png';
import react_logo from '../imgs/react_logo.png';
import csharp_logo from '../imgs/csharp_logo_.png';
import dotnet_logo from '../imgs/dot_net_logo.png';

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
      three: "Designed and built campaign website for local city council campaign allowing for constituents to view platform, make donations, and contact candidate"
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
      image: js_logo
    },
    {
      name: "TypeScript",
      image: ts_logo
    },
    {
      name: "React",
      image: react_logo
    },
    {
      name: "C#",
      image: csharp_logo
    },
    {
      name: ".NET",
      image: dotnet_logo
    }
  ],
  projects_subheader: "projects",
  about: {
      subheader: "about",
      p1: "My name is Sarah Reimann, I'm 27 years old and I grew up in the southwest hills of Portland, OR. After finishing highschool at St.Mary's Academy, I went to Colorado College where I got my bachelor's degree in Political Science. I loved learning about the structures of government all around the world and thinking about how the systems can be improved. I especially loved living in the mountains in Colorado and spending my time hiking, skiing, and visiting my family in Denver.",

      p2: "After college, I worked in the service industry for several years and for an urban planning firm in Portland specializing in non-motorized transportation. I enjoyed both of these industries but ultimately decided that web development was my path.",

      p3: "Coding is a perfect balance of logic and creativity. I love solving puzzles, creating order and I am passionate about design. Coding is the best of both worlds.",

      p4: "In my free time, I like to play chess, go hiking, try new running routes, go camping in my van, and spend time with my cat."
    }
}

export default pageStrings;