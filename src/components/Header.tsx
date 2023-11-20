import logo from '../assets/imgs/logo.png'
// import Button from './atoms/Button';

// interface HeaderProps {
//   onHomeClick: () => void;
//   onAboutClick: () => void;
//   onProjectsClick: () => void;
//   onContactClick: () => void;
// }

const Header: React.FC = () => {

  
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="logo"/>
      </div>
        <p className='header-name'>sarah reimann</p>
    </div>
  )
}

export default Header;

