import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


class MyApp extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <div>
                        <h1>Main</h1>
                        <Link to={"/test"}>Go to test</Link>
                        <Route path="/test" component={MyLink}></Route>
                    </div>
                </Router>
            </div>)
    }
}

// const test = () => (
//     <div>
//         <p>made from a const</p>
//     </div>
// );

// const main = () => {
//     return (
//         <div>
//             {/* SET STYLE FOR DIV HERE */}
//         </div>
//     )
// }

class MyLink extends React.Component{
    render(){
        return(
            <div>
                <p>Just a small test</p>
            </div>
        );
    }
}

export default MyApp;