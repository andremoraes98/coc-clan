import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Clan from './pages/Clan';
import MemberClan from './pages/MemberClan';

const App = () => (
  <Routes>
    <Route path="/" element={ <Clan /> } />
    <Route path="/:tag" element={ <MemberClan /> } />
  </Routes>
);

export default App;
