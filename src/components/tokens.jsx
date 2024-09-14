import { useConnection } from '@solana/wallet-adapter-react'
import React from 'react'

function Tokens() {

const connection=useConnection();

  return (
    <div>Tokens</div>
  )
}

export default Tokens