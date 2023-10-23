import React from 'react'
import {FaCanadianMapleLeaf } from 'react-icons/fa';
import { Typography } from '@mui/material';

export default function Skills() {
  return (
    <div className='skillsContainer' id='skills'>
        <FaCanadianMapleLeaf className='leaveIcon'/>
        <Typography className='skillsTitle' variant='h4'>skills</Typography>
        <div className='subCont'>
            <div className='skillIcons'><Typography className='typog'>HTML</Typography></div>
            <div className='skillIcons'><Typography className='typog'>CSS</Typography></div>
            <div className='skillIcons'><Typography className='typog'>JAVASCRIPT</Typography></div>
            <div className='skillIcons'><Typography className='typog'>REACT</Typography></div>
            <div className='skillIcons'><Typography className='typog'>SASS</Typography></div>
            <div className='skillIcons'><Typography className='typog'>BOOTSTRAP</Typography></div>
            <div className='skillIcons'><Typography className='typog'>material-UI</Typography></div>
            <div className='skillIcons'><Typography className='typog'>GIT</Typography></div>
            <div className='skillIcons'><Typography className='typog'>NPM/YARN</Typography></div>
            <div className='skillIcons'><Typography className='typog'>GITHUB</Typography></div>
        </div>
    </div>
  )
}
