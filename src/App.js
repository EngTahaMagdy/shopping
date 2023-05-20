import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import MyCart from "./components/myCart";
function App() {
  return (
    <CartProvider>
      <Navbar />
      <MyCart />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
