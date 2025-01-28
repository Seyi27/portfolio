import './App.css';
import { Element } from 'react-scroll';
import Navbar from './components/Navbar'
import Header from './containers/Header/Header'
import About from './containers/About/About'
import Work from './containers/Work/Work'
import Skills from './containers/Skills/Skills'
import Contact from './containers/Contact/Contact'

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
