import React, { useEffect, useState } from 'react'
import './Work.css'
import { motion } from 'framer-motion'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import saleko_img from '../../assets/project_image/saleko.png'
import saleko_merchant from '../../assets/project_image/saleko-merchant.png'
import rafiki_img from '../../assets/project_image/rafiki.png'
import hob_img from '../../assets/project_image/hob.png'
import sme_img from '../../assets/project_image/sme.png'
import smooth_capital from '../../assets/project_image/smooth-capital.png'

function Work() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [works, setWorks] = useState([
    {
      title: 'Rafiki Chatbot ( Virtual Assistant )',
      description: 'A web app that features a multilingual, secure banking chatbot with an adaptive UI, dynamic translations, conversational workflows for key operations, live agent escalation, and seamless integration with core banking systems.',
      tag: 'Web App',
      stack: ['React', 'Tailwind css'],
      projectLink: '',
      codeLink: '',
      imgUrl: rafiki_img
    },
    {
      title: 'My SME Application',
      description: 'A mobile app for digital onboarding, multilingual support across 33 countries, and SME-focused features like account management, payments, and loans, with real-time data synchronization via API integration.',
      tag: 'Mobile App',
      stack: ['React Native', 'Redux'],
      projectLink: '',
      codeLink: '',
      imgUrl: sme_img
    },
    {
      title: 'Onboarding Portal',
      description: 'A mobile app that streamlines onboarding, fosters growth, supports continuous feedback, and aligns with company goals to enhance employee integration and satisfaction.',
      tag: 'Mobile App',
      stack: ['React Native'],
      projectLink: '',
      codeLink: '',
      imgUrl: hob_img
    },
    {
      title: 'Saleko',
      description: 'A web app that enables seamless online shopping, supports multiple payment options, provides personalized recommendations, and ensures a user-friendly experience for customers and vendors.',
      tag: 'Web App',
      stack: ['React', 'Redux'],
      projectLink: 'https://www.saleko.ng/',
      codeLink: '',
      imgUrl: saleko_img
    },
    {
      title: 'Saleko Merchant',
      description: 'A web app designed for vendors to easily manage their online stores, upload and organize products, track sales and transactions, and receive real-time insights, all while providing a seamless connection to customers through the Saleko marketplace.',
      tag: 'Web App',
      stack: ['React', 'Redux'],
      projectLink: 'https://seller.saleko.ng/',
      codeLink: '',
      imgUrl: saleko_merchant
    },
    {
      title: 'Smooth Capital',
      description: 'Developed a modern, responsive website for a wealth management company, showcasing their tailored investment solutions and services. Focused on delivering a professional user experience that reflects trust, growth, and financial confidence.',
      tag: 'Web App',
      stack: ['React', 'Tailwind css'],
      projectLink: 'https://smooth-capital.vercel.app/',
      codeLink: '',
      imgUrl: smooth_capital
    }
  ]);
  const [filterWorks, setFilterWorks] = useState(works);

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
              <a href={work.projectLink} style={{ textDecorationLine: 'none' }}>
                <div className='app__work-img app__flex'>
                  <img src={work.imgUrl} alt={work.name} />

                  {/* The github and eye icon */}
                  {/* <motion.div
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

                </motion.div> */}
                </div>

                <div className='app__work-content app__flex'>
                  <h4 className='bold-text'>{work.title}</h4>
                  <p className='p-text' style={{ marginTop: 10, marginBottom: 10 }}>{work.description}</p>

                  {/* <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tag}</p>
                </div> */}

                  <div className='app__stack'>
                    {work.stack.map((stack, index) => (
                      <div key={index}>
                        <p className='app__stack-item p-text'>{stack}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </a>

            </div>
          ))}
        </motion.div>
      </div>
    </>

  )
}

export default Work