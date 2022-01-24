import React from "react";

import { makeStyles, AppBar, Box, Toolbar, Typography, Button, IconButton } from "@material-ui/core";
import MenuIcon from '@mui/icons-material/Menu';

// A partir do momento que passamos o parametro theme no makeStyles conseguimos acessar as propriedades css da const theme q está no App.js
// pq isso acontece? Pq no <ThemeProvider /> q está no App.js ele recebe a variavel com as propriedades do tema e repassa essa var para
// seus componentes filhos, dessa forma acessamos qq propriedade com essa sintaxe: "theme.palette.primary.main" como mostra abaixo:
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: "100vh",
  },
  appBar: {
    boxShadow: 'none'
  },
  grow: {
    flexGrow: 1
  }
}));

function Home() {
  // Aqui estamos instanciando a const usestyles para podermos usar ela abaixo
  const classes = useStyles();

  return ( 
  <div className={classes.root}>
      <AppBar color="inherit" className={classes.appBar}>
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
          <div className={classes.grow} />
          <Button color="inherit">FAZER LOGIN</Button>
        </Toolbar>
      </AppBar>
  </div>
  )
}

export default Home;
