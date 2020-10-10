import React, { Props, ComponentProps } from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { withStyles, Theme, createStyles, StyledComponentProps, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';

import 'fontsource-roboto';

import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ProductListPage from './pages/ProductListPage';
import AppNav from './components/common/AppNav';
import { SessionContext, SessionContextProvider } from './contexts/SessionContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function About() {
  return <h2>Login Page!</h2>;
}


function App() {
  const classes = useStyles();

  return (
    <SessionContextProvider>
      <Router>
        <div>
          <AppNav />
          <Switch>
            <Route path="/login">
              <About></About>
            </Route>
            <Route path="/products">
              <ProductListPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </SessionContextProvider>);
}

export default App;
