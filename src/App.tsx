import { Routes, Route } from "react-router-dom";
import React from "react";
import LayoutPage from "./pages/LayoutPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage/>}/>
      </Routes>
    </>
  );
}

export default App;
