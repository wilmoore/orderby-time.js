'use strict'

/*!
 * imports.
 */

var test = require('tape-catch')

/*!
 * imports (local).
 */

var order = require('./')

/*!
 * fixtures.
 */

var todos = [
  { name: 'Do something 03', date: '2015-10-21T06:01:47.427Z' },
  { name: 'Do something 01', date: '2015-08-05T01:00:00.007Z' },
  { name: 'Do something 02', date: '2015-10-20T06:01:47.427Z' }
]

var ordered = [
  { name: 'Do something 01', date: '2015-08-05T01:00:00.007Z' },
  { name: 'Do something 02', date: '2015-10-20T06:01:47.427Z' },
  { name: 'Do something 03', date: '2015-10-21T06:01:47.427Z' }
]

/*!
 * tests.
 */

test('orderByTime()', function (t) {
  t.notDeepEqual(todos, ordered, 'original and ordered lists do not match to start')
  t.deepEqual(order('date', todos), ordered, 'sorting original list returns list that matches expected order')
  t.notDeepEqual(todos, ordered, 'post-sorting does not mutate original list')
  t.end()
})
