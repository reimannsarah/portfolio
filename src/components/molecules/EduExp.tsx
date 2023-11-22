import { useState } from 'react';
import { Tab, Tabs, Slide } from '@mui/material';
import pageStrings from '../../assets/text/pageStrings';

const EduExp: React.FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='edu-exp'>
      <div className='tabs'>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="edu-exp-tabs"
        >
          <Tab label="Education" id="education-tab" />
          <Tab label="Experience" id="experience-tab" />
        </Tabs>
      </div>
      
      <Slide direction="right" in={value === 0} mountOnEnter unmountOnExit>
        <div className='education'>
          <div>
            {pageStrings.education.map((item, index) => (
              <p key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </Slide>

      <Slide direction="right" in={value === 1} mountOnEnter unmountOnExit>
        <div className='experience'>
          <div>
            {pageStrings.experience.map((item, index) => (
              <p key={index}>
                {item}
              </p>
            ))}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default EduExp;
