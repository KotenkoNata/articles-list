const defaultState = {
    newsArticles: [],
    pageNumber: 1,
    totalResults: 0,
}

const ADD_NEWS_ARTICLE = "ADD_NEWS_ARTICLE";
const UPDATE_PAGE_NUMBER = "UPDATE_PAGE_NUMBER";
const UPDATE_TOTAL_RESULTS = "UPDATE_TOTAL_RESULTS";

function distinctArticles(articles) {
    articles = new Map(articles.map(item => [item["urlToImage"], item])).values()
    return [...articles]
}

export const newsArticlesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEWS_ARTICLE:
            return {
                ...state,
                newsArticles: distinctArticles([
                    ...state.newsArticles,
                    ...action.payload,
                ]),
            }
        case UPDATE_PAGE_NUMBER:
            return {
                ...state,
                newsArticles: [...state.newsArticles],
                pageNumber: action.payload
            }
        case UPDATE_TOTAL_RESULTS:
            return {
                ...state,
                totalResults: action.payload
            }
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

export const updateNewsArticlesTotalResultsAction = (payload) => ({
    type: UPDATE_TOTAL_RESULTS,
    payload: payload
})
