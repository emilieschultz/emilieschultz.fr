import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './layout/sidebar';
import About from './pages/about';
import Home from './pages/home';
import Formations from './pages/formations';
import Portfolio from './pages/portfolio';
import Skills from './pages/skills';
import GA from './components/google-analytics';

export default function App() {
  return (
    <Router>
      <div>
        <Sidebar />
        {GA.init() && <GA.RouteTracker />}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/qui-suis-je">
            <About />
          </Route>
          <Route path="/formations">
            <Formations />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/competences">
            <Skills />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
