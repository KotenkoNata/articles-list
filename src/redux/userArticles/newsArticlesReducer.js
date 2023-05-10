const defaultState = {
    newsArticles: [],
}

const ADD_NEWSARTICLE = "ADD_NEWSARTICLE";

export const newsArticlesReducer = (state = defaultState, action) =>{
    switch (action.type) {
        case ADD_NEWSARTICLE:
            console.log(`action.payload`,action.payload, state)
        return {...state, newsArticles: [...state.newsArticles, action.payload]}
        default:
            return state;
    }
}

export const addNewsArticlesAction = (payload)=>({type: ADD_NEWSARTICLE, payload: payload})