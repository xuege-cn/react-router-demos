#### 这个DEMO解决的问题：有些时候在一个路由下操作，然后滚动到下面，导致顶部内容看不到了，此时切换菜单，可是页面没有自动滚动到顶部

-> ⚠️这个demo就是实现切换路由之后自动滚动到顶部的功能的

#### 实现方案：

##### 第一种实现方案
> 1.使用withRouter把history，location，match塞入ScrollToTop组件的props中，当路由切换之后进入ScrollToTop的componentDidUpdate事件，在这个事件中window.scrollTo(0, 0)

class ScrollToTop extends React.Component{
  componentWillUpdate(prevProps){
    if(this.props.location.pathname != prevProps.location.pathname){
      window.scrollTo(0, 0)
    }
  }

  render(){
    return this.props.children
  }
}

const ScrollToTopComp = withRouter(ScrollToTop)

##### 第二种实现方案：改进第一种方案
> 2.改进方案是使用hooks的useEffect

import { useEffect } from 'react'
function ScrollToTop({children, location: { pathname }}){
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return children
}

const ScrollToTopComp = withRouter(ScrollToTop)


##### 第三种实现方案：不演示代码实现
> 3.第三种方案是在每个路由页面加一个ScrollToTop组件，在ScrollToTop的componentDidMount事件中加window.scrollTo(0, 0)