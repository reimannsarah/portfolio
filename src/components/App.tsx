import './App.css'
import EduExp from './molecules/EduExp';
import Header from './molecules/Header';
import Skills from './molecules/Skills';
// import Footer from './molecules/Footer';

function App() {

  return (
    <div className='app'>
      <Header />
      <div className='hero'>
        <EduExp />
        <Skills />
      </div>
      <div className='middle1'></div>
      <div className='middle2'></div>
      <div className='bottom'></div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
