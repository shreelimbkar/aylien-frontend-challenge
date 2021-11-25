import React from "react";
import "./App.css";

import { SearchPage } from "./pages";

function App() {
  return (
    <div className="App">
      <h1>Application Home Page</h1>
      <h3>Search Companies, Organisations, People or Places...</h3>
      <SearchPage />
    </div>
  );
}

export default App;
