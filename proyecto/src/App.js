import "./App.css";
import ItemListContainer from "./Components/Item/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../src/Components/Navbar/Navbar";
import Error from "../src/Components/Error";
import ItemDetailContainer from "./Components/ItemDetail/ItemDetailContainer";
import Cart from "../src/Components/Cart/Cart";
import CartProvider from "../src/Components/Context/CartContext";
import { Checkout } from "../src/Components/CheckOut/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <NavBar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path={"/cart"} element={<Cart />} />
            <Route path={"/checkout"} element={<Checkout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
