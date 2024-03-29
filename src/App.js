import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProviders from "./store/cartProviders";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () =>{
    setCartIsShown(true);
  }
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  return (
    <CartProviders>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProviders>
  );
}

export default App;
