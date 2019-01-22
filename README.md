# smart-contract-ui-builder
A universal, client-side GUI for composing, deploying, and interacting with dapps on Ethereum.

Use the default contracts or add your own. Any valid contract will work. All you need is the JSON output from the Solidity compiler.

## Installation & Usage
- Download the repo (branch: `master`)
- `npm install`
- Install and log in to MetaMask
  - smart-contract-ui-builder has only been tested using Chrome
- Select an Ethereum network of your choice
  - For easier testing/development, use `npm run ganache` and connect to
  "Localhost 8545"
- `npm run start`

### Disclaimer
smart-contract-ui-builder is still a prototype. In using it, you will find bugs, missing features, inefficiencies and bad UX. As a developer, you will find ugly hacks in its code.

No security or performance guarantees are made about the default contracts types or any contract or dapp you deploy
or interact with using smart-contract-ui-builder.

use at your own risk.

### Technical Notes
- Many bugs can be resolved by clearing your Chromium browser's local storage.


### Immediate Goals

Before more features are added, smart-contract-ui-builder need work. 

1. Refactor graph backend to use [`graphlib`](https://www.npmjs.com/package/graphlib) instead of the hacky bespoke schema currently in use
	- **Note:** This is a blocker since the graph schema is fundamental to much of smart-contract-ui-builder's functionality
- Refactor Redux middleware from `redux-thunk` to [`redux-saga`](https://www.npmjs.com/package/redux-saga)
	- `redux-saga` was designed precisely to deal with the kind of failure-prone, asynchronous work that smart-contract-ui-builder is rife with
	- **Note:** This is also something of blocker since anything `web3`-related is asynchronous and currently bound up in thunks
- Refactor existing, hacky state-persistence functionality to use [`redux-persist`](https://www.npmjs.com/package/redux-persist), and enable state importing in the process
- Fix testing and error handling
	- Determine testing framework
	- Write Tests
		- Reducer unit tests
		- State persistence tests
		- Component tests
	- Add [`redux-devtools`](https://github.com/reduxjs/redux-devtools) support.
- "Robustifying," a.k.a. undoing/making up for shortcuts taken during early development
	- [`@material-ui`](https://www.npmjs.com/package/@material-ui/core) usage
		- Consistent style management should be enforced, and dead/useless class passing should be minimized
	- Move application logic contained in components into reducers
	- Normalize entire Redux store per [`normalizr`](https://github.com/paularmstrong/normalizr )
	- To find more: `grep -RF 'TODO' smart-contract-ui-builder/src`

### Longer-Term Goals

Reasons to download this repo.

- Add [`drizzle`](https://github.com/trufflesuite/drizzle) support
	- `drizzle` has a ton of awesome features for interacting with `web3` entities
	- This will give the user a live view of the states of their dapps
- Add post-deployment setup workflows to dapp templates
	- For instance, an allowance must be set to enable a crowdsale to spend tokens on the user's behalf after deployment, but this can only be done manually at the moment.
- Allow the usage of already published contracts in dapp templates
- Create bespoke UIs for common contracts, such as ERC20 tokens

# License

MIT