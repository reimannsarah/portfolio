import Button from '../atoms/Button';
import { useState } from 'react';

const EduExp: React.FC = () => {
  const [education, setEducation] = useState(true);
  const [experience, setExperience] = useState(false);

  const eduExpClick = () => {
    setEducation(!education);
    setExperience(!experience);
  };

  return (
    <div className='edu-exp'>
      <div className='edu-exp-buttons'>
        <Button children="education" onClick={eduExpClick}/>
        <Button children="experience" onClick={eduExpClick}/>
      </div>
      
      {education && (
        <div className='education'>
          <ul>
            <li>school</li>
            <li>more school</li>
          </ul>
        </div>
      )}

      {experience && (
        <div className='experience'>
          <ul>
            <li>work experience</li>
            <li>other experiences</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default EduExp;
