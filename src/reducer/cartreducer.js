const cartreducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;
    console.log(product)
      return {
        ...state,
      };

    default:
      break;
  }
};

export default cartreducer;
