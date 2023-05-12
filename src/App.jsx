import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import { persistor } from './Store';
import headerImg from './assets/sharik2.png';
import './App.css';
import {Router} from "./Router";
import { store } from './Store';

const theme=createTheme({
  palette:{
    primary:{
      main:'#3f51b5',
    },
    secondary:{
      main:'#fad791',
    },
  },
});

function App() {

  return (
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    
    <ThemeProvider theme={theme}>
    
    <div className="App">
      <div className='App-top'>      
      <header className="App-header">
        <div className='App-header-img'>
          <img src={headerImg} className="App-logo" alt="headerImg" />
        </div>    
      </header>            
      <main>
      <nav className='App-nav'>                    
          <Router />
      </nav>
      </main>
      </div>
      <footer className="App-footer">
      </footer>
    </div>

    </ThemeProvider>
    </PersistGate>      
    </Provider> 
         
   
       
  );
}

export default App;

