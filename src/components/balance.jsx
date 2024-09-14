import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useEffect, useState } from "react";

function Balance() {
    useEffect(function(){
        fbalance()
        setInterval(fbalance,5000)
    })
    
  const connection = useConnection();
  const [balance, setBalance] = useState();
  const wallet = useWallet();
  async function fbalance() {
    if (wallet.publicKey) {
      const bal = await connection.connection.getBalance(wallet.publicKey);
    //   console.log("h")
      setBalance(bal / LAMPORTS_PER_SOL);
    }
  }

  // useEffect(function(){
  //     fbalance()
  // },[wallet])
  
  return <div className="text-white w-3/4  text-xl m-2 bg-violet-800 p-2.5 rounded-sm ">Balance:{balance} sol</div>;
}

export default Balance;
