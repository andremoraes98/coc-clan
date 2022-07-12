import React from 'react';
import { mockResponseAPI } from '../helpers/JSON';

const ClanBadge = () => {
  const { description } = mockResponseAPI;
  const descriptionSplited = description.split('🍀');

  console.log(descriptionSplited.pop());

  return (
    <div>
      { descriptionSplited.map((text, index) => <h4 key={ index }>🍀 { text } 🍀</h4>) }
    </div>
  )
}

export default ClanBadge;