import background from '../assets/imgs/background.png'
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  return (
    <div>
      <img className="land-pg-background" src={background} alt="abstract painting"/>
      <div className="lp-title">
      <h1 >sarah reimann</h1>
      <p className="lp-description">full stack web developer</p>
      <Link className="arrow" to="/home">&#8594;</Link>
      </div>
    </div>
  )
}

export default LandingPage;