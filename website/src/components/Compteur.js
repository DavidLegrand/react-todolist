import React, { useState, useEffect, useRef } from 'react';

function Compteur() {
  const [count, setCount] = useState(0);
  useEffect(
    () => console.log(count)
  );
  return (<>
    <h1>Vous avez cliqué : {count} fois</h1>
    <button onClick={() => setCount(count + 1)}>+1!</button>
  </>);

}

export default Compteur;