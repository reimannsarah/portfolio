import js_logo from '../imgs/js_logo.png';
import ts_logo from '../imgs/ts_logo.png';
import react_logo from '../imgs/react_logo.png';

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
      one: "point 1",
      two: "point 2",
      three: "point 3"
    },
    {
      company: "Olio",
      one: "point 1",
      two: "point 2",
      three: "point 3"
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
  ]
}

export default pageStrings;