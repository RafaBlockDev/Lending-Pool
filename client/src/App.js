import React from 'react'
import { ethers } from "ethers";

function App() {

  const provider = new ethers.providers.Web3Provider(window.ethereum, "Connected!!!!");

  return (
    <div>App</div>
  )
}

export default App