import React from 'react';
import Rules from './Rules.js';
import About from './About';
import Sound from './Sounds';
import "./style/Header-Style.css";
import './style/Mainframe.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import OregelbundnaV from './Grammar/OregelbundnaV.js';
import Words from './Words.js';
import RegelbundnaV from './Grammar/RegelbundnaV.js';
import Practice from './Practice.js';

class Welcome extends React.Component {

  render() {
    return (
      <Router>
        <div className="root">
          <div className="nav-bar">
            <header className="head-bar">
              <a href="https://www.youtube.com/watch?v=dkO__NbIkF8" target="_blank" id="EasterEgg"><img id="SouthParkImage" src={require("./pictures/ShutupJimmy.jpg")}/></a>
              <Link to="/" className="head-link"><b className="header-text">Home</b></Link>
              {/* <Link to="/About" className="head-link"><b className="header-text">About</b></Link> */}
              {/* <Link to="/Grammar" className="head-link"><b className="header-text">Grammar/Memory</b></Link> */}
              {/* <Link to="/Sound" className="head-link"><b className="header-text">Sound</b></Link> */}
            </header>
          </div>

          <div className="app-body-wrapper">
            <Route exact path="/" render={() => (
              <div className="main-div">
                <ul className="nav-list">
                  <li>
                    <Link to="/RegelbundnaV">Grammar</Link>
                  </li>
                  <li>
                    <Link to="/Grammar/Words">Words</Link>
                  </li>
                  <li>
                    <Link to="/Sound">Sound</Link>
                  </li>
                  <li>
                    <Link to="/Practice">Practice</Link>
                  </li>
                </ul>                  
              </div>  
            )} />

            {/* <Route path="/Tutorial" component={() => (<Tutorial showEl={true}/>)} /> */}
            <Route exact path="/Rules" component={Rules} />
            <Route path="/About" component={About} />
            <Route path="/Home" component={Welcome} />
            <Route path="/Sound" component={Sound} />
            <Route exact path="/RegelbundnaV" component={RegelbundnaV} />
            <Route exact path="/OregelbundnaV" component={OregelbundnaV}/>
            <Route path="/Grammar/Words" component={Words} />              
            <Route path="/Practice" component={Practice} />

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