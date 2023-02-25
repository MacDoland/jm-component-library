'use strict';

var jsxRuntime = require('react/jsx-runtime');

var HelloWorld = function () {
    return jsxRuntime.jsx("h1", { children: "Hello World" });
};

exports.HelloWorld = HelloWorld;
