'use strict';

var jsxRuntime = require('react/jsx-runtime');
var material = require('@mui/material');
var styles = require('@mui/material/styles');
var colors = require('@mui/material/colors');

var HelloWorld = function () {
    return jsxRuntime.jsx("h1", { children: "Hello World" });
};

var theme = styles.createTheme({
  palette: {
    primary: colors.green,
    secondary: colors.purple
  }
});

Object.defineProperty(exports, 'Box', {
    enumerable: true,
    get: function () { return material.Box; }
});
Object.defineProperty(exports, 'Button', {
    enumerable: true,
    get: function () { return material.Button; }
});
Object.defineProperty(exports, 'Card', {
    enumerable: true,
    get: function () { return material.Card; }
});
Object.defineProperty(exports, 'CardActions', {
    enumerable: true,
    get: function () { return material.CardActions; }
});
Object.defineProperty(exports, 'CardContent', {
    enumerable: true,
    get: function () { return material.CardContent; }
});
Object.defineProperty(exports, 'CardMedia', {
    enumerable: true,
    get: function () { return material.CardMedia; }
});
Object.defineProperty(exports, 'Container', {
    enumerable: true,
    get: function () { return material.Container; }
});
Object.defineProperty(exports, 'CssBaseline', {
    enumerable: true,
    get: function () { return material.CssBaseline; }
});
Object.defineProperty(exports, 'FormControl', {
    enumerable: true,
    get: function () { return material.FormControl; }
});
Object.defineProperty(exports, 'Grid', {
    enumerable: true,
    get: function () { return material.Grid; }
});
Object.defineProperty(exports, 'Input', {
    enumerable: true,
    get: function () { return material.Input; }
});
Object.defineProperty(exports, 'InputAdornment', {
    enumerable: true,
    get: function () { return material.InputAdornment; }
});
Object.defineProperty(exports, 'InputLabel', {
    enumerable: true,
    get: function () { return material.InputLabel; }
});
Object.defineProperty(exports, 'Stack', {
    enumerable: true,
    get: function () { return material.Stack; }
});
Object.defineProperty(exports, 'TextField', {
    enumerable: true,
    get: function () { return material.TextField; }
});
Object.defineProperty(exports, 'ThemeProvider', {
    enumerable: true,
    get: function () { return material.ThemeProvider; }
});
Object.defineProperty(exports, 'Typography', {
    enumerable: true,
    get: function () { return material.Typography; }
});
exports.HelloWorld = HelloWorld;
exports.theme = theme;
