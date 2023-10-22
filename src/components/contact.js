import React from 'react'
import { useState } from 'react';
import { TextField,Button, Typography } from '@mui/material';

export default function Contact() {
    const [formData,setFormData] = useState({ 
        name: '',
        email: '',
        message: '',
     })

     const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData.name,formData.email, formData.message)
      }
  return (
    <div className='formContainer' id='contact'>
        {/* <Typography >contact me</Typography> */}
        <form className='form' onSubmit={handleSubmit}>
            <TextField 
                className='textField' 
                name='name' 
                placeholder='enter your name..' 
                onChange={handleChange} 
                value={formData.name}
                />
            <TextField 
                className='textField' 
                name='email'   
                placeholder='example@gmail.com...' 
                onChange={handleChange} 
                value={formData.email}
                />
            <TextField 
                className='textField' 
                name='message' 
                placeholder='message' 
                rows={4} 
                fullWidth 
                multiline 
                onChange={handleChange} 
                value={formData.message}
                />
            <Button 
                className='submitBtn' 
                variant='outlined' 
                type='submit'>
                    submit
                </Button>
        </form>
    </div>
  )
}
