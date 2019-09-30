import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Home extends React.Component{
    render(){
        return <React.Fragment>
            <h1>This is Home</h1>
            <h2>{this.props.name}</h2>
            <h2>{this.props.location.pathname}</h2>
        </React.Fragment>
    }
}

export default connect(state => {
  return {
    name: state.name
  }
})(withRouter(Home));