# @bemoje/arr-swap

Swap array elements in place. Runtime: O(1)

#### Version

<span><a href="https://npmjs.org/@bemoje/arr-swap" title="View this project on NPM"><img src="https://img.shields.io/npm/v/@bemoje/arr-swap" alt="NPM version" /></a></span>

#### Travis CI

<span><a href="https://npmjs.org/@bemoje/arr-swap" title="View this project on NPM"><img src="https://travis-ci.org/bemoje/bemoje-arr-swap.svg?branch=master" alt="dependencies" /></a></span>

#### Dependencies

<span><a href="https://npmjs.org/@bemoje/arr-swap" title="View this project on NPM"><img src="https://david-dm.org/bemoje/bemoje-arr-swap.svg" alt="dependencies" /></a></span>

#### Stats

<span><a href="https://npmjs.org/@bemoje/arr-swap" title="View this project on NPM"><img src="https://img.shields.io/npm/dt/@bemoje/arr-swap" alt="NPM downloads" /></a></span>
<span><a href="https://github.com/bemoje/bemoje-arr-swap/fork" title="Fork this project"><img src="https://img.shields.io/github/forks/bemoje/bemoje-arr-swap" alt="Forks" /></a></span>

#### Donate

<span><a href="https://www.buymeacoffee.com/bemoje" title="Donate to this project using Buy Me A Beer"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-donate-yellow.svg?label=Buy me a beer!" alt="Buy Me A Beer donate button" /></a></span>
<span><a href="https://paypal.me/forstaaloen" title="Donate to this project using Paypal"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg?label=PayPal" alt="PayPal donate button" /></a></span>

## Installation

```sh
npm install @bemoje/arr-swap
npm install --save @bemoje/arr-swap
npm install --save-dev @bemoje/arr-swap
```

## Usage

```javascript
import arrSwap from '@bemoje/arr-swap'

const arr = [10, 20]

arrSwap(arr, 0, 1)

console.log(arr)
//=> [20, 10]

```


## Tests
Uses *Jest* to test module functionality. Run tests to get coverage details.

```bash
npm run test
```

## API
### arrSwap

Swap array elements in place. Runtime: O(1)

##### Parameters

-   `arr` **[array][3]** to be modified

-   `from` **[number][4]** index of the first element

-   `to` **[number][4]** index of the 2nd element

##### Returns
**void** 

[1]: #arrswap

[2]: #parameters

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number