import React, { Component } from 'react';
import './style/Tutorial-style.css';
import { BrowserRouter as Router, Route} from 'react-router-dom';

class Tutorial extends Component {
    constructor(props) {
        super(props);

        this.showbutton = this.showbutton.bind(this);    
    }

    componentDidMount(){ 
        console.log("yes");
    }

    showbutton(){
        this.setState({showEl: !this.state.showEl});
        console.log(this.state.showEl);
    }

    render() {
        return (
            <Router>
                <div style={{height:"100%"}}>
                    <Route exact path="/Tutorial" render={() => (
                        <div id="parent-div"></div>
                    )}/>
                </div>
            </Router>
        );
    }
}


export default Tutorial;