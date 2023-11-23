import './App.css'
import EduExp from './molecules/EduExp';
import Header from './molecules/Header';
import Skills from './molecules/Skills';
// import Footer from './molecules/Footer';

function App() {

  return (
    <div className='app'>
      <Header />
      <EduExp />
      <Skills />
      {/* <Footer /> */}
    </div>
  )
}

export default App
