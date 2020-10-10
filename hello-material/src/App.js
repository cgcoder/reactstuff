import React from 'react';
import logo from './logo.svg';
import {Typography} from '@material-ui/core';
import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import AllPhonicSound from './components/AllPhonicSound';
import WordBoard from './components/WordBoard';
import DragDemo from './components/DragDemo';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    h2: {
      fontSize: '12px'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WordBoard />
    </ThemeProvider>
  );
}

export default App;
