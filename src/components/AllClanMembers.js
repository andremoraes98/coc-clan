import React from 'react';
import { mockResponseAPI } from '../helpers/JSON';

const AllClanMembers = () => {
  const { memberList } = mockResponseAPI;

  console.log(memberList)

  return (
    <table>
      <thead>
        <th>Rank</th>
        <th>Nome</th>
        <th>Cargo</th>
        <th>Tropas Doadas</th>
        <th>Tropas Recebidas</th>
      </thead>
      {memberList.map(member => (
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
