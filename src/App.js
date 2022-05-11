import React, { useContext }  from 'react';
import { useEffect } from 'react';
import ClanContext from './context/ClanContext'

const App = () => {
  const { requestClanInfo, clanInfo } = useContext(ClanContext);

  useEffect(() => {
    requestClanInfo('2POC9CQY8');
  }, []);

  console.log(clanInfo);

  return (
    <h1 >
      hello, cabesas
    </h1>
  );
}

export default App;
