import NewsArticlesList from "../components/NewsArticlesList";
import {useEffect} from "react";
import {fetchNewsArticles} from "../redux/asyncActions/newsArticles";
import {useDispatch, useSelector} from "react-redux";

function NewsArticlesView() {
    const dispatch = useDispatch();
    const page = useSelector(state => state.newsArticles.pageNumber);

    useEffect(() => {
        dispatch(fetchNewsArticles(page))
    }, [])

    return (
        <main>
            <NewsArticlesList/>
        </main>
    )
}

export default NewsArticlesView;
