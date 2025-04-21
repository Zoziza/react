import ProducList from "./ProductList";
import Cart from "./Cart";
import { CartProvider } from "./CartContext";



function App() {
    return (
        <CartProvider>
        <div>
            <h1>Shopping Cart</h1>
            <ProducList />
            <Cart/>
        </div>
        </CartProvider>
    );
}
export default App;