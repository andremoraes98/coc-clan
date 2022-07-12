import React from 'react';
import { mockResponseAPI } from '../helpers/JSON';

const ClanInfo = () => {
  const {
    warWins,
    warWinStreak,
    members,
    type,
    requiredTrophies,
    warFrequency,
    location: { name },
  } = mockResponseAPI;

  return (
    <div>
      <p>Guerras vencidas: { warWins }</p>
      <p>Vitórias seguidas: { warWinStreak }</p>
      <p>Membros: { members }</p>
      <p>Tipos: { type }</p>
      <p>Troféus necessários: { requiredTrophies }</p>
      <p>Frequência de guerra: { warFrequency }</p>
      <p>Localização do clã: { name }</p>
    </div>
  )
}

export default ClanInfo;