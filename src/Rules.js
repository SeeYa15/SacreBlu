import React, { Component } from 'react';
import './style/Rulesstyle.css';
import firebase from './firebase';
import {Link} from 'react-router-dom';
import { checkPropTypes } from 'prop-types';
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
            <div className="rules-main-div">
                <h1>In this page we will go trough some rules that the french language have regarding pronunciation</h1>
                <Pathway path={"/Rules/Pronounce"} buttonname={"Pronounciation"} imgSource={"./pictures/PencilRules.png"}/>           
                <Pathway path={"/Rules/Prefekt"} buttonname={"Perfect, Tense and Future"} imgSource={"./pictures/AbcLogo.png"}/>
            </div>
        );
    }
}

function Pathway(props){
    return(
        <div className="pathway-div">
            <button>{props.buttonname}</button>
            <ImageLogo imgSource={props.imgSource}><Link style={{display:"block", height:"100%", width:"50%", position:"relative", padding:"10px", textDecoration:"none", margin:"auto"}} to={props.path}>{props.buttonname}</Link></ImageLogo>
        </div>
    );
}

const ImageLogo = (props) => {
    return(
        <img src={require(""+props.imgSource)}></img>
    );
}

export default Rules;