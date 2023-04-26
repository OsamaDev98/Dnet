import React from "react";
import { Home } from "./components/export";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
