import { useWallet } from "@solana/wallet-adapter-react";
import React, { useState } from "react";

function Signmessage() {
  const [msg, setMsg] = useState("");
  const wallet = useWallet();
  async function sign() {
    if (!wallet.publicKey) {
      alert("wallet not connencted");
    } else if (!wallet.signMessage) {
      alert("wallet not supported");
    } else {
      const encodedMessage = new TextEncoder().encode(msg);
      const signature = await wallet.signMessage(encodedMessage);
      alert("msg,signed");
    }
  }
  return (
    <main className=" m-5 items-start">
      <h1 className="flex justify-start text-xl bg-violet-800 text-white p-2 rounded-sm w-5/6 font-mono font-bold">Sign Message
        </h1>
      <div className="flex justify-center items-center">
        <div className="mx-5">
          <input
            onChange={function (i) {
              setMsg(i.target.value);
            }}
            className="text-xl rounded-lg p-3 w-full m-2"
            type="text"
            placeholder="write a message"
          />
        </div>
        <div>
          <button
            onClick={sign}
            className="text-xl w-36 bg-white rounded-lg m-4 p-3  font-mono font-bold"
          >
            Sign
          </button>
        </div>
      </div>
    </main>
  );
}

export default Signmessage;
