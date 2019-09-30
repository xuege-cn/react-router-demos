import React from 'react'
import PropTypes from 'prop-types'

export default load => {
    class Lazy extends React.Component{
        state = { Comp: null }

        componentDidMount(){
            // 加个定时器，看下fallback的效果
            setTimeout(() => {
                load().then(module => {
                    this.setState({
                        Comp: module.default
                    })
                })
            }, 3000)

            // load().then(module => {
            //     this.setState({
            //         Comp: module.default
            //     })
            // })
        }
        
        render(){
            let { Comp } = this.state
            return Comp ? <Comp /> : this.context.fallback
        }
    }

    Lazy.contextTypes = {
        fallback: PropTypes.object
    }

    return Lazy
}