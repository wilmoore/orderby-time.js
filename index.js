'use strict'

/*!
 * imports.
 */

var curry2 = require('curry2')
var selectn = require('selectn')

/*!
 * exports.
 */

module.exports = curry2(order)

/**
 * Curried function returning a new array sorted by time without mutating the original array.
 *
 * @param {String} [path]
 * Dot or bracket-notation object path string.
 *
 * @param {Array} list
 * Array to sort.
 *
 * @return {Array}
 * Array sorted by time.
 */

function order (path, list) {
  return [].concat(list).sort(function sort (a, b) {
    return (new Date(path ? selectn(path, a) : a).getTime()) - (new Date(path ? selectn(path, b) : b).getTime())
  })
}
