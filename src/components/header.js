import React from 'react';
import '../sass/main.scss';
import  { Typography, Button }  from '@mui/material';
import { Menu, Close } from '@mui/icons-material';
import { useState } from 'react';
import { HashLink } from 'react-router-hash-link'; 

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
                    <HashLink to='#about' > <Button className='nav-links'>about</Button> </HashLink>
                    <HashLink to='#projects' > <Button className='nav-links'>projects</Button> </HashLink>
                    <HashLink to='#challenges' > <Button className='nav-links'>challenges</Button> </HashLink>
                    <HashLink to='#skills' > <Button className='nav-links'>skills</Button> </HashLink>
                    <HashLink to='#contact' > <Button className='nav-links'>contact</Button> </HashLink>
                    <Button href='https://maryan121.github.io/resume/' className="nav-links resume" variant='outlined' >resume</Button> 
                </div>
            </nav>
    </header>
  )
}
