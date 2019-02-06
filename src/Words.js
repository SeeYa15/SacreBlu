import React, { Component } from 'react';
import './style/Mainframe.css';
import './style/TextTableContent.css';
import './style/Table-example-layout.css';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { checkPropTypes } from 'prop-types';

class Words extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <p>Hejhej</p>
            </div>
        )}
}

export default Words;