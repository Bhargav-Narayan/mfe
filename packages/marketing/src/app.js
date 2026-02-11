import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Pricing from './components/Pricing';
import Landing from './components/Landing';

export default () => {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/pricing' component={Pricing} />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
};
