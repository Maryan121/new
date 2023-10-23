import React from 'react'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { Button, Typography } from '@mui/material';

import Thankspage from './pages/thankspage';

export default function Contact() {
  const form = useRef();
    const [formData,setFormData] = useState({ 
      user_name: '',
      user_email: '',
      message: '',
     })

     const [showThanks,setShowThanks] = useState(false);

     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };


      
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ixdjv6j', 'template_5ssi66r', form.current, 'Q_A8HlJXKccTnkaMp')
    .then((result) => {
        console.log(result.text);
        console.log('message sent! : '+result.text)

        //showing thanks message after submitting the form
       setShowThanks(true)

       //automatically hide thanks message after 7s
       setTimeout(() => {
        setShowThanks(false);
      }, 7000); //in milliseconds


    }, (error) => {
        console.log(error.text);
    });

    setFormData({
      user_name : '',
      user_email : '',
      message : '',
    })
};


  return (
    <div className='formContainer' id='contact'>
        <Typography className='contactTitle' variant='h5'>contact me</Typography>
        <form className='form' ref={form} onSubmit={sendEmail}>
            <input 
                className='textField' 
                name="user_name"
                label='Name'
                placeholder='enter your name..' 
                onChange={handleChange} 
                value={formData.user_name}
                required
                />
            <input 
                className='textField' 
                name="user_email" 
                label='Email' 
                placeholder='example@gmail.com...' 
                onChange={handleChange} 
                value={formData.user_email}
                required
                />
            <textarea 
                className='textField' 
                name="message" 
                label='Message'
                placeholder='message' 
                onChange={handleChange} 
                value={formData.message}
                required
                />
                <Button 
                  className='submitBtn' 
                  variant='outlined' 
                  type='submit'
                  onClick={sendEmail}>
                    submit
                </Button>
          </form>
        {showThanks ? ( <Thankspage className='thanks' />) : null}
    </div>
  )
}
