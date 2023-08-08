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
        After college, I spent a couple years working in the service industry and deciding what my next step would be. I ultimately landed a job working for an urban planning firm in Portland specializing in non-motorized transportation. I enjoyed my time working for them and made some invaluable connections. During the year that I worked there, I thought a lot about what I wanted out of my career and how I could achieve those goals.
      </p>
      <p>
        Ultimately, I decided that the path I was on would not lead me in the direction I hoped to go. I had been interested in computer programming for a couple of years but was unsure of how to pursue that. After spending time trying to teach myself at home, I learned about Epicodus and decided that that would be the right path for me. I knew I wanted to go to school in person to have structure, peers, and teachers.
      </p>
      <p> 
        What I love about coding is the balance of logic and creativity. I love solving puzzles and feeling like I can create order but I also love to design and make beautiful things. Coding is the best of both of those worlds. </p>
      <p> 
        In my free time, I like to play chess, go hiking, try new running routes, go camping in my van, and spend time with my cat. </p>
      </div>
    </div>
  )
}

export default About;