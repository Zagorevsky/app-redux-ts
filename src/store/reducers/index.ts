import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { photoReducer } from "./photoReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  photo: photoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
