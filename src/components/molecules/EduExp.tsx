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
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: '#00916E'
            },
          }}
        
        >
          <Tab label="Education" id="education-tab" />
          <Tab label="Experience" id="experience-tab" />
        </Tabs>
      </div>
      
      <Slide direction="right" in={value === 0} timeout={100} mountOnEnter unmountOnExit>
        <div className='education'>
          <div>
            {pageStrings.education.map((item, index) => (
              <div key={index}>
              <h1>{item.school}</h1>
              <p>{item.dates}</p>
              <p>{item.degree}</p>
              <p>{item.location}</p>
            </div>
            ))}
          </div>
        </div>
      </Slide>

      <Slide direction="right" in={value === 1} mountOnEnter unmountOnExit>
        <div className='experience'>
          <div>
            {pageStrings.experience.map((item, index) => (
              <div key={index}>
                <h1>{item.company}</h1>
                <p>{item.one}</p>
                <p>{item.two}</p>
                <p>{item.three}</p>
              </div>
            ))}
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default EduExp;
