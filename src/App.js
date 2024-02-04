import React from "react"; // Add this line
import Banner from "./components/Banner";
import NavBar from "./components/NavBar";
import "./App.css";
import  Skills from "./components/Skills";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logo.svg";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills/>
      <Projects/>
      <Footer/>

    </div>
  );
}

export default App;
