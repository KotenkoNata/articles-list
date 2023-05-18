import staticArticles from "./articles.json"
import {addNewsArticlesAction} from "../userArticles/newsArticlesReducer";

async function getRemoteArticles({page, pageSize = 10}) {
    const url = 'https://newsapi.org/v2/top-headlines?' +
        `pageSize=${pageSize}&` +
        'country=us&' +
        `page=${page}&` +
        `apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`;
    try {
        const req = new Request(url);
        const response = await fetch(req);
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
    const from = (page - 1) * pageSize
    const to = page * pageSize
    const response = {
        status: staticArticles.status,
        totalResults: staticArticles.totalResults,
        articles: [...staticArticles.articles]
            .filter((value, index) => {
                return from <= index && index < to
            }),
    };
    return {
        status: "ok",
        response: response,
    }
}

const getArticles = process.env.NODE_ENV === "development"
    ? getRemoteArticles
    : getStaticArticles

export const fetchNewsArticles = (page) => {
    return async dispatch => {

        const resp = await getArticles({
            page: page,
            pageSize: 10,
        })

        if (resp.status === "ok") {
            dispatch(addNewsArticlesAction({
                totalResults: resp.response.totalResults,
                articles: resp.response.articles,
            }))
        }

        if (resp.status === "error") {
        }
    };
}
