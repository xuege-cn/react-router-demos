#### 自定义lazy Suspense的实现

⚠️注意点：
1.Suspense和lazy非必须直系父子关系  -> 需要用到context
2.Suspense的使用方式：<Suspense fallback={<div>loading</div>}>  -> fallback要注入lazy
3.lazy的使用：lazy(() => import('./router/home'))

##### Suspense的实现
import React from 'react'
import PropTypes from 'prop-types'

export default class Suspense extends React.Component{
    static propTypes = {
        fallback: PropTypes.object
    }

    getChildContext(){
        return {
            fallback: this.props.fallback
        }
    }

    render(){
        return this.props.children
    }
}

Suspense.childContextTypes = {
    fallback: PropTypes.object
}


##### lazy的实现
import React from 'react'
import PropTypes from 'prop-types'

export default load => {
    class Lazy extends React.Component{
        state = { Comp: null }

        componentDidMount(){
            <!-- 用定时器看下fallback的效果 -->
            setTimeout(() => {
                load().then(module => {
                    this.setState({
                        Comp: module.default
                    })
                })
            }, 3000)

            <!-- load().then(module => {
                this.setState({
                    Comp: module.default
                })
            }) -->
        }

        render(){
            return Comp ? <Comp /> : this.context.fallback
        }
    }

    Lazy.contextTypes = {
        fallback: PropTypes.object
    }
}

##### 使用
const Home = lazy(() => import('./router/home'))
<Suspense fallback={<div>loading</div>}>
    <Home />
</Suspense>