import React from 'react'

function App() {

  const provider = new ethers.providers.Web3Provider(window.ethereum, "Connected!!!!");

  return (
    <div>App</div>
  )
}

export default App