import './App.css';
import { React } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { BlogDetails } from './components/BlogDetails';
import { useState } from "react";
import { AddBlog } from './components/AddBlog';

function App() {

  const [id, setId] = useState(0);
  const idSet = (e) => {
    setId(e)
  }

  return (
    <div className="App">

      <Router>
        <Nav></Nav>
        <Routes>
          <Route path='/' exact element={<Home postId={idSet} />} />
          <Route path='/add-blog' exact element={<AddBlog />} />
          <Route path='/blog/:id' element={<BlogDetails postId={id} />} />

        </Routes>
      </Router>

    </div>
  );
}

export default App;
