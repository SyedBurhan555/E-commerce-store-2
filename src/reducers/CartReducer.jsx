const CartReducer = (state, action) => {
  if (action.type === "ADD_TO_CART") {
    const { id, maincolor, amount, product } = action.payload;

    const existingProduct = state.cart.find(
      (curItem) => curItem.id === id + maincolor
    );
    // console.log('existingProduct',existingProduct)

    if (existingProduct) {
      const updatingProduct = state.cart.map((curItem) => {
        if (curItem.id === id + maincolor) {
          let newAmount = curItem.amount + amount;
          if (newAmount >= curItem.max) {
            newAmount = curItem.max;
          }
          return {
            ...curItem,
            amount: newAmount,
          };
        } else {
          return curItem;
        }
      });
      return {
        ...state,
        cart: updatingProduct,
      };
    } else {
      let CartProduct = {
        id: id + maincolor,
        amount,
        maincolor,
        name: product.name,
        image: product.image[0].url,
        price: product.price,
        max: product.stock,
      };
      return {
        ...state,
        cart: [...state.cart, CartProduct],
      };
    }
  }
  if (action.type === "INCREMENT_PRODUCT") {
    const updatingVal = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let increase = curItem.amount + 1;

        if (increase >= curItem.max) {
          increase = curItem.max;
        }
        return {
          ...curItem,
          amount: increase,
        };
      } else {
        return curItem;
      }
    });
    return {
      ...state,
      cart: updatingVal,
    };
  }
  if (action.type === "DECREMENT_PRODUCT") {
    const decreasePr = state.cart.map((curItem) => {
      if (curItem.id === action.payload) {
        let decrease = curItem.amount - 1;
        if (decrease <= 1) {
          decrease = 1;
        }
        return {
          ...curItem,
          amount: decrease,
        };
      } else {
        return curItem;
      }
    });
    return {
      ...state,
      cart: decreasePr,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    let removeItem = state.cart.filter(
      (curLem) => curLem.id !== action.payload
    );
    return {
      ...state,
      cart: removeItem,
    };
  }
  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }
  if (action.type === "TOTAL_AMOUNT") {
    const Amount = state.cart.map((curElem) => curElem.price * curElem.amount);
    const totalAmount = Amount.reduce((a, b) => {
      return a + b;
    }, 0);
    return {
      ...state,
      total_amount: totalAmount,
    };
  }

  return state;
};

export default CartReducer;
