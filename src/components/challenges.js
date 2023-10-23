import React from 'react'
import { Typography, Button } from '@mui/material'
import { Code } from '@mui/icons-material'
import img1 from '../images/space-tourism.PNG';
import img2 from '../images/card-details.PNG';
import img3 from '../images/easy-bank.PNG';


export default function Challenges() {
  return (
    <div className='challengesContainer' id='challenges'>
        <Typography variant='h5' className='title'>mini-projects</Typography>
        <div className='challengesSubCont'>
            <div className='challengesItems'>
                <Typography variant='h6' className='challengesMinTitles'>space-tourism-website</Typography>
                <div className='imgSection'>
                    <img src={img1} alt='project-image'/>
                </div>
                <Typography className='challengesParagraphs'>Space Tourism Website: 
                    Embark on a cosmic journey with this captivating multi-page 
                    exploration of space tourism. Building this project as a beginner
                    9 months ago was an exhilarating experience
                </Typography>
                <div className='links'>
                    <Button className='demo' variant='outlined' href='https://maryan121.github.io/space-tourism-website/'>demo</Button>
                    <Button className='code' variant='outlined' href='https://github.com/Maryan121/space-tourism-website'><Code />code</Button>
                </div>
            </div>
            <div className='challengesItems leftsideItems'>
                <Typography variant='h6' className='challengesMinTitles'>interActive details form</Typography>
                <div className='imgSection'>
                    <img src={img2} alt='project-image'/>
                </div>
                <Typography className='challengesParagraphs'>Interactive Card Details Form: 
                    Elevating the user experience with a cutting-edge, bank-inspired 
                    card details form featuring interactive design and robust form validation 
                    for a seamless experience.
                </Typography>
                <div className='links'>
                    <Button className='demo' variant='outlined' href='https://maryan121.github.io/interactive-card-details/'>demo</Button>
                    <Button className='code' variant='outlined' href='https://github.com/Maryan121/interactive-card-details'>code</Button>
                </div>
            </div>
            <div className='challengesItems '>
                <Typography variant='h6' className='challengesMinTitles'>Easy-bank-landingpage</Typography>
                <div className='imgSection'>
                    <img src={img3} alt='project-image'/>
                </div>
                <Typography className='challengesParagraphs'>Easy Bank Landing Page: 
                    A clean and modern landing page 
                    design for a fictitious banking website, showcasing responsive 
                    and user-friendly web development skills. Building it was quite fun!
                </Typography>
                <div className='links'>
                    <Button className='demo' variant='outlined' href='https://maryan121.github.io/easybank-landingpage/'>demo</Button>
                    <Button className='code' variant='outlined' href='https://github.com/Maryan121/easybank-landingpage'>code</Button>
                </div>
            </div>
        </div>
            
    </div>
  )
}
