import pageStrings from '../../assets/text/pageStrings';
import imageUrls from '../../assets/imgs/imageURLs';

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
        <img src={imageUrls.logo_name} alt="logo"/>
      </div>
    </div>
  )
}

export default Footer;