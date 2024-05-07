import React from 'react'
import { Container,Button } from '@mui/material';
import {  Instagram, GitHub } from '@mui/icons-material';
import {FaTiktok,FaLinkedin} from 'react-icons/fa'
// import { FaTiktok } from 'react-icons' 

export default function MediaIcons() {
  return (
    <div className='container'> 
        <Container className='innerCont'> 
            <Button href='https://github.com/Maryan121'> <GitHub  className='icons'/></Button>
            <Button href='https://www.linkedin.com/in/maryan-maxamuud-b2aa351ab'> <FaLinkedin className='icons'/></Button> 
            <Button href='https://www.tiktok.com/@learnwithenergyandfun'> <FaTiktok className='icons'/></Button> 
            <Button href='https://www.instagram.com/maryan_mohamuud1/?hl=ru'> <Instagram className='icons'/></Button> 
        </Container>        
    </div>
  )
}
