import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";


function App() {

  return (
    <>

      <Navbar className="NavBar" />


      <div className="container my-5">
        <TextForm heading="Enter the text " />

      </div>

    </>
  );


}

export default App;
