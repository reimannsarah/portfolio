import logo from '../assets/imgs/logo.png'
import './App.css';

// interface HeaderProps {
//   onHomeClick: () => void;
//   onAboutClick: () => void;
//   onProjectsClick: () => void;
//   onContactClick: () => void;
// }

const Header: React.FC = () => {

  
  return (
    <div className='header'>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  )
}

export default Header;

