import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import { ShoContextProvider } from "./context/ShoContext";

function App() {
  return (
    <div>
      {/* // 12 */}
      <ShoContextProvider>  
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShoContextProvider>
    </div>
  );
}

export default App;
