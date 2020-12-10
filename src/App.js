import React from 'react';
import "./sass/main.scss"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Schedule from "./components/Schedule"
import Blank from "./components/Blank"
import Squad from "./components/Squad"
import axios from "axios";


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Schedule />
      <Blank />
      <Squad />
    </div>
  );
}


export default App;
