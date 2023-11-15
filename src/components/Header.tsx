import logo from '../assets/imgs/logo.png'
import Button from './atoms/Button';
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
      <div>
        <img src={logo} alt="logo" className='logo'/>
      </div>
      <div className='navbar'>
        <Button children="Projects"/>
        <Button children="About"/>
        <Button children="Contact"/>
      </div>
    </div>
  )
}

export default Header;

