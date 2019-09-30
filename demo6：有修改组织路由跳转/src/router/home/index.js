import React from 'react'
import { Prompt } from 'react-router-dom'
// import { Lifecycle } from 'react-router'

class Home extends React.Component{
    state = { isBlocking: false }

    change = bool => {
        this.setState({
            isBlocking: bool
        })
    }

    componentWillUnmount(nextLocation){
        debugger
        return false
    }

    render(){
        let { isBlocking } = this.state

        return <React.Fragment>
            <h1>This is Home</h1>
            <Prompt
                when={isBlocking}
                message={location => `Are you sure you want to go to ${location.pathname}`
            } />
            <input type="text" placeholder="请输入内容" onChange={() => this.change(true)}/>
            <button onClick={() => this.change(false)}>保存</button>
        </React.Fragment>
    }
}

export default Home