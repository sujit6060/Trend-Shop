const initialState = [];

// Reducer function for managing the cart state
const handleCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];

    case "DELITEM":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default handleCart;
