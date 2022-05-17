import React from 'react';
import MemberBadge from '../components/MemberBadge'
import { mockResponseAPI } from '../helpers/JSON';

const Clan = () => {
  console.log(mockResponseAPI)

  return (
    <MemberBadge />
  )
}

export default Clan;