import React from 'react';
import { IconButton, Switch } from '@mui/material';
import ContrastIcon from '@mui/icons-material/Contrast';
import Page from './components/Page/Index';
import './App.css'

interface AppProps {
  toggleTheme: () => void;
}

const App: React.FC<AppProps> = ({ toggleTheme }) => {
  return (
    <div className='app'>
      <Page />
      <IconButton style={{color: 'white'}} onClick={toggleTheme} className='botao-tema'> 
        <ContrastIcon />
      </IconButton>
    </div>
  );
};

export default App;