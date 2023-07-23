import { Routes, Route } from "react-router-dom";
import { useCartState } from "./context/CartContext";
import { Store } from "./pages/Store";
import { Dashboard } from "./pages/Dashboard";

export default function AppRout() {
  const { mode } = useCartState();

  return (
    <div
      className={`${
        mode == "light" ? "bg-light text-dark" : "bg-dark text-light"
      }`}
    >
      <Routes>
        <Route path="/store" element={<Store />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}
