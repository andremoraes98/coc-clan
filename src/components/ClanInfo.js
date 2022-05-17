import React from 'react';
import { mockResponseClan } from '../helpers/data';

const ClanInfo = () => {
  const {
    warWins,
    warWinStreak,
    members,
    type,
    requiredTrophies,
    warFrequency,
    location: { name },
  } = mockResponseClan;

  return (
    <div>
      <p>Guerras vencidas: <strong>{ warWins }</strong></p>
      <p>Vitórias seguidas: <strong>{ warWinStreak }</strong></p>
      <p>Membros: <strong>{ members }</strong></p>
      <p>Tipo: <strong>{ type === 'initeOnly' ? 'Apenas convidados' : 'Aberto' }</strong></p>
      <p>Troféus necessários: <strong>{ requiredTrophies }</strong></p>
      <p>Frequência de guerra: <strong>{ warFrequency === 'always' ? 'Sempre' : 'Frequentemente' }</strong></p>
      <p>Localização do clã: <strong>{ name }</strong></p>
    </div>
  )
}

export default ClanInfo;