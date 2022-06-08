import React, { useState, useEffect } from 'react'

import { networkParams } from "./dapps/Utils/Networks";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { providerOptions } from "./dapps/Utils/providerOptions";

import ConnectSection from './dapps/ConnectSection'
import CreateERC20 from './dapps/CreateERC20';
import NftCollection from './dapps/NFTcollection';
import TokenLocker from './dapps/TokenLocker'
import Stake from './dapps/Stake';

const DappFetcher = () => {
    const [provider, setProvider] = useState();
    const [library, setLibrary] = useState();
    const [account, setAccount] = useState();
    const [signature, setSignature] = useState("");
    const [isError, setError] = useState("");
    const [chainId, setChainId] = useState();
    const [network, setNetwork] = useState();
    const [message, setMessage] = useState("");
    const [signedMessage, setSignedMessage] = useState("");
    const [verified, setVerified] = useState();

    const [tokenName, setTokenN] = useState('');
    const [tokenSymbol, setTokenSy] = useState('');
    const [tokenSupply, setTokenSu] = useState();

    const [isNotif, setIsNotif] = useState(false);

    const manipulateNotif = async() => {
      setIsNotif(true);
      await sleep(50000);
      setIsNotif(false);
  }

    const erc20Factory = "0x778E1337F8B05B3A69551a01f03004a9D3118a27";

    const pull_data = (data1, data2, data3) => {
      setTokenN(data1);
      setTokenSy(data2);
      setTokenSu(data3);
    }

    console.log("[DappFetcher.js] Name: " + tokenName);
    console.log("[DappFetcher.js] Symbol: " + tokenSymbol);
    console.log("[DappFetcher.js] Supply: " + tokenSupply);
    console.log("[DappFetcher.js] Account: " + account);

    const createErc20 = async () => {
      if (typeof window !== 'undefined'){
        try {
          
          const { ethereum } = window;
          const provider = new ethers.providers.Web3Provider(ethereum);
          const signer = provider.getSigner();
  
          setProvider(provider);
          setLibrary(library);
  
          const abi = ["function createToken(string memory _name, string memory _symbol, uint256 _supply) public"]
          const connectedContract = new ethers.Contract(erc20Factory, abi, signer);
  
  
          let _createERC20 = await connectedContract.createToken(tokenName, tokenSymbol, tokenSupply, {gasLimit:6000000});
          await _createERC20.wait();
          manipulateNotif();

  
          console.log(_createERC20);
          console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${_createERC20.hash}`);
          setTransaction(`https://rinkeby.etherscan.io/tx/${_createERC20.hash}`);
  
  
        } catch (error) {
          setError(error);
        }
      }
     
    };

    const connectWallet = async () => {
        if (typeof window !== 'undefined'){
          try {
            const web3Modal = new Web3Modal({
              cacheProvider: true, // optional
              providerOptions // required
            });
    
            
            const provider = await web3Modal.connect();
            const library = new ethers.providers.Web3Provider(provider);
            const accounts = await library.listAccounts();
            const network = await library.getNetwork();
            setProvider(provider);
            setLibrary(library);
            if (accounts) setAccount(accounts[0]);
            setChainId(network.chainId);
    
          } catch (error) {
            setError(error);
          }
        }
       
      };
    
      const handleNetwork = (e) => {
        const id = e.target.value;
        setNetwork(Number(id));
      };
    
      const handleInput = (e) => {
        const msg = e.target.value;
        setMessage(msg);
      };
    
      const switchNetwork = async () => {
        try {
          await library.provider.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: toHex(network) }]
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            try {
              await library.provider.request({
                method: "wallet_addEthereumChain",
                params: [networkParams[toHex(network)]]
              });
            } catch (error) {
              setError(error);
            }
          }
        }
      };
    
      const signMessage = async () => {
        if (!library) return;
        try {
          const signature = await library.provider.request({
            method: "personal_sign",
            params: [message, account]
          });
          setSignedMessage(message);
          setSignature(signature);
        } catch (error) {
          setError(error);
        }
      };
    
      const verifyMessage = async () => {
        if (!library) return;
        try {
          const verify = await library.provider.request({
            method: "personal_ecRecover",
            params: [signedMessage, signature]
          });
          setVerified(verify === account.toLowerCase());
        } catch (error) {
          setError(error);
        }
      };
    
      const refreshState = () => {
        setAccount();
        setChainId();
        setNetwork("");
        setMessage("");
        setSignature("");
        setVerified(undefined);
       
      };
    
      const disconnect = async () => {
        const web3Modal = new Web3Modal({
          cacheProvider: true, // optional
          providerOptions // required
        });
        await web3Modal.clearCachedProvider();
        refreshState();
      };
    
      useEffect(() => {
        const web3Modal = new Web3Modal({
          cacheProvider: true, // optional
          providerOptions // required
        });
        if (web3Modal.cachedProvider) {
          connectWallet();
         
        } 
      }, []);
    
      useEffect(() => {
          
        if (provider?.on) {
          const handleAccountsChanged = (accounts) => {
            console.log("accountsChanged", accounts);
            if (accounts) setAccount(accounts[0]);
          };
    
          const handleChainChanged = (_hexChainId) => {
            setChainId(_hexChainId);
          };
    
          const handleDisconnect = () => {
            console.log("disconnect", error);
            disconnect();
          };
    
          provider.on("accountsChanged", handleAccountsChanged);
          provider.on("chainChanged", handleChainChanged);
          provider.on("disconnect", handleDisconnect);
    
          return () => {
            if (provider.removeListener) {
              provider.removeListener("accountsChanged", handleAccountsChanged);
              provider.removeListener("chainChanged", handleChainChanged);
              provider.removeListener("disconnect", handleDisconnect);
            }
          };
        }
      }, [provider]);
    
      useEffect(() => {
        if (window.ethereum){
          setProvider(new ethers.providers.Web3Provider(window.ethereum))
        } else {
          setProvider(providerOptions.walletconnect)
        }
    }, []);

  return (
    <>
        <ConnectSection cw={connectWallet} ac={account} />
        <CreateERC20 ac={account} pd={pull_data} c={createErc20} />
        <NftCollection ac={account} />
        <TokenLocker ac={account} />
        <Stake ac={account} />
    </>
  )
}

export default DappFetcher