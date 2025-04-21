import React, {useContext} from "react";
import { CartContext } from "./CartContext";

const ProductList = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
    { id: 4, name: "Product 4", price: 40 },

]

function ProducList () {
    const {state, dispatch } = useContext(CartContext); 
    const hadleAdd = (product) => {
         dispatch ({type: "ADD_TO_CART", payload: product}); 
    }
     return ( 
        <div>
            <h2> Product List</h2>
             <ul>
                {ProductList.map((product) => (
                    <li  style={{
                        padding: "10px",
                        width : "300px",
                        margin: "10px 0",
                        backgroundColor: "#f9f9f9",
                        border: "1px solid #ddd",
                        borderRadius: "5px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}key={product.id}>
                        {product.name} - ${product.price}
                        <button style={{
                            padding: "5px 10px",
                            backgroundColor: "green",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                        }} onClick={() => hadleAdd(product)}>Add to Cart</button>
                    </li>
                ))
}
             </ul>
        </div>
     )
}
 export default ProducList