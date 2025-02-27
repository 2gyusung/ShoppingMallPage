let initialState = {
  id: "",
  password: "",
  authenticate: false,
};

function authenciateReducer(state = initialState, action) {
  let { type, action } = action;
  switch (type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
      default :
      return {...state}
  }
}

export default authenciateReducer;
