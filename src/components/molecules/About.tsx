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
      <div className='about-art' style={ { backgroundImage: `url(${imageUrls.middle_art2})`, backgroundSize: 'cover' }}>
        <img src={imageUrls.middle_art1} alt="art" />
      </div>
    </div>
  )
}

export default About;