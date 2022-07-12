import React, { useContext } from 'react';
import ClanContext from '../context/ClanContext';

const AllClanMembers = () => {
  const { clanInfo } = useContext(ClanContext);

  console.log(clanInfo)

  return (
    <table>
      <thead>
        <th>Rank</th>
        <th>Nome</th>
        <th>Cargo</th>
        <th>Tropas Doadas</th>
        <th>Tropas Recebidas</th>
      </thead>
      {clanInfo.map(member => (
        <tr>
          <td>{ member.clanRank }. </td>
          <td>{ member.name }</td>
          <td>{ member.role }</td>
          <td>{ member.donations }</td>
          <td>{ member.donationsReceived }</td>
        </tr>
      ))}
    </table>
  )

}

export default AllClanMembers;
