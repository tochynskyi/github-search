import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {usersListReducer, userReducer, reposReducer} from "./reducers";

const rootReducer = combineReducers({
	users: usersListReducer,
	user: userReducer,
	repos: reposReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
