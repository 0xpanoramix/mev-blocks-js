# mev-blocks-js

This package can let you query the [Flashbots blocks API](https://blocks.flashbots.net/) easily from any JavaScript or TypeScript project.

You can access the Flashbots blocks and transactions using two lines of code only !

## How does it work ?

Under the hood, it queries the [Flashbots blocks API](https://blocks.flashbots.net/) and returns the result with strong type support.

Please be careful, as you may be limited by the Flashbots server when performing to many request per second.

## Getting started !

### Installation

You just have to run the following command:

```shell
yarn add mev-blocks-js
```

### Quickstart

To query the last 100 Flashbots blocks, just include the following lines of code:
````typescript
const requester = new BlockRequester();
const res = await requester.GetBlocks();
````

To query the last 100 Flashbots transactions, just include the following lines of code:
````typescript
const requester = new BlockRequester();
const res = await requester.GetTransactions();
````

You can provide filters when calling the getters. Below, the requester will return the last 2 Flashbots transactions, before block number 11999806:
````typescript
const requester = new BlockRequester();
const res = await requester.GetTransactions({
    before: 11999806,
    limit: 2,
});
````

## Author

Made with ❤️ by 🤖 [Luca Georges François](https://github.com/PtitLuca) 🤖
