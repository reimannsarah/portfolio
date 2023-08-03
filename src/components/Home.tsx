import sarah from '../assets/imgs/sarah.png';

const Home: React.FC = () => {
  return (
    <div className="bio">
      <img className="port-pic" src={sarah} alt="a photo of sarah standing under a plant"/>
      <p className="intro">full stack developer. oregon native. colorado college grad. loves running for fun, making art, and fresh pasta.</p>
    </div>
  )
}

export default Home;