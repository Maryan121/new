import React from 'react'
import { Button,Typography,Grid } from '@mui/material';
import {  Code, Language, SyncAlt } from '@mui/icons-material';
import { FaList } from 'react-icons/fa';


export default function Projects() {
  return (
    <main className='main'>
      <Typography className='title' variant='h5' ><FaList /> projects</Typography>

      <section className='cotainer' >
          <video autoPlay className='video'>
            <source src='./videos/payApi.mp4' type="video/mp4" />
          </video>
          <div className='description '>
            <Typography className='minTitles' variant='h6' >landing-page</Typography>
            <Typography  className='projectDesc'>
              "PayAPI" is a responsive landing page.
              This project features a clean and user-friendly
              interface, making it easy for users to explore 
              its offerings. It includes multiple pages for presenting
              the features, pricing, and contact information. The project
              is built with HTML, CSS, and JavaScript, ensuring a seamless
              and responsive user experiences.
            </Typography>
            <div className='links'>
              <Button  className='link demo' variant='outlined'> <Language style={{paddingRight: '4px'}} /> demo</Button>
              <Button  className='link code' variant='outlined'> <Code style={{paddingRight: '4px'}}/> code</Button>
            </div>
          </div>
      </section>
    </main>
  )
}
