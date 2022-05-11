import React from 'react';
import ClanContext from './ClanContext';
import COC_TOKEN from '../token';
import { useState } from 'react';

const ClanProvider = ({ children }) => {
  const [clanInfo, setClanInfo] = useState([])

  const requestClanInfo = async (clanTag) => {
    const url = `https://api.clashofclans.com/v1/clans/%23${clanTag}`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${COC_TOKEN}`,
        'Accept': 'application/json',
      }
    });
    const data = await response.json();
    setClanInfo(data);
  }

  const context = {
    requestClanInfo,
    clanInfo,
  }

  return (
    <ClanContext.Provider value={ context }>
      { children }
    </ClanContext.Provider>
  )
}

export default ClanProvider;
