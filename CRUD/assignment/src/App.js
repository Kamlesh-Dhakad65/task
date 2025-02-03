import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Create from './Components/Create';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/>}> </Route>
        <Route path="/Create" element={ <Create/>}> </Route>
        <Route path="/edit/:id" element={ <Update/>}> </Route>
      </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
