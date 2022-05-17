import React from 'react';
import { mockResponseAPI } from '../helpers/JSON';

const MemberBadge = () => {
  const {
    badgeUrls: { medium },
    warWins,
    warWinStreak,
    members,
    type,
    requiredTrophies,
    warFrequency,
    location: { name },
    description,
  } = mockResponseAPI;

  return (
    <section className="main-clan">
      <img src={ medium } alt="Badge Clan" />
      <div>
        <p>Guerras vencidas: { warWins }</p>
        <p>Vitórias seguidas: { warWinStreak }</p>
        <p>Membros: { members }</p>
        <p>Tipos: { type }</p>
        <p>Troféus necessários: { requiredTrophies }</p>
        <p>Frequência de guerra: { warFrequency }</p>
        <p>Localização do clã: { name }</p>
      </div>
      <h3>{ description }</h3>
    </section>
  )
}

export default MemberBadge;