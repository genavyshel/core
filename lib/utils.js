'use strict';

var crypto = require('crypto');

/**
 * Returns the SHA-256 hash of the input
 * @param {String|Buffer} input
 * @returns {String}
 */
module.exports.sha256 = function(input) {
  return crypto.createHash('sha256').update(input).digest('hex');
};

/**
 * Returns the RIPEMD-160 hash of the input
 * @param {String|Buffer} input
 * @returns {String}
 */
module.exports.rmd160 = function(input) {
  return crypto.createHash('rmd160').update(input).digest('hex');
};

/**
 * Returns the next power of two number
 * @param {Number} number
 * @returns {Number}
 */
module.exports.getNextPowerOfTwo = function(num) {
  return Math.pow(2, Math.ceil(Math.log(num) / Math.log(2)));
};