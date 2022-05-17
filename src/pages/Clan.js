import React from 'react';
import ClanBadge from '../components/ClanBadge';
import ClanInfo from '../components/ClanInfo';
import ClanDescription from '../components/ClanDescription';
import AllClanMembers from '../components/AllClanMembers';

const Clan = ({ history }) => {

  return (
    <>
      <section className="main-clan">
        <ClanBadge />
        <ClanInfo />
        <ClanDescription />
      </section>
      <AllClanMembers history={ history } />
    </>
  )
}

export default Clan;