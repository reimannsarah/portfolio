import { useState } from 'react';
import React from 'react';
import Header from './Header';
import About from './About';

const Control: React.FC = () => {

  const [aboutVisible, setAboutVisible] = useState<boolean>(true);

  const handleAboutClick = () => {
    setAboutVisible(true);
  }

  let currentlyVisible = null;

    if (aboutVisible) {
      currentlyVisible = 
      <About />
    }
  
    return (
      <React.Fragment>
        <Header onAboutClick={handleAboutClick}/>
        {currentlyVisible}
      </React.Fragment>
    )
}

export default Control;