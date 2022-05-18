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
    location: { name: country },
  } = mockResponseClan;

  return (
    <div className="info-clan">
      <ul>
        <li>Guerras vencidas: <strong>{ warWins }</strong></li>
        <li>Vitórias seguidas: <strong>{ warWinStreak }</strong></li>
        <li>Membros: <strong>{ members }</strong></li>
        <li>Tipo: <strong>{ type === 'initeOnly' ? 'Apenas convidados' : 'Aberto' }</strong></li>
        <li>Troféus necessários: <strong>{ requiredTrophies }</strong></li>
        <li>Frequência de guerra: <strong>{ warFrequency === 'always' ? 'Sempre' : 'Frequentemente' }</strong></li>
        <li>Localização do clã: <strong>{ country }</strong></li>
      </ul>
    </div>
  )
}

export default ClanInfo;