import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import Records from './pages/Records';

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/records" component={Records} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;