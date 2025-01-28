import React from 'react'
import './Header.css'
import { easeInOut, easeOut, motion } from 'framer-motion'
import logo from '../../assets/cross-p.png'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

function Header() {
  return (
    <div className='app__header'>
      <div className='app__text'>
        {/* <motion.div
        whileInView={{ x: [-200, 0] }}
        transition={{ duration: 1 }}
        className='app__text'
      > */}

        {/* <motion.div
          whileInView={{ y: [20, 0] }}
          transition={{ duration: 3 }}
        > */}
        <span>Hello, I'm</span>
        {/* </motion.div> */}

        {/* <motion.div
          whileInView={{ y: [200, 0] }}
          transition={{ duration: 2 }}
        > */}
        <h1>Bhadmus Oluwaseyi</h1>
        {/* </motion.div> */}

        <p>I'm a passionate frontend developer with a creative edge, dedicated to crafting immersive digital experiences. With a keen eye for design and a strong command of cutting-edge web technologies, I specialize in turning concepts into captivating user interfaces.</p>

        {/* <motion.div
          whileInView={{ y: [-200, 0] }}
          transition={{ duration: 1 }}
          className='app__text'
        > */}
        <div className='app__icon-container' >
          <div className='app__icon'>
            <a href='https://github.com/Seyi27'>
              <AiFillGithub />
            </a>
          </div>

          <div className='app__icon'>
            <a href='https://www.linkedin.com/in/oluwaseyi-bhadmus-3090121b4/'>
              <AiFillLinkedin />
            </a>
          </div>

          <div className='app__icon'>
            <a href='https://twitter.com/Seyi_27'>
              <AiFillTwitterCircle />
            </a>
          </div>
        </div>
        {/* </motion.div> */}

        {/* </motion.div> */}
      </div>

      {/* <motion.div
        whileInView={{ x: [400, 0] }}
        transition={{ duration: 1 }}
        className='app__image'
      > */}
      <div className='app__image'>
        <img src={logo} alt='cross' />
      </div>
      {/* </motion.div> */}
    </div >
  )
}

export default Header
