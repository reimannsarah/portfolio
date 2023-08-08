import { useState } from 'react';
import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import projectList from './store';

const Control: React.FC = () => {

  const [homeVisible, setHomeVisible] = useState(true);
  const [aboutVisible, setAboutVisible] = useState<boolean>(false);
  const [projectsVisible, setProjectsVisible] = useState<boolean>(false);
  const [contactVisible, setContactVisible] = useState<boolean>(false);
  // const [visibleProjectIndex, setVisibleProjectIndex] = useState(0);

  const handleHomeClick = () => {
    setHomeVisible(true);
    setAboutVisible(false);
    setProjectsVisible(false);
    setContactVisible(false);
  }

  const handleAboutClick = () => {
    setAboutVisible(true);
    setHomeVisible(false);
    setProjectsVisible(false);
    setContactVisible(false);
  }

  const handleProjectsClick = () => {
    setProjectsVisible(true);
    setHomeVisible(false);
    setAboutVisible(false);
    setContactVisible(false);
  }

  const handleContactClick = () => {
    setContactVisible(true);
    setHomeVisible(false);
    setProjectsVisible(false);
    setAboutVisible(false);
  }

  // const handleNextClick = () => {
  //   setVisibleProjectIndex(visibleProjectIndex + 1);
  // }

  // const handlePrevClick = () => {
  //   setVisibleProjectIndex(visibleProjectIndex - 1);
  // }

  let currentlyVisible = null;
  // const currentProject = projectList[visibleProjectIndex];

    if (homeVisible) {
      currentlyVisible = 
      <Home />
    } else if (aboutVisible) {
      currentlyVisible = 
      <About />
    } else if (projectsVisible) {
      currentlyVisible = 
        <Projects projects={projectList}/>
    } else if (contactVisible) {
      currentlyVisible = 
      <Contact />
    }
  
    return (
      <React.Fragment>
        <Header onHomeClick={handleHomeClick} onAboutClick={handleAboutClick} onProjectsClick={handleProjectsClick} onContactClick={handleContactClick}/>
        {currentlyVisible} 
      </React.Fragment>
    )
}

export default Control;