import staticArticles from "./articles.json"
import {addNewsArticlesAction, updateNewsArticlesTotalResultsAction} from "../userArticles/newsArticlesReducer";

async function getRemoteArticles({page, pageSize = 10}) {
    const url = 'https://newsapi.org/v2/top-headlines?' +
        `pageSize=${pageSize}&` +
        'country=us&' +
        `page=${page}&` +
        `apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;
    try {
        const req = new Request(url);
        const response = await fetch(req)
        return {
            status: "ok",
            response: await response.json(),
        }
    } catch (e) {
        return {
            status: "error",
            error: e.message,
        }
    }
}

async function getStaticArticles({page, pageSize = 10}) {
    let resp = {
        status: staticArticles.status,
        totalResults: staticArticles.totalResults,
        articles: [],
    };
    const from = (page - 1) * pageSize
    const to = page * pageSize

    if (from < staticArticles.totalResults) {
        resp.articles = [...staticArticles.articles].filter((value, index) => {
            return from <= index && index < to
        })
    }

    return {
        status: "ok",
        response: resp,
    }
}

const getArticles = process.env.NODE_ENV === "development" ? getRemoteArticles : getStaticArticles

export const fetchNewsArticles = (page) => {
    return async dispatch => {

        const resp = await getArticles({
            page: page,
            pageSize: 10,
        })

        if (resp.status === "ok") {
            const json = resp.response
            dispatch(updateNewsArticlesTotalResultsAction(json.totalResults))
            dispatch(addNewsArticlesAction(json.articles))
        }

        if (resp.status === "error") {
        }
    };
}
