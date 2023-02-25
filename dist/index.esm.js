import { jsx } from 'react/jsx-runtime';
export { Box, Button, Card, CardActions, CardContent, CardMedia, Container, CssBaseline, FormControl, Grid, Input, InputAdornment, InputLabel, Stack, TextField, ThemeProvider, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

var HelloWorld = function () {
    return jsx("h1", { children: "Hello World" });
};

var theme = createTheme({
  palette: {
    primary: green,
    secondary: purple
  }
});

export { HelloWorld, theme };
