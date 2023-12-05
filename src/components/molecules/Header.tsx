import useBlobImage from '../../services/useBlobImage';
import pageStrings from '../../assets/text/pageStrings';
import imageUrls from '../../assets/imgs/imageURLs';

const Header: React.FC = () => {
  const imageURL = imageUrls.logo;
  const [imageSrc] = useBlobImage(imageURL);
  
  
  return (
    <div className='header'>
      <div className='logo'>
        {imageSrc && <img src={imageSrc} alt="logo" />}
      </div>
        <p className='header-name'>{pageStrings.header}</p>
    </div>
  )
}

export default Header;

