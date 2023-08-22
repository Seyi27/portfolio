import React, { useState } from 'react'
import { HiPhone, HiMail } from 'react-icons/hi'
import './Contact.scss'
import { client } from '../../client'
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChangeInput = (e) => { //key press event
    const { name, value } = e.target; //we getting the name and the value of the input from the event.

    setFormData({ ...formData, [name]: value }) // we deconstructure the formData and set the value of the input to the name of the input.
  }

  const { name, email, message } = formData; // to pull the variables from the object state instead of using formdata.name

  const handleSubmit = () => {
    setLoading(true)

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message
    }

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true)
      })
  }

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

      {!isFormSubmitted ? (
        <div className='app__footer-form app__flex'>
          <div className='app__flex'>
            <input className='p-text' type='text' placeholder='Your Name' name='name' value={name} onChange={handleChangeInput} />{/* or onChange={(e) => setName(e.target.value)} in which its usestate snippet is present. This easier instead of doing the one above */}
          </div>
          <div className='app__flex'>
            <input className='p-text' type='email' name='email' placeholder='Your Email' value={email} onChange={handleChangeInput} /> {/* or onChange={(e) => setEmail(e.target.value)} in which its usestate snippet is present */}
          </div>
          <div>
            <textarea
              className='p-text'
              placeholder='Your Message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='submit' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
        </div>)
        :
        (<div>
          <h3>Thank you for getting in touch</h3>
        </div>)
      }


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
          <a href=''>
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>

  )
}

export default Contact