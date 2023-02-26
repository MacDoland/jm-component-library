'use strict';

var jsxRuntime = require('react/jsx-runtime');
var material = require('@mui/material');
var MenuIcon = require('@mui/icons-material/Menu');
var styles = require('@mui/material/styles');
var colors = require('@mui/material/colors');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Banner = function () {
    var itemData = [
        {
            title: "example",
            img: "https://via.placeholder.com/164",
        },
        {
            title: "example",
            img: "https://via.placeholder.com/164",
        },
        {
            title: "example",
            img: "https://via.placeholder.com/164",
        },
        {
            title: "example",
            img: "https://via.placeholder.com/164",
        },
        {
            title: "example",
            img: "https://via.placeholder.com/164",
        },
        {
            title: "example",
            img: "https://via.placeholder.com/164",
        },
        {
            title: "example",
            img: "https://via.placeholder.com/164",
        },
    ];
    return (jsxRuntime.jsxs(material.Box, __assign({ sx: { flexGrow: 1 } }, { children: [jsxRuntime.jsx(material.AppBar, __assign({ position: "static" }, { children: jsxRuntime.jsxs(material.Toolbar, { children: [jsxRuntime.jsx(material.IconButton, __assign({ size: "large", edge: "start", color: "inherit", "aria-label": "menu", sx: { mr: 2 } }, { children: jsxRuntime.jsx(MenuIcon, {}) })), jsxRuntime.jsx(material.Typography, __assign({ variant: "h6", component: "div", sx: { flexGrow: 1 } }, { children: "News" })), jsxRuntime.jsx(material.Button, __assign({ color: "inherit" }, { children: "Login" }))] }) })), jsxRuntime.jsx(material.ImageList, __assign({ sx: { width: 500, height: 450 }, cols: 3, rowHeight: 164 }, { children: itemData.map(function (item) { return (jsxRuntime.jsx(material.ImageListItem, { children: jsxRuntime.jsx("img", { src: item.img, srcSet: item.img, alt: item.title, loading: "lazy" }) }, item.img)); }) }))] })));
};

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
exports.Banner = Banner;
exports.HelloWorld = HelloWorld;
exports.theme = theme;
