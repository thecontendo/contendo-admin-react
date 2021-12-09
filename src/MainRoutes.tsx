import React from 'react';
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Dummy from "./Dummy";
import DummyX from "./DummyX";

function App() {
  React.useEffect(()=>{
    console.log('From routes');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
      <Routes>
        <Route path="/" element={<Dummy />} />
        <Route path="/dummyx" element={<DummyX />} />
      </Routes>
  );
}

export default App;
