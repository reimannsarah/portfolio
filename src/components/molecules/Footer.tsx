import pageStrings from '../../assets/text/pageStrings';
import imageUrls from '../../assets/imgs/imageURLs';

const Footer = () => {
  return (
    <div className='footer'>
      <p>{pageStrings.copyright}</p>
      <div className='logo-icons'>
        <img src={imageUrls.links.github} alt="GitHub logo" />
        <img src={imageUrls.links.linkedin} alt="LinkedIn logo" />
      </div>
        <img src={imageUrls.logos.logo_name} alt="logo"/>
    </div>
  )
}

export default Footer;