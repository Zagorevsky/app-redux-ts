import { UserAction, UserActionTypes, UserState } from "../../types/user";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const useReducer = (state = initialState, action:UserAction): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return { loading: true, users: [], error: null };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return { loading: false, users: action.payload, error: null };
    case UserActionTypes.FETCH_USERS_ERROR:
      return { loading: false, users: [], error: null };
    default:
      return state
  }
};
