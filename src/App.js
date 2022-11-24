import React ,{useState}from "react";
import'./App.css'

import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  
  return (
    <>
    <div className="App">
      <Navbar/>
      <div>
        <Homepage/>
      </div>
    </div>
    
    </>
  );
}

