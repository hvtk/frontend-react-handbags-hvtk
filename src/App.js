import React from 'react';
import './App.css';
import Buttons from "./Buttons";

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
      <Buttons/>
      <button type="button" onClick={() => console.log("shop all bags")} > shop all bags </button>
      <button type="button" onClick={() => console.log("pre-orders")}  > pre-orders </button>
      </nav>
      </>
  );
}

export default App;



