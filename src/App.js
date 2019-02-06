import React from 'react';
import Rules from './Rules.js';
import About from './About';
import Sound from './Sounds';
import "./style/Header-Style.css";
import './style/Mainframe.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Tutorial from './Tutorial.js';
import Grammar from './Grammar.js';
import Words from './Words.js';

class Welcome extends React.Component {

  render() {
    return (
      <Router>
        <div className="root-wrapper">

          <div className="app-div-wrapper">

            <div className="head-wrapper">
              <header className="header-content">
                <a href="https://www.youtube.com/watch?v=dkO__NbIkF8" target="_blank" id="EasterEgg"><img id="SouthParkImage" src={require("./pictures/ShutupJimmy.jpg")}/></a>
                <Link to="/" className="head-link"><b className="header-text">Home</b></Link>
                <Link to="/About" className="head-link"><b className="header-text">About</b></Link>
                <Link to="/Grammar" className="head-link"><b className="header-text">Grammar/Memory</b></Link>
                <Link to="/Sound" className="head-link"><b className="header-text">Sound</b></Link>
              </header>
            </div>

            <div className="app-body-wrapper">
              <Route exact path="/" render={() => (
                <div className="main-div">
                  <ul className="main-div-list">
                    <li>
                      <Link to="/Grammar">Grammar</Link>
                    </li>
                    <li>
                      <Link to="/Grammar/Words">Words</Link>
                    </li>
                    <li>
                      <Link to="">About Us</Link>
                    </li>
                    <li>
                      <Link to="/Sound">Sound</Link>
                    </li>
                  </ul>                  
                </div>  
              )} />

              <Route path="/Tutorial" component={() => (<Tutorial showEl={true}/>)} />
              <Route exact path="/Rules" component={Rules} />
              <Route path="/About" component={About} />
              <Route path="/Home" component={Welcome} />
              <Route path="/Sound" component={Sound} />
              <Route exact path="/Grammar" component={Grammar} />
              <Route path="/Grammar/Words" component={Words} />              

            </div>
          </div>
        </div>
      </Router>
    );
  }
}

const PathButtons = () => {
  return (
    <div style={{ textAlign: "center", }}>
      <Link style={{ margin: "5px" }} to="/Memory">Learn words</Link>
      <Link style={{ margin: "5px" }} to="/Rules">Read about rules</Link>
    </div>
  );
}

export default Welcome;