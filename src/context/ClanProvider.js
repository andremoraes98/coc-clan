import React from 'react';
import ClanContext from './ClanContext';
import COC_TOKEN from '../helpers/token';
import { useState } from 'react';

const ClanProvider = ({ children }) => {
  const [clanInfo, setClanInfo] = useState([])

  const requestClanInfo = async (clanTag) => {
    const url = `http://localhost:3000/clan`;
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
