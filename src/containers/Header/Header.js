import React from 'react'
import './Header.css'
import { easeInOut, easeOut, motion } from 'framer-motion'
import logo from '../../assets/cross-p.png'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import image from '../../assets/profile.png'
import { Link } from 'react-scroll';

function Header() {
  return (
    // <div className='app__header'>
    //   <div className='app__text'>
    //     <motion.div
    //       whileInView={{ x: [-200, 0] }}
    //       transition={{ duration: 1 }}
    //       className='app__text'
    //     >

    //       <span>Hello, I'm</span>
    //       <h1>Bhadmus Oluwaseyi</h1>
    //       {/* </motion.div> */}

    //       <p>I'm a passionate frontend developer with a creative edge, dedicated to crafting immersive digital experiences. With a keen eye for design and a strong command of cutting-edge web technologies, I specialize in turning concepts into captivating user interfaces.</p>

    //       {/* <motion.div
    //       whileInView={{ y: [-200, 0] }}
    //       transition={{ duration: 1 }}
    //       className='app__text'
    //     > */}
    //       <div className='app__icon-container' >
    //         <div className='app__icon'>
    //           <a href='https://github.com/Seyi27'>
    //             <AiFillGithub />
    //           </a>
    //         </div>

    //         <div className='app__icon'>
    //           <a href='https://www.linkedin.com/in/oluwaseyi-bhadmus-3090121b4/'>
    //             <AiFillLinkedin />
    //           </a>
    //         </div>

    //         <div className='app__icon'>
    //           <a href='https://twitter.com/Seyi_27'>
    //             <AiFillTwitterCircle />
    //           </a>
    //         </div>
    //       </div>
    //       {/* </motion.div> */}

    //     </motion.div>
    //   </div>


    //   <motion.div
    //     initial={{ x: '100%' }}
    //     whileInView={{ x: 0 }}
    //     transition={{ duration: 0.8, ease: 'easeOut' }}
    //     className="app__about-image"
    //   >
    //     {/* <div className='app__image'>
    //     <img src={logo} alt='cross' />
    //   </div> */}

    //     {/* <div className='app__about-image'> */}
    //     <img src={image} alt='my image' />
    //     {/* </div> */}
    //   </motion.div>
    // </div >

    <section class="hero">
      {/* <div class="bg-decoration decoration-1"></div>
      <div class="bg-decoration decoration-2"></div>
      <div class="bg-decoration decoration-3"></div> */}

      <div class="container">
        <div class="content">
          <div class="greeting">Hello, I'm</div>
          <h1 class="name">Bhadmus Oluwaseyi</h1>
          <h2 class="title">Frontend Developer & Creative Technologist</h2>
          <p class="description">
            I'm a passionate frontend developer with a <span class="highlight">creative edge</span>, dedicated to crafting immersive digital experiences. With a keen eye for design and a strong command of cutting-edge web technologies, I specialize in turning concepts into captivating user interfaces.
          </p>

          <div class="cta-buttons">
            <Link to="work" smooth={true} duration={500}>
              <a href="#projects" class="btn btn-primary">View My Work</a>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <a href="#contact" class="btn btn-secondary">Get In Touch</a>
            </Link>
          </div>

          <div class="social-links">
            <a href="https://github.com" class="social-link" aria-label="GitHub">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a href="https://linkedin.com" class="social-link" aria-label="LinkedIn">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://twitter.com" class="social-link" aria-label="Twitter">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
          </div>
        </div>

        <div class="image-container">
          <div class="image-wrapper">
            <div class="floating-ring ring-1"></div>
            <div class="floating-ring ring-2"></div>
            <div class="floating-ring ring-3"></div>

            <img src={image}
              alt="Bhadmus Oluwaseyi"
              class="profile-image" />

            <div class="floating-badge badge-1">
              <div class="badge-icon">💻</div>
              <div class="badge-text">Frontend Expert</div>
            </div>

            <div class="floating-badge badge-2">
              <div class="badge-icon">✨</div>
              <div class="badge-text">Creative Designer</div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Header
