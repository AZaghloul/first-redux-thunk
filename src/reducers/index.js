import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
import usersReducer from "./usersReducer";

const rootReducer = combineReducers({
    posts:postsReducer,
    users: usersReducer
});

export default rootReducer;