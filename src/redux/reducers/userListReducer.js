const ADD_USER = "ADD_USER";
const UPDATE_USER = "UPDATE_USER";
const DELETE_USER = "DELETE_USER";

const initialState = [];

const usersListReducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case ADD_USER:
      state = [ ...state, action.payload ];
      return state;

    case UPDATE_USER: {
      const updateState = state.map(( user ) =>
        user.id === action.payload.id ? action.payload : user
      );
      state = updateState;
      return state;
    }

    case DELETE_USER: {
      const filterUsers = state.filter(
        ( user ) => user.id !== action.payload && user
      );
      state = filterUsers;
      return state;
    }

    default:
      return state;
  }
};

export default usersListReducer;
