import React from 'react';
import { mockResponseClan } from '../helpers/data';

const ClanBadge = () => {
  const { badgeUrls: { medium }, name, tag } = mockResponseClan;

  return (
    <div className="logo-clan">
      <h2>{ name }</h2>
      <h4>{ tag }</h4>
      <img src={ medium } alt="Badge Clan" />
    </div>
  )
}

export default ClanBadge;