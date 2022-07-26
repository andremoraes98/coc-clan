import React, { useContext } from 'react';
import ClanBadge from '../components/clan/ClanBadge';
import ClanInfo from '../components/clan/ClanInfo';
import ClanDescription from '../components/clan/ClanDescription';
import AllClanMembers from '../components/clan/AllClanMembers';
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