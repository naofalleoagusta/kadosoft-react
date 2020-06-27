import React from 'react';
import Header from "./components/Header";
import Home from "./pages/Home";
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
      </Switch>
    </Router>)
  }
}

export default App;
