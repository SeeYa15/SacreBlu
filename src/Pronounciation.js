import React,{Component} from 'react';

class Pronounciation extends Component {
    render(){
        return(
            <div className="component-div-wrapper general-content-div">
                <p>When pronouncing french words the are some <span style={{color:"red"}}>rules</span> to it</p>
                <h2>Example</h2>
                <p>The french word 'Parle' is pronounced 'Parl', meaning that the 'e' is silent</p>
                <h2>Another Example</h2>
                <p>The french word 'Sport' is pronounced 'Spör', meaning hear that the 't' is silent</p>
                <p>Depending on letters, where they are placed and what letter comes after can change the pronounciation quite big</p>
                <h2>There are some rules to follow</h2>
            </div>            
        );
    }
}

export default Pronounciation;