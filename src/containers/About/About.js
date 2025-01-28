import React from 'react'
import './About.css'
import { easeInOut, easeOut, motion } from 'framer-motion'
import image from '../../assets/profile.png'
import resume from '../../assets/MyResume.pdf'

function About() {
  return (
    <div className='app__about'>
      {/* <motion.div
        whileInView={{ x: [-300, 0] }}
        transition={{ duration: 1 }}
        className='app__about-image'
      > */}
      <div className='app__about-image'>
        <img src={image} alt='my image' />
      </div>
      {/* </motion.div> */}


      {/* <motion.div
        whileInView={{ x: [200, 0] }}
        transition={{ duration: 1 }}
        className='app__about-text'
      > */}
      <div className='app__about-text'>
        <h3>About Me</h3>
        <p>My name is Bhadmus Oluwaseyi and
          i am an experienced frontend developer with three years of expertise in crafting dynamic web and mobile applications using React, React Native, Angular and TypeScript.
          Passionate about creating seamless user experiences and bringing design concepts to life through clean, efficient code.
          Dedicated to staying at the forefront of technology trends and pushing the boundaries of interactive digital solutions.
        </p>

        <div className='app__button-container'>
          <a href={resume} download="resume.pdf">
            Download Resume
          </a>
        </div>
      </div>
      {/* </motion.div> */}
    </div>
  )
}

export default About
