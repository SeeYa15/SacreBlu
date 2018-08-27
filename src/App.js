import React from 'react';
// import ReactDOM from 'react-dom';
import Rules from './Rules.js';
import About from './About';
import Sound from './Sounds';
import "./style/Header-Style.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Tutorial from './Tutorial.js';
import Header from './Header.js';
// import Overlay from './Overlay.js';
import Pronounciation from './Pronounciation.js';

class Welcome extends React.Component {

  render() {
    return (
      <Router>
        <div className="root-wrapper">

          <div className="app-div-wrapper">

            <div className="head-wrapper">
              <header>
                <Link to="/"><b className="header-text">Home</b></Link>
                <Link to="/About"><b className="header-text">About</b></Link>
                <Link to="/Tutorial"><b className="header-text">Tut</b></Link>
                <Link to="/Sound"><b className="header-text">Sound</b></Link>
              </header>
            </div>

            <div className="app-body-wrapper">
              <Route exact path="/" render={() => (
                <div className="main-div">
                  <Header text="Welcome to home page" />
                  <PathButtons />
                </div>
              )} />

              <Route path="/Tutorial" component={() => (<Tutorial showEl={true}/>)} />
              <Route exact path="/Rules" component={Rules} />
              <Route path="/About" component={About} />
              <Route path="/Home" component={Welcome} />
              <Route path="/Sound" component={Sound} />
              <Route path="/Rules/Pronounce" component={Pronounciation} />              

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
      <Link style={{ margin: "5px" }} to="/memory">Learn words</Link>
      <Link style={{ margin: "5px" }} to="/rules">Read about rules</Link>
    </div>
  );
}

export default Welcome;