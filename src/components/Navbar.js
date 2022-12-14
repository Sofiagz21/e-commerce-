import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import logo from '../assets/logo.png'
import {ShoppingCart} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom:"7rem",
  },
  appBar:{
    backgroundColor: "whitesmoke",
    boxShadow: "none",
  },
  grow:{
    flexGrow: 1,
  },
  button:{
    marginLeft: theme.spacing(2)
  },
  image:{
    marginRight: "10px",
    width: "4rem",
  },

}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img className={classes.image} src={logo}/>
          </IconButton>
          <Typography variant="h6" color="textPrimary" component="p">
            Hello Guest
          </Typography>
          <div className={classes.button}>
            <Button variant ="outlined">
                <strong>SIGN IN</strong>
            </Button>
            <IconButton aria-label="show cart items" color="inherit">
                <ShoppingCart fontSize="large" color="primary"/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

