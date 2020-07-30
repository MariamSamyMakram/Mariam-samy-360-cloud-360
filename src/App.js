import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// pages
import Home from './home';
import Markup from '././markup/markup';
import Location from '././location/location';
// footer
import Footer from '././footer/footer';
import Cover from "./cover/cover";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Cover />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/markup">
              <Markup />
            </Route>
            <Route exact path="/location">
              <Location />
            </Route>
          </Switch>
          <Footer/>
        </div>
      </Router>
    </div>
  );
}

export default App;
