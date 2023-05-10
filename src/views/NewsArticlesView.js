import Container from "../components/Container";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NewsArticlesList from "../components/NewsArticlesList";
import {useEffect} from "react";
import {fetchNewsArticles} from "../redux/asyncActions/newsArticles";
import {useDispatch} from "react-redux";

function UserArticlesView () {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNewsArticles())
    }, [])

    return(
            <NewsArticlesList />
    )
}

export default UserArticlesView;