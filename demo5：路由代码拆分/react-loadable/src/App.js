import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
// import Dashboard from './router/dashboard'
// import Home from './router/home/index'
// import loadable from '@loadable/component'
import loadable from 'react-loadable'


const Loading = () => <div>loading</div>
const Dashboard = loadable({
  loader: () => import('./router/dashboard'),
  loading: Loading,
});
const Home = loadable({
  loader: () => import('./router/home'),
  loading: Loading,
});

function App() {
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

export default App;
