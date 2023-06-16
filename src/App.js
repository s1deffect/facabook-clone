import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Regiester from './components/Regiester';

function App() {
  return (
    
    
    <div className="App">
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/regiester" element={<Regiester/>}/>
      
        </Routes>
    
      
    </div>
  );
}

export default App;
