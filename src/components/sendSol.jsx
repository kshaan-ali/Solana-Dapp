import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { LAMPORTS_PER_SOL, PublicKey, SystemProgram, Transaction } from '@solana/web3.js';
import React, { useState } from 'react'

function SendSol() {
    const wallet=useWallet();
    const connection=useConnection()
    const [addr,setAddr]=useState('')
    const [amnt,setAmnt]=useState()
    async function send() {
        const txn=new Transaction();
        txn.add(SystemProgram.transfer({
            fromPubkey: wallet.publicKey,
            toPubkey: new PublicKey(addr),
            lamports: amnt * LAMPORTS_PER_SOL,
        }))
        await wallet.sendTransaction(txn, connection.connection);
        alert("Sent " + amnt + " SOL to " + addr);
    }
    
  return (
    <main className=" m-5 items-start">
      <h1 className="flex justify-start text-xl bg-violet-800 text-white p-2 rounded-sm w-5/6 font-mono font-bold">Send solana
        </h1>
      <div className="flex justify-center items-center w-3/4">
        <div className="mx-5 my-2">
          <input
            onChange={function (i) {
                setAddr(i.target.value);
            }}
            className="text-xl rounded-lg p-3 w-full m-2"
            type="text"
            placeholder="receiver address"
          />
          <input
            onChange={function (i) {
                setAmnt(Number(i.target.value));
            }}
            className="text-xl rounded-lg p-3 w-full m-2"
            type="number"
            placeholder="amount in sol"
          />
        </div>
       
        
        <div>
          <button onClick={send}
            
            className="text-xl w-36 bg-white rounded-lg m-4 p-3  font-mono font-bold"
          >
            Send
          </button>
        </div>
      </div>
    </main>
  )
}

export default SendSol