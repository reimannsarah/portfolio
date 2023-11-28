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
