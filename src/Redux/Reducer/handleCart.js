const initialState = [];

// Reducer function for managing the cart state
const handleCart = (state = initialState, action) => {
  switch (action.type) {
    case "ADDITEM":
      if (!action.payload || action.payload.id == null) {
        return state;
      }
      return state.some((item) => item.id === action.payload.id)
        ? state.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: (item.quantity || 1) + 1 }
              : item
          )
        : [...state, { ...action.payload, quantity: 1 }];

    case "DELITEM":
      return state.filter((item) => item.id !== action.payload.id);

    default:
      return state;
  }
};

export default handleCart;
