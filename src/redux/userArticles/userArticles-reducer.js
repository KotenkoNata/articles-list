import {createReducer} from "@reduxjs/toolkit";

const userArticles = createReducer([], {
    'userArticle/add': (state, {payload}) => [...state, payload],
})