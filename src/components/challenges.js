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
                <Typography className='challengesParagraphs'>it is multipage website project which is based on tourism
                    content, again it was perfect project for me at that time and i
                    had quite fun time with completing it.
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
                <Typography className='challengesParagraphs'>this project is from frontend mentor website
                    i participated and completed a while ago, after compleeting i
                    got a good understanding about form validations related topics.
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
                <Typography className='challengesParagraphs'>this project is from frontend mentor website
                    i participated and completed a while ago, after compleeting i
                    got a good understanding about form validations related topics.
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
