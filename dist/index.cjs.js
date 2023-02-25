'use strict';

var jsxRuntime = require('react/jsx-runtime');
var material = require('@mui/material');

var HelloWorld = function () {
    return jsxRuntime.jsx("h1", { children: "Hello World" });
};

Object.defineProperty(exports, 'Button', {
    enumerable: true,
    get: function () { return material.Button; }
});
exports.HelloWorld = HelloWorld;
