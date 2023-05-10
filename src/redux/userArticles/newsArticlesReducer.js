const defaultState = {
    newsArticles: [],
    pageNumber: 1,
}

const ADD_NEWS_ARTICLE = "ADD_NEWS_ARTICLE";
const UPDATE_PAGE_NUMBER = "UPDATE_PAGE_NUMBER"

export const newsArticlesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEWS_ARTICLE:
            return {
                ...state,
                newsArticles: [...state.newsArticles, ...action.payload]
            }
        case UPDATE_PAGE_NUMBER:
            return {...state, newsArticles: [...state.newsArticles], pageNumber: action.payload}
        default:
            return state;
    }
}

export const addNewsArticlesAction = (payload) => ({
    type: ADD_NEWS_ARTICLE,
    payload: payload
})

export const updateNewsArticlesPageNumberAction = (payload) => ({
    type: UPDATE_PAGE_NUMBER,
    payload: payload
})
