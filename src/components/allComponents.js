import React from 'react'
import '../sass/main.scss';
import ImageSlider from './imageSlider/imageSlider';
import ArrowComponent from './arrowComponent/arrowComponent';
import Header from './header'
import About from './about'
// import MediaIcons from './mediaIcons'
import Projects from './projects'
import Challenges from './challenges'
import Skills from './skills'
import Contact from './contact'
import Footer from './footer'




export default function AllComponents() {
  return (
    <div>
      <ImageSlider />
      <ArrowComponent />
      <Header />
      <About />
      <Projects />
      <Challenges />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
