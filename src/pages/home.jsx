import React from 'react'
import HeroSection from '../component/heroSection'
import AiTypes from '../component/aiTypes'
import AiBenefits from '../component/aiBenefits'
import Contact from '../component/contact'
import NavBar from '../component/navBar'
import Footer from '../component/footer'

export default function Home() {
  return (
    <>
    <NavBar/>
    <main>
        <HeroSection/>
        <AiTypes/>
        <AiBenefits/>
        <Contact/>
    </main>
    <Footer/>
    </>
  )
}
