import React, { useContext } from 'react';
import ClanContext from '../context/ClanContext';

const ClanBadge = () => {
  const { clanInfo: { description } } = useContext(ClanContext);
  const descriptionSplited = description.split('🍀').slice(0, 7);

  return (
    <div>
      { descriptionSplited.map((text, index) => <h4 key={ index }>🍀 { text } 🍀</h4>) }
    </div>
  )
}

export default ClanBadge;