import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./components/routes/Main"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNav from "./components/views/NavBar"
import IosDev from "./components/routes/IosDev";
import WebDev from "./components/routes/WebDev";
class App extends React.Component {

  render(){
    return (
      <div>
        <MyNav></MyNav>
        <Router>
          <Switch>
            <Route exact path="/" component={Main}></Route>
            <Route exact path="/main/iosdev" component={IosDev}></Route>
            <Route exact path="/main/webdev" component={WebDev}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
  
}

export default App;
