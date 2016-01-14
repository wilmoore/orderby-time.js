# orderby-time
> Curried function returning a new array sorted by time without mutating the original array.

[![Build Status](http://img.shields.io/travis/wilmoore/orderby-time.js.svg)](https://travis-ci.org/wilmoore/orderby-time.js) [![Code Climate](https://codeclimate.com/github/wilmoore/orderby-time.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/orderby-time.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install orderby-time --save
```

> You can also use Duo, Bower or [download the files manually](https://github.com/wilmoore/orderby-time.js/releases).

###### npm stats

[![npm](https://img.shields.io/npm/v/orderby-time.svg)](https://www.npmjs.org/package/orderby-time) [![NPM downloads](http://img.shields.io/npm/dm/orderby-time.svg)](https://www.npmjs.org/package/orderby-time) [![David](https://img.shields.io/david/wilmoore/orderby-time.js.svg)](https://david-dm.org/wilmoore/orderby-time.js)

## API Example

```js
var order = require('orderby-time')
var todos = [
  { name: 'Do something 03', date: '2015-10-21T06:01:47.427Z' },
  { name: 'Do something 01', date: '2015-08-05T01:00:00.007Z' },
  { name: 'Do something 02', date: '2015-10-20T06:01:47.427Z' }
]

order('date', todos)
//=> [ { name: 'Do something 01', date: '2015-08-05T01:00:00.007Z' }, { name: 'Do something 02', date: '2015-10-20T06:01:47.427Z' }, { name: 'Do something 03', date: '2015-10-21T06:01:47.427Z' } ]
```

## API

### `order(path, list)`

###### arguments

 - `path (String)` Dot or bracket-notation object path string.
 - `list (array)` Array to sort.

###### returns

 - `(array)` Array sorted by time.

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/orderby-time.js.svg)](https://github.com/wilmoore/orderby-time.js/blob/master/license)
