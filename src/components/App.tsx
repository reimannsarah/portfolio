import './App.css'
import EduExp from './molecules/EduExp';
import Header from './molecules/Header';
import Skills from './molecules/Skills';

function App() {

  return (
    <div className='app'>
      <Header />
      <div className='top-div'>
        <EduExp />
        <Skills />
      </div>
    </div>
  )
}

export default App
