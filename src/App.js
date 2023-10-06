import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import Cabinet from './Pages/Cabinet';

function App() {
  const [userData, setUserData] = useState()
  login = (value) => {
    setUserData()
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login login={login} />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/cabinet" element={<Cabinet />} />
        
        {/* <Route path="*" element={<NoPage />} /> */}
        {/* </Route> */}
      </Routes>
    </div>
  );
}

export default App;
