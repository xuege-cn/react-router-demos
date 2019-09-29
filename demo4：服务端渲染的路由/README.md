#### 这篇demo介绍的是服务端渲染场景下react-router的使用

##### 原理
这个涉及到同构的概念，客户端和服务端的结构不一样

App：可以理解这是个Route集合，服务端和客户端通用

服务端：
ReactServerDom + StaticRouter + App

客户端：
ReactDom + BrowserRouter + App


###### 服务端
import ReactServerDom from 'react-dom/server'
import { StaticRouter } from 'react-router'
import App from '../client/App'

const markup = ReactServerDom.renderToString(
    <StaticRouter location={ctx.req.url}>
        <App />
    </StaticRouter>
)


###### 客户端
import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDom.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'))


###### 通用App.js
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Dashboard from './router/dashboard'
import Home from './router/home/index'

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


#### 项目搭建过程中遇到的问题
1.使用绝对路径解决koa-nunjucks-2找不到模版的问题 path.resolve(‘dist’)
2.koa-nunjucks-2 html被渲染成了字符串的解决方案 autoescape: false
3.同构做完之后发现路由切换还是发起了请求，并且是404，如何解决？
这其实是因为客户端的同构没有生效，检查客户端代码，保证注入的client.js能够正常运行，路由切换就不会再发起请求了