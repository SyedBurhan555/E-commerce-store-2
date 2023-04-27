const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCT":
      let priceData = action.payload.map((curElem)=>curElem.price)
      let maxPrice = Math.max(...priceData)
      return {
        ...state,
        filter_product: [...action.payload],
        all_products: [...action.payload],
        filter:{...state.filter,maxPrice,priceData:maxPrice}
      };
    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "SET_SORT":
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "PRODUCT_SORTING":
      let newSortings;
      const { filter_product, sorting_value } = state;
      let tempSortProduct = [...filter_product];

      const sortingProduct = (a, b) => {
        if (sorting_value === "lowest") {
          return a.price - b.price;
        }
        if (sorting_value === "highest") {
          return b.price - a.price;
        }
        if (sorting_value === "a-z") {
          return a.name.localeCompare(b.name);
        }
        if (sorting_value === "z-a") {
          return b.name.localeCompare(a.name);
        }
      };
      newSortings = tempSortProduct.sort(sortingProduct);
      return {
        ...state,
        filter_product: newSortings,
      };

    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filter: {
          ...state.filter,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      const { all_products } = state;
      let tempfilterData = [...all_products];
      const { text, category, company,colors,price } = state.filter;
      if (text) {
        tempfilterData = tempfilterData.filter((curElem) => {
          return curElem.name.toLowerCase().includes(text);
        });
      }
      if (category !== "all") {
        tempfilterData = tempfilterData.filter((curElem) => {
          return curElem.category === category;
        });
      }

      if (company !== "all") {
        tempfilterData = tempfilterData.filter((curElem) => {
          return curElem.company.toLowerCase() === company.toLowerCase();
        });
      }
      if (colors !== "all") {
        tempfilterData = tempfilterData.filter((curElemColor) => {
          return curElemColor.colors.includes(colors);
        });
      }
      if (price === 0) {
        tempfilterData = tempfilterData.filter(
          (curElem) => curElem
        );
      } else {
        tempfilterData = tempfilterData.filter(
          (curElem) => curElem.price <= price
        );
      }
      // let maxPrice = Math.max(...price)
      return {
        ...state,
        filter_product: tempfilterData,
      };
      case "CLEAR_FILTER" :
        return{
          ...state,
          filter:{
            ...state.filter,
            text:'',
            category:'all',
            company:'all',
            colors:'all',
            price:state.filter.maxPrice,
            maxPrice:state.filter.maxPrice,
            minPrice:state.filter.minPrice,
          }
        }
    default:
      return state;
  }
};

export default FilterReducer;
