import React, {useState} from 'react';
import logo from './logo.svg';
import {Typography} from '@material-ui/core';
import './App.css';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import AllPhonicSound from './components/AllPhonicSound';
import WordBoard from './components/WordBoard';
import DragDemo from './components/DragDemo';
import ShuffledWord from './components/ShuffledWord';
import WiggleMessage from './components/WiggleMessage';

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

  const shuffled = "அ ம் மா";
  const correct = "அ ம் மா";
  const letters = shuffled.split(" ");
  const [show, setShow] = useState(true);

  const onShuffle = (order) => {
    const formedWord = order.map(i => letters[i]).join("");
    console.log(formedWord);
  };

  return (
    <ThemeProvider theme={theme}>
      <ShuffledWord shuffleWord="n w e t" />
      <svg className="abs" xmlns="http://www.w3.org/2000/svg" style={{color: "red", left: 10, top: 10}} width="64" height="64" viewBox="0 0 24 24">
        <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/>
      </svg>
      {show ? 
        <WiggleMessage message="Great Job!" onDone={() => setShow(false)} /> : <></>}
    </ThemeProvider>
  );
}

export default App;
