import logo from './logo.svg';
//import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginMaterial from './pages/LoginMaterial';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/loginmat" element = {<LoginMaterial/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
