import React from 'react'
import { Button,Typography, Container } from '@mui/material';
import MediaIcons from './mediaIcons';
import { HashLink } from 'react-router-hash-link'

export default function About() {
    
  return (
    <div className='aboutCont' id='about'>
        <Container>
            <Typography variant='h4' className='welcomingText' gutterBottom>welcome! to my world of frontend development</Typography>
            <Typography gutterBottom className='aboutParag'>my name is maryan I'm a front end developer with a passion of crafting immersive,
                user-friendly digital experiences. my journey into this exciting realm 
                began a couple of years ago when i fell in love with the idea of bringing
                creativity to life through code.from responsive
                web design to optimizing user interfaces, i thrive on turning ideas into 
                pixel-perfect, dynamic websites that leave a lasting impression.
            </Typography>
            <HashLink to='#contact' style={{textDecoration: 'none'}}><Button variant='outlined' className='contactBtn' gutterBottom>contact me</Button></HashLink>
            <MediaIcons />
            
        </Container>

      
    </div>
  )
}
