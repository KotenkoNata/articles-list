import {addNewsArticlesAction, updateNewsArticlesPageNumberAction} from "../userArticles/newsArticlesReducer";

export const fetchNewsArticles = (page) => {
    return function (dispatch) {
        const url = 'https://newsapi.org/v2/top-headlines?' +
            'pageSize=10&' +
            'country=us&' +
            `page=${page}&` +
            `apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;
        const req = new Request(url);
        fetch(req)
            .then(response => {
                return response.json()
            })
            .then(json => {
                return dispatch(addNewsArticlesAction(json.articles))
            })
    }
}