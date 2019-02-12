import React,{Component} from 'react';

class StrucSentence extends Component{
    constructor(){
        this.state={
            mytest:'',
        }
        this.FetchText = this.FetchText.bind(this);
    }    

    render(){
        return(
            <div className="content-main-div">  
                <TableInformation TitleHead="Oregelbundna Verb" Text={this.state.mytext} ></TableInformation>
                <div className="table-main">      
                </div>                    
            </div>                
        );
    }
    componentWillMount(){
        this.FetchText();
    }

    FetchText(){
        const itemsRef = firebase.database().ref('Text/Grammar');
        const RV = itemsRef.child("Oregelbundna Verb");

        RV.on('value',(snapshot) => {
            var item = snapshot.val();
            this.setState({mytext: item})
        });        
    }
}

export default StrucSentence;