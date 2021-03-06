# Lazy Piping

[![Build Status](https://travis-ci.org/5c077m4n/iterable-ops.svg?branch=master)](https://travis-ci.org/5c077m4n/iterable-ops)
[![Coverage Status](https://coveralls.io/repos/github/5c077m4n/iterable-ops/badge.svg?branch=master)](https://coveralls.io/github/5c077m4n/iterable-ops?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/5c077m4n/iterable-ops/badge.svg?targetFile=package.json)](https://snyk.io/test/github/5c077m4n/iterable-ops?targetFile=package.json)

A tiny package to allow lazy operations on all iterators. The whole point of this package is to allow saving of operations and the only calculating when needed (by calling the `.get()` function).

Just type into the terminal:

```bash
npm install --save lazy-piping
```

Then, in your code itself:

```javascript
const { from, map, filter } = require('lazy-piping');
```

or:

```javascript
import { from, map, filter } from 'lazy-piping';
```

or (as a script in your HTML):

```html
<script src="https://unpkg.com/lazy-piping@latest/packages/lazy-piping.umd/src/index.js"></script>
```

```javascript
const { from, map, filter } = LazyPiping;
```

And you're good to go!

```javascript
from([1, 2, 3, 4, 5, 6, 7, 8])
	.pipe(
		map(x => x * 2),
		filter(x => x % 3)
	)
	.get();
```

**Happy iterating! ;)**
