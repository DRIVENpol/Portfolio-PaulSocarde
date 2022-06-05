import { PlusSmIcon } from '@heroicons/react/solid'

export default function HeroBanner() {
    return (
    <div className="text-center
    bg-slate-400 dark:bg-slate-700
    text-white px-5 py-5">
       <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800 ml-3 mt-10">
        <svg className="mr-1.5 h-2 w-2 text-red-400" fill="currentColor" viewBox="0 0 8 8">
          <circle cx={4} cy={4} r={3} />
        </svg>
        Not Connected
      </span>
    <p className="text-4xl font-poppins font-semibold mt-10">👋🏻 Hello, World!</p>
    <p className="text-2xl font-poppins mt-5 mb-20 font-normal">My name is Paul Socarde! Welcome to my playground!</p>
    <p className="text-xl font-poppins mt-5 font-light">As I don't want to waste your time or get you bored, this portfolio will be a little bit different than what you saw until now.</p>
    <p className="text-xl font-poppins mt-5 mb-20 font-light">So please connect your wallet using Rinkeby Testnet, get some ETH from faucet and enjoy!</p>

    <button
                    type="button"
                    className="relative mb-20 inline-flex items-center 
                    px-8 py-3 border border-transparent shadow-sm text-sm 
                    font-medium rounded-md text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:outline-none focus:ring-2 
                    focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500
                    "
                  >
                    <span>Connect your wallet</span>
    </button>
    </div>
    )
  }