import logo from '../../assets/imgs/logo_name.png';
import pageStrings from '../../assets/text/pageStrings';

const Footer = () => {
  return (
    <div className='footer'>
      <p>{pageStrings.copyright}</p>
      <div className='logo-icons'>
        <div className='icons'>
          <div className='icon'></div>
          <div className='icon'></div>
          <div className='icon'></div>
        </div>
        <img src={logo} alt="logo"/>
      </div>
    </div>
  )
}

export default Footer;