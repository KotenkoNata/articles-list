const defaultState = {
    newsArticles: [],
    pageNumber: 1,
    totalResults: 0,
}

const ADD_NEWS_ARTICLE = "ADD_NEWS_ARTICLE";
const UPDATE_PAGE_NUMBER = "UPDATE_PAGE_NUMBER";

function distinctArticles(articles) {
    articles = new Map(articles.map(item => [item["urlToImage"], item])).values()
    return [...articles]
}

export const newsArticlesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_NEWS_ARTICLE:
            const {totalResults, articles} = action.payload
            return {
                ...state,
                totalResults: totalResults,
                newsArticles: distinctArticles([
                    ...state.newsArticles,
                    ...articles,
                ]),
            }
        case UPDATE_PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.payload
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
