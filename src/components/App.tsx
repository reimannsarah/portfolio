import './App.css'
import EduExp from './molecules/EduExp';
import Header from './molecules/Header';
import Skills from './molecules/Skills';
import Projects from './molecules/Projects';
import project_list from './store';
import Footer from './molecules/Footer';

function App() {

  return (
    <div className='app'>
      <Header />
      <div className='hero'>
        <EduExp />
        <Skills />
      </div>
      <svg id="grey_wave" viewBox="0 0 1730 100" width="1730" height="100" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1"><path d="M0 79L26.2 77.5C52.3 76 104.7 73 157.2 69.5C209.7 66 262.3 62 314.8 60.7C367.3 59.3 419.7 60.7 472 62C524.3 63.3 576.7 64.7 629 67.3C681.3 70 733.7 74 786.2 75.8C838.7 77.7 891.3 77.3 943.8 75.8C996.3 74.3 1048.7 71.7 1101 68.2C1153.3 64.7 1205.7 60.3 1258 59.5C1310.3 58.7 1362.7 61.3 1415.2 63.8C1467.7 66.3 1520.3 68.7 1572.8 69.8C1625.3 71 1677.7 71 1703.8 71L1730 71L1730 101L1703.8 101C1677.7 101 1625.3 101 1572.8 101C1520.3 101 1467.7 101 1415.2 101C1362.7 101 1310.3 101 1258 101C1205.7 101 1153.3 101 1101 101C1048.7 101 996.3 101 943.8 101C891.3 101 838.7 101 786.2 101C733.7 101 681.3 101 629 101C576.7 101 524.3 101 472 101C419.7 101 367.3 101 314.8 101C262.3 101 209.7 101 157.2 101C104.7 101 52.3 101 26.2 101L0 101Z" fill="#d8d8d89f" stroke-linecap="round" stroke-linejoin="miter"></path></svg>
      <div className='middle1'>
        <Projects projects={project_list}/>
      </div>
      <div className='middle2'></div>
      <div className='bottom'></div>
      <Footer />
    </div>
  )
}

export default App
