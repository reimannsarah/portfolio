// import PropTypes from 'prop-types';

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
        <p onClick={onAboutClick}>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

// Header.propTypes = {
//   onAboutClick: PropTypes.func
// }

export default Header;

