import React from "react"
import Article from "./Article"

export default function Articles() {
    const articles = [
        {
        title: 'Subscription-Based Smart Contract - Creation & Implementation', 
        description: 'Create a subscription-based smart contract. Accept native token payments and ERC20 payments from your users.',
        link:'https://medium.com/@psocarde/subscription-based-smart-contract-ca89347a15d1',
        image:'https://miro.medium.com/max/700/1*sTeZBu9d18R-ad6Qupl1Rw.png'},

        { 
        title: 'Your First Solidity Smart Contract: The PiggyBank — Part 2',
        description: 'How to deploy and test your smart contract on a local test network and on Rinkeby testnet using Remix.',
        link:'https://medium.com/@psocarde/your-first-solidity-smart-contract-the-piggybank-part-2-48f712e5fcc4',
        image:'https://miro.medium.com/max/1400/1*QQEOxVRsi7XPf-GQLjcMdQ.png'},

        {
        title: 'Your First Solidity Smart Contract: The PiggyBank — Part 1',
        description: 'How to write and compile your first complex smart contract using Remix By Ethereum.',
        link:'https://medium.com/@psocarde/your-first-smart-contract-part-1-328b7ec4dea0',
        image:'https://miro.medium.com/max/700/1*UiXN6oJR91F3xjQ8RKB4tQ.png'},

      ];

    return (
    <div id="about" className="text-center
    bg-slate-300 dark:bg-slate-600
    text-slate-600 dark:text-white px-5 py-20">
     <p className="text-4xl font-poppins font-semibold mt-10">📰 My latest articles!</p>
     <p className="font-poppins mt-3 font-light">Sometimes I like to write - either tutorials, either documentation on a project that I create. </p>
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 mt-10">
    {articles.map((article, i) => (
        <Article id={i} t={article.title} d={article.description} l={article.link} i={article.image} />
    ))}
    </div>
    </div>
    )
  }