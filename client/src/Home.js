import React from "react";

import {
  makeStyles,
  AppBar,
  Toolbar,
  Button,
  IconButton,
} from "@material-ui/core";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import MoreVert from '@mui/icons-material/MoreVert';
import AppsIcon from '@mui/icons-material/Apps';

import MiniDrawer from './components/MiniDrawer'

// A partir do momento que passamos o parametro theme no makeStyles conseguimos acessar as propriedades css da const theme q está no App.js
// pq isso acontece? Pq no <ThemeProvider /> q está no App.js ele recebe a variavel com as propriedades do tema e repassa essa var para
// seus componentes filhos, dessa forma acessamos qq propriedade com essa sintaxe: "theme.palette.primary.main" como mostra abaixo:
const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.main,
    height: "100vh",
  },
  appBar: {
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  icons: {
    paddingRight: theme.spacing(2)
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(4)
  },
  logo: {
    height: 26
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
           className={classes.menuIcon}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>

          <img src="/assets/preto.png" alt='logo' className={classes.logo} />
          {/* Esta div está servindo para alinhar os dados do menu, para que fique uns do lado direito e outros esquerdo, veja como ela foi definida pela class */}
          <div className={classes.grow} />

          <IconButton
            className={classes.icons}
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <VideoCallIcon />
          </IconButton>

          <IconButton
            className={classes.icons}
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <AppsIcon />
          </IconButton>

          <IconButton
            className={classes.icons}
            size="large"
            color="inherit"
            sx={{ mr: 2 }}
          >
            <MoreVert />
          </IconButton>

          <Button startIcon={<AccountCircleIcon />} variant="outlined" color="inherit">
            FAZER LOGIN
          </Button>
        </Toolbar>
      </AppBar>

      <MiniDrawer />

    </div>
  );
}

export default Home;
