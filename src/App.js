import './App.css';
import Pages from './Components/Pages/Pages';
import {BrowserRouter} from 'react-router-dom';
import AppContext from './Components/AppContext/AppContext';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DarkModeProvider>
          <AppContext>
            <Pages/>
          </AppContext>
        </DarkModeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
