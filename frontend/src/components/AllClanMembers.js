import React, { useContext } from 'react';
import ClanContext from '../context/ClanContext';

const AllClanMembers = () => {
  const { clanInfo: { memberList }, isFetchOk } = useContext(ClanContext);

  return (
    isFetchOk
      ? (<table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Tropas Doadas</th>
            <th>Tropas Recebidas</th>
          </tr>
        </thead>
        <tbody>
          {memberList.map(member => (
            <tr
              key={member.clanRank}
            >
              <td>{ member.clanRank }. </td>
              <td>{ member.name }</td>
              <td>{ member.role }</td>
              <td>{ member.donations }</td>
              <td>{ member.donationsReceived }</td>
            </tr>
          ))}
        </tbody>
      </table>)
      : <h1>Loading...</h1>    
  )

}

export default AllClanMembers;
