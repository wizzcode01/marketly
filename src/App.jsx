import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Delivery from "./pages/Delivery";
import About from "./pages/About";
import Vendors from "./pages/Vendors";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/about" element={<About />} />
        <Route path="/vendors" element={<Vendors />} />
      </Routes>
    </>
  );
}

export default App;
