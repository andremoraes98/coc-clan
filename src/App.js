import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Clan from './pages/Clan';
import MemberClan from './pages/MemberClan';

const App = () => (
  <Switch>
      <Route path="/:tag" component={ MemberClan } />
      <Route path="/" component={ Clan } />
  </Switch>
);

export default App;
