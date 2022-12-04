import { Routes, Route } from "react-router-dom";

import { Navbar } from "./components";
import Home from "./pages/Home";
import Counting from "./pages/Counting";
import NotFound from "./pages/404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="counting" element={<Counting />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
