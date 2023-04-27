import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react";
import reducer from "../reducers/CartReducer";

const CartContex = createContext();

const localCartData = () => {
  const data = localStorage.getItem("cartProduct");
  if (data === []) {
    return [];
  } else {
    return JSON.parse(data);
  }
};
const initialState = {
  cart: localCartData(),
  total_item: "",
  total_amount: "",
  shipping_fee: 15000,
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const AddToCart = (id, maincolor, amount, product) => {
    return dispatch({
      type: "ADD_TO_CART",
      payload: { id, maincolor, amount, product },
    });
  };
  const increamentPro = (id) => {
    dispatch({ type: "INCREMENT_PRODUCT", payload: id });
  };
  const decreamentPro = (id) => {
    dispatch({ type: "DECREMENT_PRODUCT", payload: id });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };
  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" });
    dispatch({ type: "COMPLETE_TOTAL" });
    localStorage.setItem("cartProduct", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContex.Provider
      value={{
        ...state,
        AddToCart,
        removeItem,
        clearCart,
        decreamentPro,
        increamentPro,
      }}
    >
      {children}
    </CartContex.Provider>
  );
};

const useCartGlobal = () => {
  return useContext(CartContex);
};

export { useCartGlobal, CartProvider };
