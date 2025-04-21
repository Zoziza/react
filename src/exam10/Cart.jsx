import { useContext } from "react";
import { CartContext } from "./CartContext";

function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const handleRemove = (product) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: product });
  };

  const handleClear = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>Cart</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {state.cart.map((product) => (
          <li
            key={product.id}
            style={{
              padding: "10px",
              margin: "10px 0",
              backgroundColor: "#f9f9f9",
              border: "1px solid #ddd",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              {product.name} - ${product.price}
            </span>
            <button
              onClick={() => handleRemove(product)}
              style={{
                padding: "5px 10px",
                backgroundColor: "black",
                color: "white",
                border: "none",
                borderRadius: "5px",
                  
               
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      {state.cart.length > 0 ? (
        <button
          onClick={handleClear}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "5px",
        
          }}
        >
          Clear Cart
        </button>
      ) : (
        <p style={{ marginTop: "20px", color: "#888" }}>Your cart is empty.</p>
      )}
    </div>
  );
}

export default Cart;