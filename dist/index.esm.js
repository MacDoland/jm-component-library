import { jsxs, jsx } from 'react/jsx-runtime';
import { Box, AppBar, Toolbar, IconButton, Typography, Button, ImageList, ImageListItem } from '@mui/material';
export { Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, FormControl, Grid, Input, InputAdornment, InputLabel, Stack, TextField, ThemeProvider, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

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
    return (jsxs(Box, __assign({ sx: { flexGrow: 1 } }, { children: [jsx(AppBar, __assign({ position: "static" }, { children: jsxs(Toolbar, { children: [jsx(IconButton, __assign({ size: "large", edge: "start", color: "inherit", "aria-label": "menu", sx: { mr: 2 } }, { children: jsx(MenuIcon, {}) })), jsx(Typography, __assign({ variant: "h6", component: "div", sx: { flexGrow: 1 } }, { children: "News" })), jsx(Button, __assign({ color: "inherit" }, { children: "Login" }))] }) })), jsx(ImageList, __assign({ sx: { width: 500, height: 450 }, cols: 3, rowHeight: 164 }, { children: itemData.map(function (item) { return (jsx(ImageListItem, { children: jsx("img", { src: item.img, srcSet: item.img, alt: item.title, loading: "lazy" }) }, item.img)); }) }))] })));
};

var HelloWorld = function () {
    return jsx("h1", { children: "Hello World" });
};

var theme = createTheme({
  palette: {
    primary: green,
    secondary: purple
  }
});

export { Banner, HelloWorld, theme };
