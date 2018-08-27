import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Reignite from './Sounds';

class SoundButton extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            playme: false,
        }
        this.renderSound = this.renderSound.bind(this);
    }
    render() {
        return (
            <div className="rules-tut-button-div">
            </div>
        );
    }    
}

export default SoundButton;