import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import CardContainer from '../CardContainer/CardContainer';
import Login from '../Login/Login.js';
import Header from '../Header/Header';
import Strain from '../Strain/Strain';
import StrainDetails from '../StrainDetails/StrainDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Header} />
      </Switch>
      <Route exact path="/" component={CardContainer} />
      <Route exact path="/strains" component={Strain} />
      <Route exact path="/strain-details/:name" component={StrainDetails} />
    </Router>
  );
};

export default App;
