import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { Navbar } from "./components";
import Home from "./pages/Home";
import Counting from "./pages/Counting";
import NotFound from "./pages/404";

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />}></Route>
          <Route path="counting" element={<Counting />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;
