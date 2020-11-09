import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { Header } from './components/header';
import { TabPanel } from './components/tab-panel';
import store from './store';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  container: {
    maxWidth: '100%',
    minHeight: '100vh',
    padding: 0,
  },
});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Header />
      <Container className={classes.container} maxWidth="lg">
        <Grid container direction="column">
          <Grid item>
            <TabPanel />
          </Grid>
        </Grid>
      </Container>
    </Provider>
  );
}

export default App;
