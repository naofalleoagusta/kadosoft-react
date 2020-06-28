import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Service from "./pages/Service";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends React.Component {

  render() {
    return (<Router>
      <Route path={"/"} component={Header}/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/service" exact component={Service}/>
      </Switch>
      <Route path={"/"} component={Footer}/>
    </Router>)
  }
}

export default App;
