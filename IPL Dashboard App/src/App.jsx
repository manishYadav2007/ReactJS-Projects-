import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import TeamMatches from "./components/TeamMatches";
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/team-matches/:id" element={<TeamMatches />}></Route>
      </Routes>
    </>
  );
};

export default App;
