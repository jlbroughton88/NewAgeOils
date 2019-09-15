import React from 'react';
import './App.css';
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Services from "./components/Services.js"
import AboutUs from "./components/AboutUs.js"
import ContactUs from "./components/ContactUs"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Router>
      <div className="App"></div>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={AboutUs}/>
        <Route path="/services" component={Services}/>
        <Route path="/contact" component={ContactUs}/>
      </Switch>

    </Router>

  );
}

export default App;
