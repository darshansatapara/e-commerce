const cartreducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let { id, color, amount, product } = action.payload;

      let cartProduct;
      cartProduct = {
        id: id + color,
        name: product.name,
        amount,
        color,
        image: product.image[0].url,
        max: product.stock,
        price: product.price,
      };

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };

    case "REMOVE_ITEM":
      let updateCart;
      updateCart = state.cart.filter((curEle) => curEle.id != action.payload)

      return {
        ...state,
        cart: updateCart,
      };

    default:
      break;
  }
};

export default cartreducer;
