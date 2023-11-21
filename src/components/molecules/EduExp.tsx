// import Button from '../atoms/Button';
// import { useState } from 'react';

// const EduExp: React.FC = () => {
//   const [education, setEducation] = useState(true);
//   const [experience, setExperience] = useState(false);

//   const eduExpClick = () => {
//     setEducation(!education);
//     setExperience(!experience);
//   };

//   return (
//     <div className='edu-exp'>
//       <div className='edu-exp-buttons'>
//         <Button children="education" onClick={eduExpClick}/>
//         <Button children="experience" onClick={eduExpClick}/>
//       </div>
      
//       {education && (
//         <div className='education'>
//           <ul>
//             <li>school</li>
//             <li>more school</li>
//             <li>school</li>
//             <li>more school</li>
//             <li>school</li>
//             <li>more school</li>
//           </ul>
//         </div>
//       )}

//       {experience && (
//         <div className='experience'>
//           <ul>
//             <li>work experience</li>
//             <li>other experiences</li>
//             <li>work experience</li>
//             <li>other experiences</li>
//             <li>work experience</li>
//             <li>other experiences</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default EduExp;

import { useState } from 'react';
import { Tab, Tabs, Typography, Slide } from '@mui/material';

const EduExp: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='edu-exp'>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="edu-exp-tabs"
      >
        <Tab label="Education" id="education-tab" />
        <Tab label="Experience" id="experience-tab" />
      </Tabs>
      
      <Slide direction="right" in={value === 0} mountOnEnter unmountOnExit>
        <div className='education'>
          <Typography>
            <ul>
              <li>school</li>
              <li>more school</li>
              <li>school</li>
              <li>more school</li>
              <li>school</li>
              <li>more school</li>
            </ul>
          </Typography>
        </div>
      </Slide>

      <Slide direction="right" in={value === 1} mountOnEnter unmountOnExit>
        <div className='experience'>
          <Typography>
            <ul>
              <li>work experience</li>
              <li>other experiences</li>
              <li>work experience</li>
              <li>other experiences</li>
              <li>work experience</li>
              <li>other experiences</li>
            </ul>
          </Typography>
        </div>
      </Slide>
    </div>
  );
};

export default EduExp;
