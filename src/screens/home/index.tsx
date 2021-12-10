import React from 'react';
import {Link} from "react-router-dom";

function Home() {
    React.useEffect(()=>{
        console.log('From dummyx');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
  return (
    <div className="Dummmy">
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
      >
        Helloo tu mmy xxxxcdsafs
      </a>
        <Link to="/dashboard">Dummy</Link>
    </div>
  );
}

export default Home;
