import { useContext, useReducer } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import reducer from "../reducers/FilterReducer";
import { useProductContext } from "./ProductContext";

export const FilterProductContext = createContext();

const initialState = {
  filter_product: [],
  all_products: [],
  grid_view: true,
  sorting_value:'lowest',
  filter:{
    text:'',
    category:'all',
    company:'all',
    colors:'all',
    price:0,
    maxPrice:0,
    minPrice:0,
  },
};

export const FilterProductProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  const setGridView = ()=>{
    return dispatch({type:"SET_GRID_VIEW"})
  } 
  const setListView = ()=>{
    return dispatch({type:"SET_LIST_VIEW"})
  } 
  const updateFilter = (event)=>{
    const name = event.target.name;
    const value = event.target.value;
    return dispatch({type:"UPDATE_FILTER_VALUE",payload:{name,value}})
  }
  const sorting = (event)=>{
    const userValue = event.target.value
    return dispatch({type:"SET_SORT",payload:userValue})
  }
  const clearFilter = ()=>{
    return dispatch({type:"CLEAR_FILTER"})
  }
  useEffect(()=>{
  dispatch({type:'FILTER_PRODUCTS'})
  dispatch({type:'PRODUCT_SORTING'})
  },[products,state.sorting_value,state.filter]);
  
  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCT", payload: products });
  }, [products]);

  return (
    <FilterProductContext.Provider value={{...state,setListView,setGridView,sorting,updateFilter,clearFilter}}>
      {children}
    </FilterProductContext.Provider>
  );
};

export const useFilterContex = () => {
  return useContext(FilterProductContext);
};
