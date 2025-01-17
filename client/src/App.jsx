import Home from './pages/Home/home'
import './App.scss'
import Watch from './pages/Watch/Watch';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import {BrowserRouter as Router,Route, Routes, Navigate} from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "./authContext/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
      <Router>
    <Routes>
          
        <Route path="/" element={user ? <Home /> : <Navigate to="/register" />}/>
        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/register" element={!user ? <Register /> : <Navigate to="/" />} />

        { user &&
          (<>  
          <Route path="/movies" element={<Home type='movies'/>} />
          <Route path="/series" element={<Home type='series' />} />
          <Route path="/watch" element={<Watch />} />
         </>)
         }
    

  </Routes>
  </Router>
)}

export default App;
