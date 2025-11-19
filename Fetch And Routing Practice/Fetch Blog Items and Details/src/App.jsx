// import { Route, Switch } from "react-router-dom";
import {useParams, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

import "./App.css";
import BlogItemDetails from "./components/BlogItemDetails";

const BlogListItenWrapper = () => {
  const { id } = useParams();
  return <BlogItemDetails id={id} />;
};

const App = () => (
  <div className="app-container">
    <div className="responsive-container">
      <Header />
      <div className="app-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs/:id" element={<BlogListItenWrapper />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </div>
);

export default App;
