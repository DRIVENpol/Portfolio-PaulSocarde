import React from 'react'

const ConnectSection = (props) => {
  return (
    <>
        <div id="about" className="text-center
    bg-slate-300 dark:bg-slate-600
    text-slate-600 dark:text-white px-5 py-20">
    {props.ac ? (
        <>
        <p className="text-3xl font-poppins mt-5 font-semibold">🎉 Congrats!</p>
        <p className="text-xl font-poppins mt-5 font-normal">You are connected: {props.ac} </p>
        </>
    ):(<>
        <p className="text-3xl font-poppins mt-5 font-semibold">Step 1: Connect your wallet</p>
    <button         onClick={props.cw}
                    type="button"
                    className="relative inline-flex items-center px-8 py-4 border border-transparent shadow-sm text-sm font-medium 
                    rounded-md text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl
                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500
                    ml-3 my-10"
                  >
                    <span>Connect your wallet</span>
                  </button>
    </>)}
   
    </div>
    </>
  )
}

export default ConnectSection