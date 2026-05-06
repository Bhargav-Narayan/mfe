import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma'
});

export default () => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/pricing' component={Pricing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
