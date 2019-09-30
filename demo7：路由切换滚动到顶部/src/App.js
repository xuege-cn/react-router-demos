import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, withRouter } from 'react-router-dom'
import Dashboard from './router/dashboard'
import Home from './router/home/index'

// 第一种方案
// class ScrollToTop extends React.Component{
//   componentWillUpdate(prevProps){
//     if(this.props.location.pathname != prevProps.location.pathname){
//       window.scrollTo(0, 0)
//     }
//   }

//   render(){
//     return this.props.children
//   }
// }

// const ScrollToTopComp = withRouter(ScrollToTop)

// 第二种方案，第一种方案改进版
function ScrollToTop({ children, location: { pathname } }){
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children
}

const ScrollToTopComp = withRouter(ScrollToTop)

function App() {
  return (
    <React.Fragment>
        <Router>
          <ScrollToTopComp>
            <div style={{width: 200, float: 'left', listStyle: 'none'}}>
              <h3>菜单</h3>
              <ul style={{listStyle: 'none'}}>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
                <li>
                  <Link to="/dashboard">dashboard</Link>
                </li>
                <li>
                  <Link to="/home">home</Link>
                </li>
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
                <Route path="/" exact>
                  <Dashboard />
                </Route>
                <Route>
                  <div>404</div>
                </Route>
              </Switch>
            </div>
          </ScrollToTopComp>
        </Router>
    </React.Fragment>
  );
}

export default App;
