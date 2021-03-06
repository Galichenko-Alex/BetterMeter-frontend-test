import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { UserData } from '../user-data';

const useStyles = makeStyles({
  header: {
    backgroundColor: 'black',
  },
});

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.header}>
      <Toolbar>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <img src="logo.png" alt="logo" />
          </Grid>
          <Grid item>
            <UserData />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
