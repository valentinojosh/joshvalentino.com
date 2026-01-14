import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Header from './Components/Header';
import Demo from "./Components/Demo";

const App = () => {
  return (
    <Router>
      <Route path='/:page' component={Header} />
      <Route exact path='/' component={Header} />
      <Switch>
        <Route exact path='/' component={About} />
        <Route exact path='/about' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/datafydemo' component={Demo} />
        <Route path='*' component={Error} />
      </Switch>
      {/*<Footer />*/}
    </Router>
  );
};

export default App;
