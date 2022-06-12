import React, { useState } from 'react'
import { ethers } from "ethers";
import { CheckCircleIcon } from '@heroicons/react/solid'
import { XCircleIcon } from '@heroicons/react/solid'
const TokenLocker = (props) => {

  const [tAddress, setTAddress] = useState('');
  const [tAmount, setTAmount] = useState();
  const [tPeriod, setTPeriod] = useState();
  const [tPeriod2, setTPeriod2] = useState();

  const HandleTime = (event) => {
    var t1 = new Date();
    var t2 = new Date(event.target.value);
    setTPeriod2(event.target.value);
    var dif = ( t2.getTime() - t1.getTime() ) / 1000;
    setTPeriod(dif);
    console.log(dif)
  }

  props.pd(tAddress, Number(tAmount), Number(Math.floor(tPeriod / 1000)));

  return (
   <><div className="bg-slate-400 dark:bg-slate-700 px-20 py-20">

    <form>
    <div className="grid gap-6 lg:grid-cols-2 ">
     <div>
        <p className="text-3xl text-white font-poppins pt-5 font-semibold">Lock your tokens</p>
     </div>
     
     <div></div>
     
     <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">Token Address</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
            w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0xab...123" required 
            onChange={(event) => {
                setTAddress(ethers.utils.getAddress(event.target.value));
                }}
            />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-white">Quantity</label>
            <input type="text" id="last_name" className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
            block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="500" required 
            onChange={(event) => {
                setTAmount(event.target.value);
                props.a();
                }}
            />
        </div>

        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-white">Lock Time</label>
            <input type="date" id="first_name" className="bg-gray-50 border border-gray-300 
            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block 
            w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
            dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pick A Date" required 
            onChange={HandleTime}
            />
        </div>

    <div></div>

    <div>
      {props.ac ? (
      <>
        {props.amountApproved >= tAmount ? 
        (<button>Lock</button>) : 
        (<button type="button" onClick={props.approve}>Approve</button>)}
      </>
        ) : 
      (<button>Connect Your Wallet</button>)}
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
            <p>Your locked your tokens until {tPeriod2}!</p>
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

export default TokenLocker