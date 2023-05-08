import {combineReducers, createStore} from "redux";
import {userArticlesReducer} from "./userArticles/userArticlesReducer";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
        userArticles: userArticlesReducer,
})

export const store = createStore(rootReducer, composeWithDevTools());