import React from 'react';
import '../sass/main.scss';
import  { Typography, Button }  from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { useState } from 'react';

export default function Header() {
    const [isNavOpen,setIsNavOpen] = useState(false);
    function toggleNav(e) {
        e.preventDefault();
        setIsNavOpen(!isNavOpen);
        console.log(isNavOpen)
    }
  return (
    <header className='header'>
            <div className='logoAndIcon'>
                <Typography variant='h5' className='logoName'>maryan</Typography>
                <Menu className='menuIcon' onClick={toggleNav}/> 
            </div>
            <nav className={'nav ' + (isNavOpen ? 'showNav' : 'hideNav')}>
                <div className='n'>                        
                    <Close className='closeIcon' onClick={toggleNav}/>
                </div>
                <div className='nav-items'>
                    <Button href='./about' className="nav-links">about</Button>
                    <Button href='./projects' className="nav-links">projects</Button>
                    <Button className="nav-links">challenges</Button>
                    <Button className="nav-links">skills</Button>
                    <Button className="nav-links">contact</Button>
                    <Button className="nav-links resume" variant='outlined' >resume</Button> 
                </div>
            </nav>
    </header>
  )
}
