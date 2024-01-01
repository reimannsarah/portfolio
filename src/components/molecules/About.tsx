import pageStrings from '../../assets/text/pageStrings';
import imageUrls from '../../assets/imgs/imageURLs';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className='about-text'>
        <h1>{pageStrings.about.subheader}</h1>
        <p>{pageStrings.about.p1}</p>
        <p>{pageStrings.about.p2}</p>
        <p>{pageStrings.about.p3}</p>
        <p>{pageStrings.about.p4}</p>
      </div>
      <div className='about-art' >
        <img src={imageUrls.art.middle_art} alt="art" />
      </div>
    </div>
  )
}

export default About;

//style={ { backgroundImage: `url(${imageUrls.art.middle_art})`, backgroundSize: 'cover' }}