import React from 'react'
import { useLocation, useHistory, useParams, useRouteMatch } from 'react-router' 

export default () => {
    let location = useLocation()
    let history = useHistory()
    let params = useParams()
    let match = useRouteMatch()
    debugger

    return <React.Fragment>
        <h1>This is Home</h1>
        <h3>{location.pathname}</h3>
    </React.Fragment>
}

// class Home extends React.Component{
//     render(){
//         let location = useLocation()
//         return <React.Fragment>
//             <h1>This is Home</h1>
//             <h3>{location.pathname}</h3>
//         </React.Fragment>
//     }
// }