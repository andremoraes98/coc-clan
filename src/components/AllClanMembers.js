import React from 'react';
import { mockResponseClan } from '../helpers/data';

const AllClanMembers = ({ history }) => {
  const { memberList } = mockResponseClan;

  const memberRole = (role) => {
    if (role === 'admin') {
      return 'Ancião'
    }
    if (role === 'coLeader') {
      return 'Co-Líder'
    }
    if (role === 'leader') {
      return 'Líder'
    }
    return 'Membro'
  }

  return (
    <table>
      <thead>
        <tr>
          <th><h3>Rank</h3></th>
          <th><h3>Nome</h3></th>
          <th><h3>Cargo</h3></th>
          <th><h3>Tropas Doadas</h3></th>
          <th><h3>Tropas Recebidas</h3></th>
        </tr>
      </thead>
      <tbody>
        {memberList.map((member) => {
          const isTroopsBalanced = member.donationsReceived / member.donations > 1;

          return (
            <tr
              key={ member.name }
              className='cursor-pointer'
              onClick={ () => history.push(
                `%23${member.tag.replace('#', '')}`
              ) }
            >
              <td><p>{ member.clanRank }. </p></td>
              <td
                id="member-name"
                className={
                  isTroopsBalanced
                    ? 'red-background-color'
                    : null
                }
              >
                <p>{ member.name }</p>
              </td>
              <td><p>{ memberRole(member.role) }</p></td>
              <td><p>{ member.donations }</p></td>
              <td><p>{ member.donationsReceived }</p></td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )

}

export default AllClanMembers;
