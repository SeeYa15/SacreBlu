import React, {Component} from 'react';

class Header extends Component{
    constructor(props){
    super(props)
    }

    render(){
        return(
            <h1 style={{display:"flex", justifyContent:"center"}}>{this.props.text}</h1>
        );
    }
}

export default Header;