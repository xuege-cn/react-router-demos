import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Dashboard from './router/dashboard'
import Home from './router/home/index'

function App() {
  return (
    <React.Fragment>
        <Router>
          <div style={{width: 200, float: 'left', listStyle: 'none'}}>
            <h3>菜单</h3>
            <ul style={{listStyle: 'none'}}>
              <li>
                <Link to="/dashboard">dashboard</Link>
              </li>
              <li>
                <Link to="/home">home</Link>
              </li>
            </ul>
          </div>
          <div style={{paddingLeft: 200}}>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/">
                <Dashboard />
              </Route>
            </Switch>
        </div>
        </Router>
    </React.Fragment>
  );
}

export default App;
