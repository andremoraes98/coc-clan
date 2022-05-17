import React from 'react';
import { mockResponsePlayer } from '../helpers/data';

const MemberInfo = () => {
  console.log(mockResponsePlayer);
  return (
    <>
      <section>
        <img
          src={ mockResponsePlayer.league.iconUrls.medium }
          alt={ mockResponsePlayer.league.name }
        />
        <div>
          <p>{ mockResponsePlayer.name }</p>
          <p>{ mockResponsePlayer.tag }</p>
        </div>
      </section>
      <section>

      </section>
    </>
  )
}

export default MemberInfo;
