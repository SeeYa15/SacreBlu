import React, { Component } from 'react';
import '../style/TextTableContent.css';
import '../style/Table-example-layout.css';
import '../style/GrammarStyle.css';
import firebase from '../firebase';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class RegelbundnaV extends Component{

    constructor(){
        super();
        this.state = {
            mytext: '',
            headerRended: false,
        }
        this.FetchText = this.FetchText.bind(this);
    }    

    render(){
        return(
            <div className="content-main-div">  
                <TableInformation TitleHead="Regelbundna Verb" Text={this.state.mytext} ></TableInformation>
                <div className="table-main">              
                    <TableExample word="Parler"></TableExample>
                    <TableExample word="Choisir"></TableExample>
                    <TableExample word="Attendre"></TableExample>
                </div>                    
            </div>                
        );
    }    
    componentWillMount(){
        this.FetchText();
    }

    FetchText(){
        const itemsRef = firebase.database().ref('Text/Grammar');
        const RV = itemsRef.child("RegelBundna Verb");

        RV.on('value',(snapshot) => {
            var item = snapshot.val();
            this.setState({mytext: item})
        });        
    }
}

class TableInformation extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
                <div className="title-content">
                    <h1 className="title">{this.props.TitleHead}</h1>                
                    <Link to="./OregelbundnaV"><img className="nav-img" src={require("../pictures/Arrow-Right.svg")}></img></Link>
                </div>
                <div className="text-content-div">
                    <p className="left-side"><b>Regelbundna Verb</b></p>
                    <p className="right-side">{this.props.Text}</p>
                </div>
            </div>
        )
    }    
}

class TableExample extends Component{

    constructor(props){
        super(props);
        this.state ={
            arrayExamples:[] ,                        
            renderHeader: true,
            rowNumber: 0
        }
        this.FetchExamples = this.FetchExamples.bind(this);        
    }

    render(){            
        return(
            <div>                
                <div className="table-header">
                    <p className="example-header-text-word">{this.props.word}</p>
                    <p className="example-header-text">Presens</p>
                    <p className="example-header-text">Perfekt</p>
                    <p className="example-header-text">Future</p>
                </div>
                <div className="table-content">
                    {/*Den sista map() är den som exikveras FÖRST! Array elementen läggs i en div som sedan lägger innehållet i en p som sedan splittrar strängen till en array och läggs ut*/}
                    {this.state.arrayExamples.map(item => item.split(',').map(e => <p className="example-content-text">{e}</p>)).map(t => <div className="group-word">{t}</div>)}                
                </div>
            </div>
        );
    }
    componentWillMount(){
        this.FetchExamples();
    }

    FetchExamples(props){
        const itemsRef = firebase.database().ref('Text/Grammar/Exempel/');
        const RV = itemsRef.child(this.props.word);

        RV.on('value',(snapshot) => {
            var item = snapshot.val();                   
            var allValues = Object.values(item);
            this.setState({arrayExamples: allValues});
        });

    }
}

export default RegelbundnaV;