import logo from './logo.svg';
import './App.css';
// import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Login from './Components/Login';
import HalfSideBar from './Components/HalfSideBar';
import Home from './Components/Home';




function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>

          {/* <Route path="/" element={<Login/>}/> */}

          <Route path="/admin/dashboard" element={<Home />} />
          <Route path="/:text" element={<HalfSideBar />} />
        </Routes>
      </BrowserRouter>





    </>
  );
}

export default App;
