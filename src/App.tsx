import React from 'react';
import { IconButton, useTheme } from '@mui/material';
import ContrastIcon from '@mui/icons-material/Contrast';
import CvPage from './components/CvPage/Index';
import './App.css'

interface AppProps {
  toggleTheme: () => void;
}


const App: React.FC<AppProps> = ({ toggleTheme }) => {

  const theme = useTheme();

  return (
    <div className='app'>
      <CvPage />
      <div className='menu'>
        <IconButton style={{ color: theme.palette.primary.main, position: 'absolute' }} onClick={toggleTheme}>
          <ContrastIcon />
        </IconButton>
      </div>

    </div>
  );
};

export default App;