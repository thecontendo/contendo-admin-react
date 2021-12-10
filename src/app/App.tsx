import React from 'react';
import './App.css';
import Navigation from "navigation";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  },
});
function App() {
  React.useEffect(()=>{
    console.log('From App');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
      <ThemeProvider theme={darkTheme}>
      <Navigation/>
      </ThemeProvider>
  );
}

export default App;
