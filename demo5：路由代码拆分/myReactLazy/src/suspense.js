import React from 'react'
import PropTypes from 'prop-types'

export default class Suspense extends React.Component{
    getChildContext(){
        return {
            fallback: this.props.fallback || <div>loading...</div>
        }
    }

    render(){
        return this.props.children
    }
}

Suspense.childContextTypes = {
    fallback: PropTypes.object
}