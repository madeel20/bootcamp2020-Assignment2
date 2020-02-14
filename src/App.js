import React from 'react';
import {BrowserRouter as Router,Switch,Route, withRouter} from 'react-router-dom';
import './App.css';
import About from './About';
import Contact from './Contact';
import Shop from './Shop';
import Nav from './Nav';
import User from './User';

function App() {
  
  return (
    <div className="App">
      
      <Router>
      <Nav />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/posts" exact>
          <Shop />
        </Route>  
        <Route path="/posts/:id">
         <User />
        </Route>      
      </Router>
      
    </div>
  );
}
const Home = ()=>{
  return (
    <div> <h1>Home</h1></div>
  );
}
export default App;
