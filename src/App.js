import React from "react";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Experts from "./Components/Experts";
import Talks from "./Components/Talks";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <Experts/>
      <Talks/>
      <Footer/>

    </div>
  );
}

export default App;
