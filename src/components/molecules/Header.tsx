import pageStrings from '../../assets/text/pageStrings';
import imageUrls from '../../assets/imgs/imageURLs';

const Header: React.FC = () => {
  
  return (
    <div className='header'>
      <div className='logo'>
        <img src={imageUrls.logos.logo} alt="logo"/>
      </div>
        <p className='header-name'>{pageStrings.header}</p>
    </div>
  )
}

export default Header;

