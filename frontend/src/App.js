import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Products</h1>} />
          <Route path="/add-product" element={<h1>add-product</h1>} />
          <Route path="/update-product" element={<h1>update-product</h1>} />
          <Route path="/logout" element={<h1>logout</h1>} />
          <Route path="/profile" element={<h1>profile</h1>} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
