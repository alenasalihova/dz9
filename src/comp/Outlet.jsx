import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
//import Users from './Users';
//import Posts from './Posts';
//import Comments from './Comments';
import { Users, Posts, Comments } from './'

class Outlet extends Component {
  render() {
    return (
      <Switch>
        <Route path="/users" component={Users} />
        <Route path="/posts" component={Posts} />
        <Route path="/comments" component={Comments} />
      </Switch>
    );
  }
}

export default Outlet;