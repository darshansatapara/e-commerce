import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/cartreducer";

const CartContext = createContext();

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("magecart");
  if (!localCartData) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialstate = {
  // cart: [],
  cart: getLocalCartData(),
  total_price: "",
  total_amount: "",
  shippig_fee: 50000,
};
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialstate);

  const addToCart = (id, color, amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, color, amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };


const clearCart=()=>{
  
}




  useEffect(() => {
    localStorage.setItem("magecart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, removeItem }}>
      {children}
    </CartContext.Provider>
  );
};
const useCartContext = () => {
  return useContext(CartContext);
};
export { CartProvider, useCartContext };
