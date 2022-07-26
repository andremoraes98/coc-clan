import React, { useContext } from 'react';
import ClanBadge from '../components/ClanBadge';
import ClanInfo from '../components/ClanInfo';
import ClanDescription from '../components/ClanDescription';
import AllClanMembers from '../components/AllClanMembers';
import ClanContext from '../context/ClanContext';

const Clan = () => {
  const { isFetchOk } = useContext(ClanContext);

  return (
    isFetchOk
      ? (
      <>
        <section className="main-clan">
          <ClanBadge />
          <ClanInfo />
          <ClanDescription />
        </section>
        <AllClanMembers />
      </>
      )
      : <h1>Loading...</h1>
  )
}

export default Clan;