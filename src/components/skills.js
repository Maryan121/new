import React from 'react'
import { Html, Css, Javascript, GitHub, } from '@mui/icons-material'
import {FaCanadianMapleLeaf, FaBootstrap, FaReact, FaGit, FaNpm, FaHtml5, FaCss3, FaJsSquare, FaYarn, FaSass, FaFileExcel } from 'react-icons/fa';
import { Typography } from '@mui/material';
import leaves from '../leaves.jpg';

export default function Skills() {
  return (
    <div className='skillsContainer'>
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
            {/* <div className='skillIcons'><FaHtml5 /></div>
            <div className='skillIcons'><FaCss3 /></div>
            <div className='skillIcons'><FaJsSquare /></div>
            <div className='skillIcons'><FaReact /></div>
            <div className='skillIcons'><FaSass /></div>
            <div className='skillIcons'><FaBootstrap /></div>
            <div className='skillIcons'><FaGit /></div>
            <div className='skillIcons'><FaNpm /> / <FaYarn style={{fontSize: '75%'}}/></div>
            <div className='skillIcons'><GitHub /></div> */}
        </div>
    </div>
  )
}
