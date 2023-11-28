import logo from './logo.svg';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import LoginMaterial from './pages/LoginMaterial';
import Sidebar from './pages/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path = "/register" element = {<Register/>}/>
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/loginmat" element = {<LoginMaterial/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
