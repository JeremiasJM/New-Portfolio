import React from "react";
import "./App.css";
import Header from "./components/hearder/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Services from "./components/services/Services";
import Contact from "./components/contact/Contact";
import Work from "./components/work/Work";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/Scrollup";


const App= () =>{
  return(
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Work/>
      <Contact/>
    </main>
    <Footer/>
    <ScrollUp/>
    </>
  )
}

export default App
