import { jsx } from 'react/jsx-runtime';
import Box from '@mui/material/Box';
export { default as MenuIcon } from '@mui/icons-material/Menu';
export { AppBar, Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, FormControl, Grid, IconButton, ImageList, ImageListItem, Input, InputAdornment, InputLabel, Stack, TextField, ThemeProvider, Toolbar, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

var HelloWorld = function () {
    return jsx("h1", { children: "Hello World" });
};

var SimpleNestedComponent = function () { return jsx(Box, { children: "Hello" }); };

var theme = createTheme({
    palette: {
        primary: green,
        secondary: purple
    }
});

export { HelloWorld, SimpleNestedComponent, theme };
