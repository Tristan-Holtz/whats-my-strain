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
      <body>
        <Switch>
          <Route path="/" component={Header} />
          <Route exact path="/login" component={Login} />
        </Switch>
        <Route exact path="/" component={CardContainer} />
        <Route exact path="/strains" component={Strain} />
        <Route exact path="/strainDetails" component={StrainDetails} />
      </body>
    </Router>
  );
};

export default App;
