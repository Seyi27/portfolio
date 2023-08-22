import React, { useEffect, useState } from 'react'
import './Work.scss'
import { motion } from 'framer-motion'
import { client, urlFor } from '../../client';
import { AiFillEye, AiFillGithub } from 'react-icons/ai'

function Work() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([])
  const [filterWorks, setFilterWorks] = useState([])

  const handleWorkFilter = (item) => {
    setActiveFilter(item)
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWorks(works);
      } else {
        setFilterWorks(works.filter((work) => work.tag.includes(item)))
      }
    }, 500)
  }

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWorks(data);
      })

  }, [])

  return (
    <>
      <div className='app__works'>
        <h3 className='app__flex'>My Projects</h3>
        <div className='app__work-filter'>
          {['All', 'Web App', 'Mobile App'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex ${activeFilter === item ? 'item-active' : ''}`}
            >
              {item}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className='app__work-portfolio'
        >
          {filterWorks.map((work, index) => (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app__flex'>
                <img src={urlFor(work.imgUrl)} alt={work.name} />

                {/* The github and eye icon */}
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className='app__work-hover app__flex'
                >
                  <a href={work.projectLink} target='_blank' rel='noreferrer' >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={work.codeLink} target='_blank' rel='noreferrer' >
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>

                </motion.div>
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style={{ marginTop: 10 ,marginBottom: 10 }}>{work.description}</p>

                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tag}</p>
                </div>

                <div className='app__stack'>
                  {work.stack.map((stack, index) => (
                    <div key={index}>
                      <p className='app__stack-item p-text'>{stack}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>

  )
}

export default Work