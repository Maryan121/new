import React from 'react'
import Header from './header'
import About from './about'
// import MediaIcons from './mediaIcons'
import Projects from './projects'
import Skills from './skills'
import Contact from './contact'

export default function AllComponents() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}
