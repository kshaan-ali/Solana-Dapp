import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
import React, { useState } from "react";

function Airdrop() {
  const wallet = useWallet();
  const connection = useConnection();
  const [amnt, setAmnt] = useState(0);
  return (
    <main className=" m-5 items-start">
      <h1 className="flex justify-start text-xl bg-violet-800 text-white p-2 rounded-sm w-5/6 font-mono font-bold">
        Faucet 
      </h1>
      <div className="flex items-center">
        <div className="mx-5">
          <input
            className="text-xl rounded-lg p-3 w-full m-2 "
            type="number"
            placeholder="Enter amount in Sol "
            onChange={function (i) {
              setAmnt(Number(i.target.value) * LAMPORTS_PER_SOL);
            }}
          />
        </div>
        <div>
          <button
            className="text-xl w-36 bg-white rounded-lg m-4 p-3 font-mono font-bold"
            onClick={async function () {
              console.log(typeof amnt);
              const a = await connection.connection.requestAirdrop(
                wallet.publicKey,
                amnt
              );
              alert(a, "given");
            }}
          >
            Collect
          </button>
        </div>
      </div>
    </main>
  );
}

export default Airdrop;
