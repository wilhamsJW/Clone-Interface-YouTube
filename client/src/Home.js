import React from "react";

import { makeStyles } from "@material-ui/core";
import MiniDrawer from "./components/MiniDrawer";

// A partir do momento que passamos o parametro theme no makeStyles conseguimos acessar as propriedades css da const theme q está no App.js
// pq isso acontece? Pq no <ThemeProvider /> q está no App.js ele recebe a variavel com as propriedades do tema e repassa essa var para
// seus componentes filhos, dessa forma acessamos qq propriedade com essa sintaxe: "theme.palette.primary.main" como mostra abaixo:
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    paddingRight: theme.spacing(2),
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(4),
  },
  logo: {
    height: 26,
  },
}));

function Home({ darkMode, setDarkMode }) {
  // Aqui estamos instanciando a const usestyles para podermos usar ela abaixo
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MiniDrawer darkMode={darkMode} setDarkMode={setDarkMode} />
    </div>
  );
}

export default Home;
