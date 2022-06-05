import React from "react"

import Navbar from '../components/Navbar'
import HeroBanner from '../components/HeroBanner'
import AboutMe from "../components/AboutMe"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

export default function Home() {
  return (
   <>
    <Navbar />
    <HeroBanner />
    <AboutMe />
    <Skills />
    <Footer />
   </>
  )
}
