import pageStrings from "../../assets/text/pageStrings";
import {useState, useEffect} from "react";
import useBlobImage from "../../services/useBlobImage";

const Skills = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrl = pageStrings.skills[currentIndex].url;
  const [currentImage] = useBlobImage(imageUrl);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % pageStrings.skills.length);
    }, 1500);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="skills">
      <p>{pageStrings.skills_subheader}</p>
      <div className="skills-circle">
        <img src={currentImage} alt={`a drawing of the ${pageStrings.skills[currentIndex].name} logo`} />
        <p>{pageStrings.skills[currentIndex].name}</p>
      </div>
    </div>
  )
}

export default Skills;