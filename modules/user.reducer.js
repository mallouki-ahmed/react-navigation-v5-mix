const INITIAL_STATE = {
  users: [],
  counter: [],
};

const users = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        authUser: action.payload,
      };

    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
      };

    case 'DELETE_USER':
      return {
        ...state,
        users: state.users.filter(el => {
          return el._id !== action.payload._id;
        }),
      };
    case 'GET_CONTEURS':
      return {
        ...state,
        counter: action.payload,
      };
    default:
      return state;
  }
};

export default users;
