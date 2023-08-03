interface HeaderProps {
  onHomeClick: () => void;
  onAboutClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick, onAboutClick, onProjectsClick, onContactClick}) => {

  
  return (
    <div className="header">
      <div>
        <div className="header-circle"></div>
        <h1 onClick={onHomeClick}>Sarah Reimann</h1>
      </div>
      <div className="nav-btns">
        <p className="about-btn" onClick={onAboutClick}>About</p>
        <p className="projects-btn" onClick={onProjectsClick}>Projects</p>
        <p className="contact-btn" onClick={onContactClick}>Contact</p>
      </div>
    </div>
  )
}

export default Header;

