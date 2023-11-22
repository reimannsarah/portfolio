import pageStrings from "../../assets/text/pageStrings";
import {useState, useEffect} from "react";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pageStrings.skills.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="skills">
      <p>{pageStrings.skills_subheader}</p>
      <div className="skills-circle">
        <p>{pageStrings.skills[currentIndex].name}</p>
      </div>
    </div>
  )
}

export default Skills;