import './App.css';
import Header from './components/Header';

import Certificates from './components/Certificates';
import Skills from './components/Skills';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-container">
        <Experience />
        
        <Certificates />
        <Skills />
        <About />
      </div>
      <Footer />
    </div>
  );
}

export default App;