import { Routes, Route } from "react-router-dom";
import LayoutPage from "./pages/LayoutPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />} />
      </Routes>
    </>
  );
}

export default App;
