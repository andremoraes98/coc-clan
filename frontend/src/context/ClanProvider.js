import React, { useEffect } from 'react';
import ClanContext from './ClanContext';
import COC_TOKEN from '../token';
import { useState } from 'react';

const ClanProvider = ({ children }) => {
  const [clanInfo, setClanInfo] = useState([]);
  const [isFetchOk, setIsFetchOk] = useState(false);

  const requestClanInfo = async () => {
    const url = `http://localhost:3001/clan`;
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${COC_TOKEN}`,
        'Accept': 'application/json',
      }
    });
    const data = await response.json();
    setClanInfo(data);
    setIsFetchOk(true);
  }

  const requestPlayerInfo = async (playerTag) => {
    setIsFetchOk(false);
    const tag = playerTag.replace('#', '%23');
    setIsFetchOk(true);
    return tag;
  };

  useEffect(() => {
    requestClanInfo();
  }, []);

  const context = {
    requestPlayerInfo,
    clanInfo,
    isFetchOk,
  }

  return (
    <ClanContext.Provider value={ context }>
      { children }
    </ClanContext.Provider>
  )
}

export default ClanProvider;
