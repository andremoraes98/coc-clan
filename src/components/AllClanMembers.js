import React from 'react';
import { mockResponseClan } from '../helpers/data';

const AllClanMembers = ({ history }) => {
  const { memberList } = mockResponseClan;

  console.log(memberList)

  return (
    <table>
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
        {memberList.map((member) => {
          const isTroopsBalanced = member.donationsReceived / member.donations > 1;

          return (
            <tr
              key={ member.name }
            >
              <td>{ member.clanRank }. </td>
              <td
                onClick={ () => history.push(`%23${member.tag.replace('#', '')}`)}
                className={
                  isTroopsBalanced
                    ? 'red-background-color cursor-pointer'
                    : 'cursor-pointer' 
                }
              >
                { member.name }
              </td>
              <td>{ member.role }</td>
              <td>{ member.donations }</td>
              <td>{ member.donationsReceived }</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

}

export default AllClanMembers;
