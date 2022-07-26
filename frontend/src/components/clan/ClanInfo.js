import React, { useContext } from 'react';
import ClanContext from '../../context/ClanContext';

const ClanInfo = () => {
  const { clanInfo: {
      warWins,
      warWinStreak,
      members,
      type,
      requiredTrophies,
      warFrequency,
      location,
    },
  } = useContext(ClanContext);

  return (
    <div>
      <p>Guerras vencidas: { warWins }</p>
      <p>Vitórias seguidas: { warWinStreak }</p>
      <p>Membros: { members }</p>
      <p>Tipos: { type }</p>
      <p>Troféus necessários: { requiredTrophies }</p>
      <p>Frequência de guerra: { warFrequency }</p>
      <p>Localização do clã: { location.name }</p>
    </div>
  )
}

export default ClanInfo;