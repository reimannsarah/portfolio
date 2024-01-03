import pageStrings from '../../assets/text/pageStrings';
import imageUrls from '../../assets/imgs/imageURLs';

const Header: React.FC = () => {
  
  return (
    <div className='header'>
        <p className='header-name'>{pageStrings.header}</p>
      <div className='logo'>
        <img src={imageUrls.logos.logo_rectangle} alt="logo"/>
      </div>
    </div>
  )
}

export default Header;

