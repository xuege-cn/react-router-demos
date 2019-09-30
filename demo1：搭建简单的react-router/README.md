#### react-router搭建

##### step 1.安装
npx create-react-app react-router-lazyrouter
yarn add react-router-dom

##### react-router的引入
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

###### Link的使用
<Link to="/dashboard">Dashboard</Link>

###### BrowserRouter的使用
<BrowserRouter>
    <App />
</BrowserRouter>

-> ⚠️注意点：Route必须在BrowserRouter里面使用

###### Route的使用
<Route path="/dashboard">
    <Home />
</Route>

-> Route搭配Switch
<Switch>
    <Route path="/">
        <Dashboard />
    </Route>
</Switch>


-> ⚠️Switch的作用是啥呢❓❓❓
<Router>
    <Route path="/dashboard">
        <Dashboard />
    </Route>
    <Route path="/">
        <Dashboard />
    </Route>
</Router>

-> 我们一般都需要定义一个根路径的路由，但是根路径的路由如果只是这样写的话，会导致输入路由 /dashboard 的时候 渲染了两个Dashboard

⚠️⚠️⚠️ Switch的作用就来了，Switch的作用是只渲染第一个匹配到的路由的项，解决了以上重复渲染的问题


⚠️根路径的配置，需要加上exact，不然其他路由都会匹配到/
<Route path="/" exact>


⚠️404页面的配置
<Route>
    <div>404</div>
</Route>
不要配置path，当找不到路由配置时就会走这个