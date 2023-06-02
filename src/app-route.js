import { Routes, Route } from "react-router-dom";
import { useCartState } from "./context/CartContext";
import { About } from "./pages/About";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

export default function AppRout(){
    const {mode}=useCartState();

    return(
        <div className={`${mode=="light"?"bg-light text-dark":"bg-dark text-light"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </div>
    )
}