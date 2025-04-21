import React, {createContext, useReducer} from "react";

export const CartContext = createContext();

const initialState = {
    cart: [],
}; 


const reduce = (state, action) => {
    switch (action.type) {
     case "ADD_TO_CART":
        return { ...state, cart: [...state.cart, action.payload] };
        case "REMOVE_FROM_CART":
        return { ...state, cart: state.cart.filter(item => item.id !== action.payload.id) };
        case "CLEAR_CART":
        return { ...state, cart: [] };
        default:
        return state;
    }
}

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reduce, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

