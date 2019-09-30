import React, { lazy, Suspense } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
// import Dashboard from './router/dashboard'
// import Home from './router/home/index'

const Home = lazy(() => import('./router/home'))
const Dashboard = lazy(() => import('./router/dashboard'))

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
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
    </Suspense>
  );
}

export default App;
