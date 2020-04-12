import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    type: 'dark',
    common: {
      black: '#000',
      white: '#fff'
    },
    background: {
      paper: 'rgba(50, 54, 62, 1)',
      default: 'rgba(40, 44, 52, 1)'
    },
    primary: {
      light: 'rgba(50, 54, 62, 1)',
      main: 'rgba(50, 54, 62, 1)',
      dark: 'rgba(50, 54, 62, 1)',
      contrastText: '#61dafb'
    },
    secondary: {
      light: '#61dafb',
      main: '#61dafb',
      dark: '#61dafb',
      contrastText: 'rgba(50, 54, 62, 1)'
    },
    error: {
      light: 'rgba(249, 97, 97, 1)',
      main: 'rgba(249, 97, 97, 1)',
      dark: 'rgba(249, 97, 97, 1)',
      contrastText: 'rgba(50, 54, 62, 1)'
    },
    text: {
      primary: '#61dafb',
      secondary: '#fff',
      disabled: '#61dafb',
      hint: '#61dafb'
    }
  }
});
