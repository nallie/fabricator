// Fabricator uses Webpack to bundle modules
// using the CommonJS module syntax
// ------------------------------------------------

// Strict mode changes previously accepted "bad syntax" into real errors.
'use strict';

var vendor = require('./vendor');
console.log('vendor');

vendor.slick();

var myModule = require('./test');
// myModule.foo(); // 'bar'
myModule.tableHide();
