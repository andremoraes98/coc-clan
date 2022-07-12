import React from 'react';
import { mockResponseAPI } from '../helpers/JSON';

const ClanBadge = () => {
  const { badgeUrls: { medium } } = mockResponseAPI;

  return (
    <img src={ medium } alt="Badge Clan" />
  )
}

export default ClanBadge;