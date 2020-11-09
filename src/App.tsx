import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

import { Header } from './components/header';
import store from './store';

const useStyles = makeStyles({
  container: {
    maxWidth: '100%',
    minHeight: '100vh',
    backgroundColor: 'blue',
  },
});

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Container className={classes.container} maxWidth="lg">
        <Header />
      </Container>
    </Provider>
  );
}

export default App;
