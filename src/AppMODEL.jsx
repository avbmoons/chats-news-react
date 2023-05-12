import { ThemeProvider, createTheme } from '@mui/material/styles';
import headerImg from './assets/sharik2.png';
import './App.css';
import {Router} from "./Router";
import {Router22} from "./Router22";

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
    <ThemeProvider theme={theme}>
    
    <div className="App">
      <header className="App-header">
        <div className='App-header-img'>
          <img src={headerImg} className="App-logo" alt="headerImg" />
        </div>      

      </header>
            
      <main>

      <nav className='App-nav'>
          <Router />
      </nav>
      <nav className='App-nav'>
        <Router22 />
      </nav>

      </main>

      <footer className="App-footer">

      </footer>
    </div>

    </ThemeProvider>
  );
}

export default App;

