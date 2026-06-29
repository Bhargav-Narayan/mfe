import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
});

export default ({history}) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/pricing' component={Pricing} />
        </Switch>
      </Router>
    </StylesProvider>
  );
};
