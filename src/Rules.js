import React, { Component } from 'react';
import './style/Rulesstyle.css';
import firebase from './firebase';
import {Link} from 'react-router-dom';
var db = firebase.database().ref('Words');

class Rules extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(){
        db.child('1111').once('value').then((snap) => {
            console.log(snap.val())
        })
    }

    render() {
        return (
            <div className="component-div-wrapper general-content-div" onClick={this.addtext}>
                <h1>In this page we will go trough some rules that the french language have regarding pronunciation</h1>
                <h2>Click to continue</h2>
                <WrappButton path={"/Rules/Pronounce"} buttonname={"Learn how to pronounce!"}/>
                <WrappButton path={"/Rules/Prefekt"} buttonname={"Learn prefekt, tense and futur words"}/>
            </div>
        );
    }
}
const WrappButton = (props) => {
    return(
        <button className="wrapped-link" style={{margin:"10px auto"}}>
            <Link style={{display:"block", height:"100%", width:"50%", position:"relative", padding:"10px", textDecoration:"none", margin:"auto"}} to={props.path}>{props.buttonname}</Link>
        </button>
    );
}

export default Rules;