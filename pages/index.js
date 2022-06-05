import React, { useState } from "react"

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import HeroBanner from '../components/HeroBanner'
import ContentNormal from '../components/ContentNormal'
import DappFetcher from "../components/DappFetcher"

export default function Home() {

  const [isDapp, setIsDapp] = useState(false);

  const changeContent = () => {
    if(isDapp === false) {
      setIsDapp(true);
    } else {
      setIsDapp(false);
    }
  }

  return (
   <>
    <Navbar />
    <HeroBanner changeContent={changeContent} isDapp={isDapp} />
    {!isDapp ? (<ContentNormal />): (<DappFetcher />)}
    <Footer />
   </>
  )
}
