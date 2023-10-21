import React from 'react'
import { Container } from '@mui/material';
import { LinkedIn, Instagram, GitHub } from '@mui/icons-material'
import { FaTiktok } from 'react-icons/fa' 

export default function MediaIcons() {
  return (
    <div className='container'> 
        <Container className='innerCont'> 
            <GitHub  className='icons'/>
            <FaTiktok className='icons'/>
            <Instagram className='icons'/>
        </Container>        
    </div>
  )
}
