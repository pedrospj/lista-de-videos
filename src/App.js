import React from 'react';
import { Header, List } from './components/index';
import { Switch, Route } from 'react-router-dom';
import './App.css';

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={List} />
    </Switch>
  </>
);
export default App;
