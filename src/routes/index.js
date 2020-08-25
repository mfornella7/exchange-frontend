import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home     from './Home';
import Referral from './Referral';
import Orders   from './Orders';
import Funds    from './Funds';

const Routes = () => {
  return (
      <Switch>
          <Route 
              exact
              path="/"
              render={() => {
                return <Redirect to="/home"/>
              }}
          />
          <Route path="/home" component={Home}/>
          <Route path="/referral" component={Referral}/>
          <Route path="/orders" component={Orders}/>
          <Route path="/funds" component={Funds}/>
          <Route render={() => <Redirect to="/"/>}/>
      </Switch>
  );
}

export default Routes;