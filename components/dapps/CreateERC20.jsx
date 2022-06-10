import React, { useState, useEffect } from 'react'

import { CheckCircleIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'
import { ethers } from "ethers";

const CreateERC20 = (props) => {

    // Token details
    const [tokenName, setTokenName] = useState('');
    const [tokenSymbol, setTokenSymbol] = useState('');
    const [tokenSupply, setTokenSupply] = useState(0);


    // OnChange Handlers
    // const nameChangeHandler = (event) => {
    //     setTokenName(event.target.value);
    // }

    // const symbolChangeHandler = (event) => {
    //     setTokenSymbol(event.target.value);
    // }

    // const supplyChangeHandler = (event) => {
    //     setTokenSupply(event.target.value);
    // }

    // Transfer props to parent
    props.pd(tokenName, tokenSymbol, tokenSupply);
 

  return (
   <>
   <div className="bg-slate-400 dark:bg-slate-700 px-20 py-20">
    <form>
    <div className="grid gap-6 lg:grid-cols-2">
     <div>
        <p className="text-3xl text-white font-poppins pt-5 font-semibold">Create a simple ERC20 Token</p>
     </div>
     <div></div>
     <div>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">Token Name</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
            w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Shiba Inu" required 
            onChange={(event) => {
                setTokenName(event.target.value);
                }}
            />
    </div>

    <div>
        <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-white">Token Symbol</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="$SINU" required
                onChange={(event) => {
                    setTokenSymbol(event.target.value);
                    }}
            />
    </div>

     <div>
        <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">Initial Supply</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
            w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="1000" required 
                onChange={(event) => {
                    setTokenSupply(event.target.value);
                    }}
            />
    </div>

    <div></div>

    <div>
       {props.ac ? ( <button
                    type="button"
                    className="relative inline-flex items-center 
                    px-8 py-3 border border-transparent shadow-sm text-sm 
                    font-medium rounded-md text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500
                    "
                    onClick={props.c}
                  >
                {props.il==true ? ( <svg role="status" className="inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>) : (<span>Deploy</span>)}
               
                   
    </button>) : (<button disabled  type="button"
                    className="relative inline-flex items-center 
                    px-8 py-3 border border-transparent shadow-sm text-sm 
                    font-medium rounded-md text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
    <svg role="status" className="inline w-4 h-4 mr-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
    </svg>
    Please connect your wallet...
                </button>)}
    </div>

<div></div>

{props.err ? ( <div className="rounded-md bg-red-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">Error!</h3>
          <div className="mt-2 text-sm text-red-700">
            <ul role="list" className="list-disc pl-5 space-y-1">
              <li>{props.err}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>):(<div>
{props.in === true ? (
    <>
    <div className="rounded-md bg-green-50 p-8">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-5 w-5 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-green-800">Congrats!</h3>
          <div className="mt-2 text-sm text-green-700">
            <p>Your token is now deployed on Rinkeby Testnet!</p>
          </div>
          <div className="mt-4">
            <div className="-mx-2 -my-1.5 flex">
            <a href={props.tx} target="_blank">
              <button
                type="button"
                className="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600"
              >
                View transaction
              </button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
): null}
</div>)}
        </div>
        </form>
</div>
   </>
  )
}

export default CreateERC20