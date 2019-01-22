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


## Contributions and Roadmap

smart-contract-ui-builder is one small part of the wider effort in the Ethereum community to scale the platform and promote blockchain adoption worldwide. If you are interested in the reasoning behind it, see [this Medium article](https://medium.com/pennblockchain/the-case-for-graphical-smart-contract-editors-8e721cdcde93).

# todo
- write immediate goals
- write longer-term goals
- add most critical issues here
- create some issues
- review repo for blocking issues
- make public

### check if this is implemented
- Improve web3 error handling (currently perfunctory/unrealistic)
- Add `load-json-file` once `graceful-fs` has been updated for `create-react-app` compatibility
    - Follow issue at: https://github.com/isaacs/node-graceful-fs/pull/135
- UX
    - Add modal that can only be closed by logging in to MetaMask (check using web3.eth.getAccounts() on a handler for a user-triggered event, like clicking "OK" in the modal)
        - utilize state.web3.ready (a boolean) to accomplish this