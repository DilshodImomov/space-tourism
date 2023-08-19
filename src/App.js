import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import Crew from "./components/Crew/Crew";
import { useEffect, useState } from 'react';

function App() {
  const [path, setPath] = useState('home');

  useEffect(() => {
    let currentPath = window.location.pathname;
    currentPath = currentPath.substring(1);
    if ( currentPath === "" ) {
      currentPath = "home";
    }
    setPath(currentPath);
  },[]);
  
  const changePath = ( address ) => {
    setPath(address)
  }

  return (
    <div className={`background ${path}`} >
      <BrowserRouter>
          <Navbar path={path} changePath={changePath} />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/destination' element={<Destination />} />
          <Route path='/crew' element={<Crew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
