const ProductReducers = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "MY_API_SUCCESS":
      const featureData = action.payload.filter((CurEle) => {
        return CurEle.featured;
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureData,
      };
    case "MY_API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
      case "SET_SINGLE_LOADING":
        return {
          ...state,
          isSingleLoading: true,
        };
        case 'SET_SINGLE_PRODUCT' :
          return{
            ...state,
            isSingleLoading:false,
            singleProductData:action.payload, 
          };
          
          case "SET_SINGLE_ERROR":
            return {
              ...state,
              isSingleLoading: false,
              isError: true,
            };
    default:
      return state;
  }
};

export default ProductReducers;
