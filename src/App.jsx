
import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from './components/Nav/nav';
import Home from './components/Home/home';
import Menu from './components/Menu/menu';
import Login from './components/Login/login';

function App() {
  return (
    <div className={"container"}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Menu />} />
          <Route index element={<Menu/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
