import sarah2 from '../assets/imgs/sarah2.jpg'

const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="about-pic">
        <div className="about-pic-background"></div>
        <img src={sarah2} />
      </div>
      <div className="about-text">
      <p>
        My name is <span className="about-name">Sarah Reimann</span>, I'm 26 years old and I grew up in the southwest hills of Portland, OR. After finishing highschool at St.Mary's Academy, I went to Colorado College where I got my bachelor's degree in Political Science. I loved learning about the structures of government all around the world and thinking about how the systems can be improved. I especially loved living in the mountains in Colorado and spending my time hiking, skiing, and visiting my family in Denver.</p>
      <p>
        After college, worked in the service industry for several years and for an urban planning firm in Portland specializing in non-motorized transportation. I enjoyed both of these industries but ultimately decided that web development was my path.
      </p>
      <p> 
        Coding is a perfect balance of logic and creativity. I love solving puzzles, creating order and I am passionate about design. Coding is the best of both worlds. </p>
      <p> 
        In my free time, I like to play chess, go hiking, try new running routes, go camping in my van, and spend time with my cat. </p>
      </div>
    </div>
  )
}

export default About;