import React from 'react';
import ClanBadge from '../components/ClanBadge';
import ClanInfo from '../components/ClanInfo';
import ClanDescription from '../components/ClanDescription';
import AllClanMembers from '../components/AllClanMembers';

const Clan = () => {

  return (
    <>
      <section className="main-clan">
        <ClanBadge />
        <ClanInfo />
        <ClanDescription />
      </section>
      <AllClanMembers />
    </>
  )
}

export default Clan;