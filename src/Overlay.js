import React,{Component} from 'react';
import './style/Overlay-style.css';

class Overlay extends Component {
    constructor(props){
        super(props)

        this.state={
            active:false,
            fill: false,
        }
    }

    render(){
        return(
            <h1 id="overlaytext">OverlayBox</h1>
        );
    }
}

export default Overlay;