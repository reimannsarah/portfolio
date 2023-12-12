import pageStrings from '../../assets/text/pageStrings';
import imageUrls from '../../assets/imgs/imageURLs';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='copyright'>
        <div className='logo-icons'>
          <a href='https://github.com/reimannsarah' target='blank'><img src={imageUrls.links.github} alt="GitHub logo" /></a>
          <a href='https://www.linkedin.com/in/sarah-reimann/' target='blank'><img src={imageUrls.links.linkedin} alt="LinkedIn logo" /></a>
        </div>
        <p>{pageStrings.copyright}</p>
      </div>
        <img src={imageUrls.logos.logo_name} alt="logo" id='footer-logo'/>
    </div>
  )
}

export default Footer;