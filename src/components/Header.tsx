interface HeaderProps {
  onAboutClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAboutClick}) => {

  
  return (
    <div className="header">
      <div>
        <div className="header-circle"></div>
        <h1>Sarah Reimann</h1>
      </div>
      <div className="nav-btns">
        <p className="about-btn" onClick={onAboutClick}>About</p>
        <p className="projects-btn">Projects</p>
        <p className="contact-btn">Contact</p>
      </div>
    </div>
  )
}

export default Header;

