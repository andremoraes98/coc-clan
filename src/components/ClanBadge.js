import React from 'react';
import { mockResponseClan } from '../helpers/data';

const ClanBadge = () => {
  const { badgeUrls: { medium } } = mockResponseClan;

  return (
    <img src={ medium } alt="Badge Clan" />
  )
}

export default ClanBadge;