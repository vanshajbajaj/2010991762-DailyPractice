import React from "react";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";

const App=()=>{

    return(
        <div className="App"> 
            {/* <h1>this is App component of this website</h1> */}
            <h1 style={{color:'yellow'}}>KON HO TUM</h1>
            <p>KYA HO TUM</p>
            {/* <p>this is a paragraph</p> */}
            <Home />
            <Home />
            <Home />
            <Home />
        </div>
    );

}

export default App;