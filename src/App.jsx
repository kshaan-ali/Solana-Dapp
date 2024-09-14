import { useState } from "react";
import "./App.css";
import React, { FC, useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
  WalletConnectButton,
} from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import Airdrop from "./components/airdrop";
import "@solana/wallet-adapter-react-ui/styles.css";
import Balance from "./components/balance";
import Signmessage from "./components/signmessage";
import SendSol from "./components/sendSol";

function App() {
  return (
    <div>
      <center>
        <ConnectionProvider
          endpoint={
            "https://solana-devnet.g.alchemy.com/v2/abvdfUYe8HP7VClEFaa5AsyssvEvtCy3"
          }
        >
          <WalletProvider wallets={[]} autoConnect>
            <WalletModalProvider>
              <div className="text-4xl flex justify-between items-center font-bold bg-zinc-900 p-4 text-white">
                <div className="mx-8">Dapp</div>
                <div className="flex justify-between items-center">
                  <WalletMultiButton className="bg-black" />

                  <Balance></Balance>
                </div>
              </div>
              <div className="flex  flex-col  items-center p-3 bg-zinc-800 min-h-screen">
                <div className="flex items-center "></div>

                <Airdrop></Airdrop>
                <div>
                  <Signmessage></Signmessage>
                </div>
                <div>
                  <SendSol></SendSol>
                </div>
              </div>
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
      </center>
    </div>
  );
}

export default App;
