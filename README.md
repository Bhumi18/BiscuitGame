# BiscuitGame 🃏

BiscuitGame is an innovative blockchain-based card game with a 3D frontend, combining the excitement of card matching with the security and transparency of blockchain technology.

## Overview 🌟

BiscuitGame is a decentralized application (DApp) that allows players to participate in a simple yet engaging card game. Players join by paying a small participation fee in Ether, then try their luck at matching two randomly generated card values. If successful, players win double their participation fee!

### Key Features

- Blockchain-based card game ensuring fairness and transparency
- 3D frontend for an immersive card game experience
- Smart contract written in Solidity
- Frontend developed with React.js
- Blockchain integration using Hardhat

## Technology Stack

- Solidity: Smart contract development
- React.js: Frontend framework
- Hardhat: Ethereum development environment
- Ethereum Blockchain: Decentralized platform

## Smart Contract Details

The `Biscuit` smart contract manages the core game logic:

- Players can participate by paying a fee
- Two random card values (represented by codes) are generated for each game
- Winners are determined by matching card values
- Automatic payout system for winners
- Game history tracking for each player

## Getting Started

### Prerequisites

- Node.js and npm
- Metamask or another Web3 wallet
- Some test Ether (for testnet deployment)

### Installation

1. Clone the repository: git clone https://github.com/yourusername/BiscuitGame.git

2. Install dependencies: cd BiscuitGame
                         npm install

3. Deploy the smart contract: npx hardhat run scripts/deploy.js --network <your-network>

4. Start the React frontend: npm start

## How to Play 🕹️

1. Connect your Web3 wallet to the application
2. Pay the participation fee to join a game
3. Two random card values will be generated
4. If the card values match, you win!
5. Withdraw your winnings through the smart contract

## Game Mechanics

- The game uses a standard 52-card deck representation
- Card values are generated using a random function in the smart contract
- Matching is based on the card value (Ace, 2, 3, ..., King) regardless of suit
- The game is designed to be provably fair, with all operations executed on the blockchain

## Contributing

We welcome contributions to BiscuitGame! Please feel free to submit issues, create pull requests, or fork the repository to make your own changes.

## Acknowledgements

- OpenZeppelin for smart contract libraries
- Ethereum community for blockchain resources
- Three.js for 3D graphics support

## Contact

For any queries or support, please open an issue in the GitHub repository or contact the maintainers directly.

---

Enjoy playing BiscuitGame and may luck be on your side! 🍀
