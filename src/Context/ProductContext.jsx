import { useEffect, useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import reducer from "../reducers/ProductReducers";
import { API } from "../API/Api";

const AppContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProductData: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "MY_API_SUCCESS", payload: products });
    } catch (error) {
      dispatch({ type: "MY_API_ERROR" });
    }
  };
  const getSingleData = async(url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProductData = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProductData });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    getData(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state,getSingleData}}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};



export { AppProvider, AppContext, useProductContext };
