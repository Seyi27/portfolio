import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Header from './containers/Header/Header';
import About from './containers/About/About';
import Work from './containers/Work/Work';
import Skills from './containers/Skills/Skills';
import Testimonials from './containers/Testimonials/Testimonials';
import Contact from './containers/Contact/Contact';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="app">
      <Navbar />

      <Element name="home" >
        <Header />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="work">
        <Work />
      </Element>

      <Element name="skills">
        <Skills />
      </Element>

      <Element name="contact" >
        <Contact />
      </Element>
    </div>
  );
}

export default App;
