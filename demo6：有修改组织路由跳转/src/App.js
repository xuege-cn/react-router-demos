import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom'
import Dashboard from './router/dashboard'
import Home from './router/home'
import NotFound from './router/notFound'

function onLeave(){
  debugger
}

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
              <Route path="/dashboard" onLeave={onLeave}>
                <Dashboard />
              </Route>
              <Route path="/home" onLeave={onLeave}>
                <Home />
              </Route>
              <Route path="/" exact>
                <Dashboard />
              </Route>
              <Route path="/notFound" exact component={NotFound} />
              {/* <Route>
                <Redirect
                  to={{
                    pathname: "/notFound",
                    search: "?utm=your+face",
                    state: { referrer: 12324 }
                  }}
                />
              </Route> */}
              <Route>
                <Redirect
                  from="/home" 
                  to="/notFound"
                />
              </Route>
            </Switch>
        </div>
        </Router>
    </React.Fragment>
  );
}

export default App;
