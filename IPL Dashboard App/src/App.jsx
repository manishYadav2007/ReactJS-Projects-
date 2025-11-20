import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </>
  );
};

export default App;
