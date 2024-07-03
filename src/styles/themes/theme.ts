import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1C2541',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#6FFFE9',
    },
    secondary: {
      main: '#3A506B',
    },
    background: {
      default: '#0B132B',
      paper:'#1C2541',
    },
    text: {
      primary: '#FFFFFF',
    },
  },
  typography: {
    h1: {
      color: '#FFFFFF',
      fontFamily: 'Inter, sans-serif',
    },
    h2: {
      color: '#FFFFFF',
      fontFamily: 'Inter, sans-serif',
    },
    h3: {
      color: '#FFFFFF',
      fontFamily: 'Inter, sans-serif',
    }
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#6FFFE9',
        },
      },
    },
  }
  
});

export { lightTheme, darkTheme };
