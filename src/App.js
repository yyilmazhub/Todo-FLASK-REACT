import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Todo} from './Components/Pages/Todo'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Show} from './Components/Pages/Show'

function App() {
  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Todo/>
          </Route>
          <Route path='/:id'>
            <Show/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
