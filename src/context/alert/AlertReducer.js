const alertReducer = (state, action) => {
  switch (action.type) {
    case "SET_ALERT":
      return action.payload;
      break;
    case "REMOVE_ALERT":
      return null;
      break;
    default:
      return state;
  }
};

export default alertReducer
