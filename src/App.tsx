import './App.css';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar';
import Header from './pages/Header/Header';
import Work from './pages/Work/Work';
import Skills from './pages/Skills/Skills';
import Contact from './pages/Contact/Contact';
import Footer from './pages/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />

      <Element name="home" >
        <Header />
      </Element>

      {/* <Element name="about">
        <About />
      </Element> */}

      <Element name="work">
        <Work />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="contact" >
        <Contact />
      </Element>

      <Element name="footer" >
        <Footer />
      </Element>
      
    </div>
  );
}

export default App;
