const defaultState = []


const ADD_ARTICLE = "ADD_ARTICLE";
const REMOVE_ARTICLE = "REMOVE_ARTICLE";
const GET_ARTICLES = "GET_ARTICLES";

export const userArticlesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_ARTICLES:
            return [...state];
        case ADD_ARTICLE:
            return [...state, action.payload];
        case REMOVE_ARTICLE:
            return {...state, userArticles: state.userArticles.filter(item => item.id !== action.payload)}
        default:
            return state;
    }
}

export const addUserArticleAction = (payload) => ({type: ADD_ARTICLE, payload: payload});
export const removeUserArticleAction = (payload) => ({type: REMOVE_ARTICLE, payload: payload});
export const getUserArticleAction = (payload) => ({type: GET_ARTICLES, payload: payload});
