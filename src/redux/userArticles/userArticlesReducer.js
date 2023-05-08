const defaultState = {
    userArticles: []
}

const ADD_ARTICLE = "ADD_ARTICLE";
const REMOVE_ARTICLE = "REMOVE_ARTICLE";

export const userArticlesReducer = (state = defaultState, action) =>{
    switch (action.type){
        case ADD_ARTICLE:
            return {...state, userArticles: [...state.userArticles, action.payload]}
        case REMOVE_ARTICLE:
            return {...state, userArticles: state.userArticles.filter(item=>item.id !== action.payload)}
        default:
            return state;
    }
}

export const addUserArticleAction = (payload) => ({type: ADD_ARTICLE, payload});
export const removeUserArticleAction = (payload) => ({type: REMOVE_ARTICLE, payload});