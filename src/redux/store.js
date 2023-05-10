import {userArticlesReducer} from "./userArticles/userArticlesReducer";
import {configureStore} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import {newsArticlesReducer} from "./userArticles/newsArticlesReducer"

export const store = configureStore({
    reducer: {
        userArticles: userArticlesReducer,
        newsArticles: newsArticlesReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware: [thunk],
});
