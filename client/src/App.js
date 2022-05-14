import React from 'react'
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "npm install @rainbow-me/rainbowkit wagmi ethers";

import {
  apiProvider,
  configureChains,
  getDefaultWallets,
  RanbowKitProvider,
} from "rainbow-me/rainbowkit";

import { chain, createClient, WagmiProvider } from "wagmi";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.optimism, chain.arbitrum],
  [
    apiProvider.alchemy(process.env.ALCHEMY_ID),
    apiProvider.fallback()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "👨🏻‍💻 Rafa´s Web3 App",
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export const RafaApp = () => {
  return <ConnectButton />;
}

function App() {
  return (
    <WagmiProvider client={wagmiClient}>
      <RanbowKitProvider chains={chains}>
        <RafaApp />
      </RanbowKitProvider>
    </WagmiProvider>
  );
};

export default App