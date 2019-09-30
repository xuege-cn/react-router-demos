#### react-router-dom Prompt中断路由跳转
import { Prompt } from 'react-router-dom'

<Prompt when={isBlocking} message={location => `您确定要离开${location.pathname}吗？`} />


##### react-router4 使用NavLink来中断路由跳转
isActive: false


#### Redirect重定向
<Redirect
    to={{
        pathname: "/notFound",
        search: "?utm=your+face",
        state: { referrer: 12324 }
    }}
/>

当用 <Route path="" component={NotFound} />的格式时：
this.props下面有history，location，match三个属性

可以在this.props.location下面找到当前重定向的pathname, search和state

match.params 中可以找到参数：如 路由【/home/:id】，跳转地址【/home/1】，match.param.id 可以找到1


⚠️Route的render属性：可以配合路由配置来使用
<Route
    path={route.path}
    render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
    )}
/>



-> 用react-transition-group实现动画