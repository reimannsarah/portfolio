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
  ]
}

export default pageStrings;