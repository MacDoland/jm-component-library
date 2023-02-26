import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";

const Banner = () => {
  const itemData = [
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <img
              src={item.img}
              srcSet={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Banner;