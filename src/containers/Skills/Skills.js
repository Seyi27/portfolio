// import React, { useEffect, useState } from 'react'
// import './Skills.css';
// // import { client, urlFor } from '../../client';
// import { easeInOut, easeOut, motion } from 'framer-motion'
// import html from '../../assets/html.jpeg'
// import css from '../../assets/css.png'
// import javascript from '../../assets/javascript.png'
// import typescript from '../../assets/typescript.png'
// import react_js from '../../assets/react.png'
// import react_native from '../../assets/react.png'
// import angular from '../../assets/angular.png'
// import sass from '../../assets/sass.png'
// import tailwind_css from '../../assets/tailwind.png'
// import redux from '../../assets/redux.png'
// import mysql from '../../assets/mysql.png'
// import php from '../../assets/php.png'
// import git from '../../assets/git.png'

// function Skills() {
//   const mySkill = [
//     { name: 'Html', icon: html },
//     { name: 'Css', icon: css },
//     { name: 'Javascript', icon: javascript },
//     { name: 'Typescript', icon: typescript },
//     { name: 'React js', icon: react_js },
//     { name: 'React native', icon: react_native },
//     { name: 'Angular', icon: angular },
//     { name: 'Sass', icon: sass },
//     { name: 'Tailwind css', icon: tailwind_css },
//     { name: 'Redux', icon: redux },
//     { name: 'Php', icon: php },
//     { name: 'Mysql', icon: mysql },
//     { name: 'Git', icon: git },
//   ]

//   return (
//     <div className='app__skills'>
//       <h3>Skills</h3>
//       <div className='app__skills-container'>
//         {mySkill.map((skill) => (
//           <motion.div
//             whileInView={{ opacity: [0, 1] }}
//             whileHover={{ scale: 1.2 }}
//             transition={{ duration: 4 }}
//             className='app__skills-container-items'
//           >
//             <img src={skill.icon} alt={skill.name} />

//             <p>{skill.name}</p>
//           </motion.div>


//         ))}


//       </div>
//     </div>
//   )
// }

// export default Skills




import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion'

import html from '../../assets//html.png'
import css from '../../assets/css.png'
import javascript from '../../assets/javascript.png'
import typescript from '../../assets/typescript.png'
import react_js from '../../assets/react.png'
import next_js from '../../assets/next.png'
import angular from '../../assets/angular.png'
import sass from '../../assets/sass.png'
import tailwind_css from '../../assets/tailwind.png'
import redux from '../../assets/redux.png'
import mysql from '../../assets/mysql.png'
import php from '../../assets/php.png'
import git from '../../assets/git.png'

const skills = [
  { name: 'Html', icon: html },
  { name: 'Css', icon: css },
  { name: 'Javascript', icon: javascript },
  { name: 'Typescript', icon: typescript },
  { name: 'React', icon: react_js },
  { name: 'Next.js', icon: next_js },
  { name: 'React Native', icon: react_js },
  { name: 'Angular', icon: angular },
  // { name: 'Sass', icon: sass },
  { name: 'Tailwind css', icon: tailwind_css },
  { name: 'Redux', icon: redux },
  { name: 'Php', icon: php },
  { name: 'Mysql', icon: mysql },
  { name: 'Git', icon: git },
]

function Skills() {
  return (
    <div className="app__skills">
      <h3>Skills</h3>

      <div className="app__skills-marquee">
        <motion.div
          className="app__skills-track"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {[...skills, ...skills].map((skill, index) => (
            <div className="app__skills-item" key={index}>
              <img src={skill.icon} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
