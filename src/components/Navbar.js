import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { easeInOut, easeOut, motion } from 'framer-motion'
import { Link } from 'react-scroll';
import logo from '../assets/mylogo.png'

function Navbar() {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={logo} alt='logo'/>
      </div>

      <ul className='app__navbar-links'>
        {/* {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
          //className='app__flex p-text' is from the styles in App.scss
          <li key={`link- ${item}`} className='app__flex p-text'>
            <div></div>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))} */}
        <Link to="home" smooth={true} duration={500}>
          <li className='app__flex p-text'>
            <div></div>
            <a href='#home'>home</a>
          </li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li className='app__flex p-text'>
            <div></div>
            <a href='#about'>about</a>
          </li>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <li className='app__flex p-text'>
            <div></div>
            <a href='#work'>work</a>
          </li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li className='app__flex p-text'>
            <div></div>
            <a href='#skills'>skills</a>
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li className='app__flex p-text'>
            <div></div>
            <a href='#contact'>contact</a>
          </li>
        </Link>
      </ul>


      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            // whileInView={{ x: [300, 0] }}
            // transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {/* {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                //className='app__flex p-text' is from the styles in App.scss
                <li key={item} >
                  <a href={`#${item}`} onClick={() => setToggle(false)} >{item}</a>
                </li>
              ))} */}
              <Link to="home" smooth={true} duration={500}>
                <li>
                  <a href='#home' onClick={() => setToggle(false)}>home</a>
                </li>
              </Link>
              <Link to="about" smooth={true} duration={500}>
                <li>
                  <a href='#about' onClick={() => setToggle(false)}>about</a>
                </li>
              </Link>
              <Link to="work" smooth={true} duration={500}>
                <li>
                  <a href='#work' onClick={() => setToggle(false)}>work</a>
                </li>
              </Link>
              <Link to="skills" smooth={true} duration={500}>
                <li>
                  <a href='#skills' onClick={() => setToggle(false)}>skills</a>
                </li>
              </Link>
              <Link to="contact" smooth={true} duration={500}>
                <li>
                  <a href='#contact' onClick={() => setToggle(false)}>contact</a>
                </li>
              </Link>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>

  )
}

export default Navbar
