import logo from '../../assets/imgs/logo-white-bgc.png'
import pageStrings from '../../assets/text/pageStrings';

const Header: React.FC = () => {

  
  return (
    <div className='header'>
      <div className='logo'>
        <img src={logo} alt="logo"/>
      </div>
        <p className='header-name'>{pageStrings.header}</p>
    </div>
  )
}

export default Header;

