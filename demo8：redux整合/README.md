#### react-router和react-redux的整合

⚠️为什么会有整合的问题❓❓❓

-> react-router：withRouter(Home)
-> react-redux：connect(state => {
    return { name: state.name }
})(Home)

两个都需要再次封装Home，那么怎么办❓❓❓

##### 解决方案一：
connect(state => {
    return { name: state.name } 
})(withRouter(Home))


##### 解决方案二：
<Route path="/home" component={Home} />

connect(state => {
    return { name: state.name }
})(Home)