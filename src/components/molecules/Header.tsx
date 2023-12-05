// import logo from '../../assets/imgs/logo-white-bgc.png'
import useBlobImage from '../../services/useBlobImage';
import pageStrings from '../../assets/text/pageStrings';

const Header: React.FC = () => {
  const imageURL = 'https://srportfolio.blob.core.windows.net/portfolio-images/logo.png';
  const imageSrc = useBlobImage(imageURL);
  
  
  return (
    <div className='header'>
      <div className='logo'>
        <img src={imageSrc} alt="logo"/>
      </div>
        <p className='header-name'>{pageStrings.header}</p>
    </div>
  )
}

export default Header;

