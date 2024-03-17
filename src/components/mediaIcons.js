import React from 'react'
import { Container,Button } from '@mui/material';
import {  Instagram, GitHub } from '@mui/icons-material'
// import { FaTiktok } from 'react-icons' 

export default function MediaIcons() {
  return (
    <div className='container'> 
        <Container className='innerCont'> 
            <Button href='https://github.com/Maryan121'> <GitHub  className='icons'/></Button>
            <Button href='https://www.tiktok.com/@learnwithenergyandfun' style={{color: 'white'}}> TikTok</Button>
            <Button href='https://www.instagram.com/maryan_mohamuud1/?hl=ru'> <Instagram className='icons'/></Button> 
        </Container>        
    </div>
  )
}
