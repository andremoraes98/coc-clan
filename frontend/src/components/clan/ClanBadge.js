import React, { useContext } from 'react';
import ClanContext from '../../context/ClanContext';

const ClanBadge = () => {
  const { clanInfo: { badgeUrls: { medium } } } = useContext(ClanContext);

  return (
    <img src={ medium } alt="Badge Clan" />
  )
}

export default ClanBadge;