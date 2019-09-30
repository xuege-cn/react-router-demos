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
                <Link to="/home/1">home</Link>
              </li>
            </ul>
          </div>
          <div style={{paddingLeft: 200}}>
            <Switch>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/home/:id">
                <Home />
              </Route>
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <Route>
                <div>404</div>
              </Route>
            </Switch>
        </div>
        </Router>
    </React.Fragment>
  );
}

export default App;
