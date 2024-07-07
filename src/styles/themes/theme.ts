import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#1C1C1C',
    },
    secondary: {
      main: '#DADDD8',
    },
    background: {
      default: '#FAFAFF',
      paper: '#ECEBE4',
    },
    text: {
      primary: '#1C1C1C',
    },
  },
  typography: {
    h1: {
      color: '#000000',
      fontFamily: 'Inter, sans-serif',
    },
    h2: {
      color: '#000000',
      fontFamily: 'Inter, sans-serif',
    },
    h3: {
      color: '#000000',
      fontFamily: 'Inter, sans-serif',
    }
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
      paper: '#1C2541',
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
