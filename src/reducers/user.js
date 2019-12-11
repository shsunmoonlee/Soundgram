const initialState = {
  user: null
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case "SetCurrentUser":
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default user;
