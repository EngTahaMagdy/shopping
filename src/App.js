import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import MyCart from "./components/myCart";
import AppRout from "./app-route";
function App() {
  return (
    <CartProvider>
      <Navbar />
      <MyCart />
      <AppRout />
    </CartProvider>
  );
}

export default App;
