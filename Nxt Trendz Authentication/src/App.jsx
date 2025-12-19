import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
