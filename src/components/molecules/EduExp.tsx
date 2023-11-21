import { useState } from 'react';
import { Tab, Tabs, Typography, Slide } from '@mui/material';
import pageStrings from '../../assets/text/pageStrings';

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
            {pageStrings.education.map((item, index) => (
              <div key={index}>
                {item}
              </div>
            ))}
          </Typography>
        </div>
      </Slide>

      <Slide direction="right" in={value === 1} mountOnEnter unmountOnExit>
        <div className='experience'>
          <Typography>
            {pageStrings.experience.map((item, index) => (
              <div key={index}>
                {item}
              </div>
            ))}
          </Typography>
        </div>
      </Slide>
    </div>
  );
};

export default EduExp;
