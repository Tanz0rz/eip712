"use strict";
exports.__esModule = true;
exports.hello = void 0;
var WORLD = 'world';
function hello(world) {
    if (world === void 0) { world = WORLD; }
    return "Hello ".concat(world, "! ");
}
exports.hello = hello;
console.log('printing');
console.log(hello('ok'));
