/**
 * 
 * 1) create package.json
 * > npm init 
 * 
 * 2) add lodash from terminal
 * > npm install --save lodash 
 * 
 * 3) check package.json
 */

var _ = require('lodash');


words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

console.log(_.first(words));
console.log( _.last(words));