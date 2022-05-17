import React, { useState, useEffect } from 'react';
import { mockResponseClan } from '../helpers/data';

const ClanBadge = () => {
  const { description } = mockResponseClan;
  const [ clanDescription, setClanDescription ] = useState([]);
  
  useEffect(() => {
    const descriptionSplited = description.split('🍀');
    descriptionSplited.pop();
    setClanDescription(descriptionSplited)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      { clanDescription.map((text, index) => <h4 key={ index }>🍀 { text } 🍀</h4>) }
    </div>
  )
}

export default ClanBadge;