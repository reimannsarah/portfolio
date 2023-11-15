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
      <div className='header-name'>
        <p>sarah reimann</p>
      </div>
    </div>
  )
}

export default Header;

