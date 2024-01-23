import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Users, Posts, Comments } from './';

class Outlet extends Component {
  render() {
    return (
      <Routes>
        <Route path="/users" component={Users} />
        <Route path="/posts" component={Posts} />
        <Route path="/comments" component={Comments} />
      </Routes>
    );
  }
}

export default Outlet;