import {userArticlesReducer} from "./userArticles/userArticlesReducer";
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        userArticles: userArticlesReducer,
    },
    devTools: process.env.NODE_ENV === 'development',
});
