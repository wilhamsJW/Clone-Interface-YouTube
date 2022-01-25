import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";

import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import {
  makeStyles,
  Toolbar,
  Button,
  IconButton,
  Grid,
  Hidden,
} from "@material-ui/core";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreVert from "@mui/icons-material/MoreVert";
import AppsIcon from "@mui/icons-material/Apps";

import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ExploreIcon from "@mui/icons-material/Explore";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AddCircle from "@mui/icons-material/AddCircle";
import ListSubheader from "@mui/material/ListSubheader";
import { Switch } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

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
    paddingRight: theme.spacing(2),
  },
  menuIcon: {
    paddingRight: theme.spacing(5),
    paddingLeft: theme.spacing(4),
  },
  logo: {
    height: 26,
  },
  listItemText: {
    fontSize: 18,
  },
}));

function MiniDrawer({ darkMode, setDarkMode }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // Aqui estamos instanciando a const usestyles para podermos usar ela abaixo
  const classes = useStyles();

  const videos = [
    {
      id: 1,
      title:
        "FEED DO USUÁRIO | Criando uma Rede Social com React.js e .NET Core #29",
      channel: "Lucas Nhimi",
      views: "11 mi de visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb1.png",
    },
    {
      id: 2,
      title:
        "COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02",
      channel: "Lucas Nhimi",
      views: "957 mil visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb2.png",
    },
    {
      id: 3,
      title:
        "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
      channel: "Lucas Nhimi",
      views: "106 mil visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb3.png",
    },
    {
      id: 4,
      title:
        "CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27",
      channel: "Lucas Nhimi",
      views: "5,6 mi de visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb4.png",
    },
    {
      id: 5,
      title:
        "EDITOR DE POST COM MARKDOWN 2 | Criando uma Rede Social com React.js e .NET Core #26",
      channel: "Lucas Nhimi",
      views: "2,2 mi de visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb5.png",
    },
    {
      id: 6,
      title: "COMO MIGRAR PARA REACT HOOKS | Dicas e Truques #01",
      channel: "Lucas Nhimi",
      views: "233 mil visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb6.png",
    },
    {
      id: 7,
      title:
        "PRÉ-REQUISITOS | Criando uma Rede Social com React.js e .NET Core #01",
      channel: "Lucas Nhimi",
      views: "118 mil visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb7.png",
    },
    {
      id: 8,
      title:
        "GIT E GITHUB | Criando uma Rede Social com React.js e .NET Core #04",
      channel: "Lucas Nhimi",
      views: "1,9 mi de visualizações",
      date: "há 1 semana",
      avatar: "/assets/avatar.jpeg",
      thumb: "/assets/thumb8.png",
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar color="inherit" position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: "36px",
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>

          <img
            src={
              theme.palette.type === "dark"
                ? "/assets/branca.png"
                : "/assets/preto.png"
            }
            alt="logo"
            className={classes.logo}
          />
          {/* Esta div está servindo para alinhar os dados do menu, para que fique uns do lado direito e outros esquerdo, veja como ela foi definida pela class */}
          <div className={classes.grow} />

          <Switch
            value={darkMode}
            // onChange={() => setDarkMode(darkMode ? false : true)} {/** Pode ser assim ou abaixo */} 
            onChange={() => setDarkMode(!darkMode)}
          ></Switch>

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

          <Button
            startIcon={<AccountCircleIcon />}
            variant="outlined"
            color="inherit"
          >
            FAZER LOGIN
          </Button>
        </Toolbar>
      </AppBar>

      <Box display="flex">
        <Hidden>
          <Drawer variant="permanent" open={open}>
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === "rtl" ? (
                  <ChevronRightIcon />
                ) : (
                  <ChevronLeftIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />

            <List>
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                Início
                <ListItemText />
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemIcon>
                  <WhatshotIcon />
                </ListItemIcon>
                Em Alta
                <ListItemText />
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemIcon>
                  <ExploreIcon />
                </ListItemIcon>
                Explorar
                <ListItemText />
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemIcon>
                  <SubscriptionsIcon />
                </ListItemIcon>
                Inscrições
                <ListItemText />
              </ListItem>
            </List>

            <Divider />

            <List>
              <ListItem>
                <ListItemIcon>
                  <VideoLibraryIcon />
                </ListItemIcon>
                Biblioteca
                <ListItemText />
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemIcon>
                  <HistoryIcon />
                </ListItemIcon>
                Histórico
                <ListItemText />
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemIcon>
                  <OndemandVideoIcon />
                </ListItemIcon>
                Seus Vídeos
                <ListItemText />
              </ListItem>
            </List>
            <List>
              <ListItem>
                <ListItemIcon>
                  <HistoryToggleOffIcon />
                </ListItemIcon>
                Assitir mais tarde
                <ListItemText />
              </ListItem>
            </List>

            <List>
              <ListItem>
                <ListItemIcon>
                  <ThumbUpIcon />
                </ListItemIcon>
                Vídeos marcados <br />
                como gostei
                <ListItemText />
              </ListItem>
            </List>
            <Divider />
            <Box p={4}>
              <Typography>
                Faça login para curtir seus <br /> vídeos, comentar e <br />
                se divertir
              </Typography>
              <Box mt={2}>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<AccountCircleIcon />}
                >
                  Fazer login
                </Button>
              </Box>
            </Box>
            <Divider />

            <List
              component="nav"
              aria-labelledby="nested-list-subheader"
              subheader={
                <ListSubheader
                  component="div"
                  id="nested-list-subheader"
                  className={classes.subheader}
                >
                  O Melhor do youtube
                </ListSubheader>
              }
            >
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Música"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Esportes"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Jogos"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Filmes"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Notícias"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Ao vivo"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Destaques"}
                />
              </ListItem>
              <ListItem button classes={{ root: classes.listItem }}>
                <ListItemIcon>
                  <AddCircle />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.listItemText,
                  }}
                  primary={"Videos 360"}
                />
              </ListItem>
            </List>
            <Divider />
          </Drawer>
        </Hidden>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
        </Box>

        <Box p={3}>
          <Toolbar /> {/** Toolbar dá um espaçamento */}
          <Typography
            variant="h5"
            color="textPrimary"
            style={{ fontWeight: 600 }}
          >
            Recomendado
          </Typography>
          <Grid container spacing={4}>
            {" "}
            {/** spacing={4} -> serve como grid-gap dando distancia entre uma grid e outra */}
            {videos.map((item, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Box>
                  <img
                    style={{ width: "100%" }}
                    alt={item.title}
                    src={item.thumb}
                  />
                  <Box>
                    <Typography
                      style={{ fontWeight: 600 }}
                      gutterBottom
                      variant="body1"
                      color="textPrimary"
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      display="block"
                      variant="body2"
                      color="textSecondary"
                    >
                      {item.channel}
                    </Typography>

                    <Typography variant="body2" color="textSecondary">
                      {`${item.views} • ${item.date}`}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default MiniDrawer;
