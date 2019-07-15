import React from 'react';
import { Header, List, Signup } from './components/index';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/cadastro" component={Signup} />
    </Switch>
  </>
);
export default App;
