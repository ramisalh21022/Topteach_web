import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
   <BrowserRouter basename="/Topteach_web">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
             </Routes>
      <Footer />
    </BrowserRouter basename="/Topteach_web">
  );
}
