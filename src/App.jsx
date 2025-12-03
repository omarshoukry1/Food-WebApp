import Cart from "./components/Cart.jsx";
import CheckOut from "./components/Checkout.jsx";
import Header from "./components/Header";
import Meals from "./components/Meals";
import {CartContextProvider} from "./store/CartContext";
import { UserProgressContextprovider } from "./store/UserProgressContext.jsx";

function App() {
  return (
    <>
    <UserProgressContextprovider>
    <CartContextProvider>
       <Header />
       <Meals/>
       <Cart/>
       <CheckOut/>
    </CartContextProvider>
    </UserProgressContextprovider>
    </>
  );
}

export default App;
