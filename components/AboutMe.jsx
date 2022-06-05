import React from "react"

import Emoji from "../images/emoji.png"

export default function AboutMe() {
    return (
    <div id="about" className="text-center
    bg-slate-300 dark:bg-slate-600
    text-slate-600 dark:text-white px-5 py-20">
    <img
        className="inline-block h-140 w-140 rounded-full"
        src={Emoji.src} width={300} height={300}
        alt=""
      />
    <p className="text-4xl font-poppins font-semibold mt-10">About Me!</p>

    <span className="relative z-0 inline-flex shadow-sm rounded-md mt-3">
      <button
        type="button"
        className="relative inline-flex items-center px-4 py-2 rounded-l-md border 
        dark:border-gray-400 border-gray-400 
        bg-gray-200 dark:bg-black text-sm font-medium text-gray-700 hover:bg-white dark:hover:bg-gray-800 
        focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
      >
        <a href="https://twitter.com/polthedev" target="_blank">Twitter</a>
      </button>
      <button
        type="button"
        className="-ml-px relative inline-flex items-center px-4 py-2 border dark:border-gray-400 border-gray-400 
        bg-gray-200 dark:bg-black text-sm font-medium text-gray-700 hover:bg-white dark:hover:bg-gray-800  focus:z-10 focus:outline-none 
        focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
      >
        <a href="https://www.linkedin.com/in/socardepaul/" target="_blank">LinkedIn</a>
      </button>
      <button
        type="button"
        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border dark:border-gray-400 border-gray-400 
        bg-gray-200 dark:bg-black text-sm font-medium text-gray-700 hover:bg-white dark:hover:bg-gray-800  focus:z-10 focus:outline-none 
        focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 dark:text-white"
      >
        <a href="https://github.com/DRIVENpol" target="_blank">Github</a>
      </button>
      
    </span>
    <p className="text-3xl font-poppins mt-5 font-semibold">Entrepreneur, former tennis player & Web3 developer!</p>
    <p className="font-poppins mt-5 font-extralight">After I decided to end up my 6-years-old marketing career (2021) I started to study the
    technology behind blockchain (especially Web3). </p>
    
    <p className="font-extralight">Wasn't an easy step but not as hard as I thought: as 
    I had a background in some programming languages such as JavaScript, Python, C++ and SQL, was easy for me to
    get comfortable with Solidity and Web interfaces.</p>

    <p className="font-extralight">Since May 2021, there was no day without coding or researching. As well, I started my own DeFi project:&nbsp;
    <a href="https://www.drivenecosystem.com/" target="_blank" className="underline">DRIVENecosystem</a>&nbsp; for which I am still working with my amazing team.</p>
<p>But don't worry: I have enough time for your project too!</p>
<br />
    <p className="text-3xl font-poppins mt-5 font-semibold mt-10">How could I be a good choice for your project?</p>
    <p className="font-light mt-2">To be a project owner is not easy: programming skills are not enough.
    You need to be good (and/or willing to become better) at marketing, communication, management and relationships
    </p>
    
    <p className="font-light">because those are the key metrics for your project's success!</p>
    <br />
    <p className="font-light">So even if you are looking only for a developer, I want you to know that
    I can help you with a lot of things beside DAPP development.</p>

    <p  id="skills" className="font-light mb-20">If I can't help you direclty, for sure I know the right person that could do so!</p>
    </div>
    )
  }