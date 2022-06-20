interface UserState {
  users: any[];
  loading: boolean;
  error: null | string;
}

interface UserAction {
  type: string;
  payload?: any;
}

const initialState = {
  loading: false,
  users: [],
  error: null,
};

export const useReducer = (state = initialState, action:UserAction): UserState => {
  switch (action.type) {
    case "FETCH_USERS":
      return { loading: true, users: [], error: null };
    case "FETCH_USERS_SUCCESS":
      return { loading: false, users: action.payload, error: null };
    case "FETCH_USERS_ERROR":
      return { loading: false, users: [], error: null };
    default:
      return state
  }
};
