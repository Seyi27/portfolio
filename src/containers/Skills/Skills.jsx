import React, { useEffect, useState } from 'react'
import './Skills.scss';
import { client, urlFor } from '../../client';
import { easeInOut, easeOut, motion } from 'framer-motion'

function Skills() {
  const [mySkill, setMySkill] = useState([])

  useEffect(() => {
    const skillQuery = '*[_type == "skills"]';

    client.fetch(skillQuery)
      .then((data) => {
        setMySkill(data)
      })
  }, [])

  // console.log(mySkill)

  return (
    <div className='app__skills'>
      <h3>Skills</h3>
      <div className='app__skills-container'>
        {mySkill.map((skill) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 4 }}
            className='app__skills-container-items'
          >
            <img src={urlFor(skill.icon)} alt={skill.name} />

            <p>{skill.name}</p>
          </motion.div>


        ))}


      </div>
    </div>
  )
}

export default Skills