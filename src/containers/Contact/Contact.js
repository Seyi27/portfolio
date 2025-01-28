import React, { useState } from 'react'
import { HiPhone, HiMail } from 'react-icons/hi'
import './Contact.css'
// import { client } from '../../client'
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";

function Contact() {
  return (
    <div className='app__footer'>
      <h3 >Contact Me</h3>
      <div className='app__footer-cards'>
        <div className='app__footer-card'>
          <HiPhone />
          <a href="tel: +234 814 799 9394" className='p-text'>+234 0814 799 9394</a>
        </div>
        <div className='app__footer-card'>
          <HiMail />
          <a href="mailto: oluwaseyibhadmus@gmail.com" className='p-text'>Oluwaseyibhadmus@gmail.com</a>
        </div>
      </div>

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
    </div>

  )
}

export default Contact