import React from 'react'
import { Button,Typography,Grid } from '@mui/material';
import {  Code, Language, SyncAlt } from '@mui/icons-material';
import { FaList } from 'react-icons/fa';

import data from './data/projectsData';


export default function Projects() {

  return (
    <main className='main' id='projects'>
      <Typography className='title' variant='h5' ><FaList /> projects</Typography>
          <div className='cont'>
            {data.map((projectData) => {
            return(
              <section className='cotainer' key={projectData.id}>
                <video autoPlay muted className={`video ${projectData.leftSideVideo}`}>
                  <source src={projectData.video} type="video/mp4" />
                </video>
                <div className={`description ${projectData.leftSideDescr}`}>
                  <Typography className='minTitles' variant='h6' >{projectData.title}</Typography>
                  <Typography  className='projectDesc'>
                    {projectData.description}
                  </Typography>
                  <div className='links'>
                    <Button href={projectData.demoLink}  className='link demo' variant='outlined'> <Language style={{paddingRight: '4px'}} /> demo</Button>
                    <Button href={projectData.codeLink}  className='link code' variant='outlined'> <Code style={{paddingRight: '4px'}}/> code</Button>
                  </div>
                </div> 
              </section>
            )
          })}
          </div>
    </main>
  )
}
