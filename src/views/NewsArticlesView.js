import NewsArticlesList from "../components/NewsArticlesList";
import {useEffect} from "react";
import {fetchNewsArticles} from "../redux/asyncActions/newsArticles";
import {useDispatch} from "react-redux";

function NewsArticlesView () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewsArticles())
    }, [])

    return(
            <NewsArticlesList />
    )
}

export default NewsArticlesView;