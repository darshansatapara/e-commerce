import { createContext, useContext, useReducer } from "react";
import reducer from "../reducer/cartreducer";

const CartContext = createContext();

const initialstate = {
  cart: [],
  total_price: "",
  total_amount: "",
  shippig_fee: 50000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  return (
    <CartContext.Provider value={{ ...state, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
