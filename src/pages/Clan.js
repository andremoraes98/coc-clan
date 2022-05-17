import React from 'react';
import ClanBadge from '../components/ClanBadge';
import ClanInfo from '../components/ClanInfo';
import ClanDescription from '../components/ClanDescription';
import { mockResponseAPI } from '../helpers/JSON';

const Clan = () => {
  console.log(mockResponseAPI)

  return (
    <section className="main-clan">
      <ClanBadge />
      <ClanInfo />
      <ClanDescription />
    </section>
  )
}

export default Clan;