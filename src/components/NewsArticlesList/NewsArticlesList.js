import {useDispatch, useSelector} from "react-redux";
import NewsArticlesItem from "../NewsArticlesItem/NewsArticlesItem";
import styles from "./NewsArticlesList.module.css"
import {fetchNewsArticles} from "../../redux/asyncActions/newsArticles";
import {updateNewsArticlesPageNumberAction} from "../../redux/userArticles/newsArticlesReducer";

function NewsArticlesList() {
    const dispatch = useDispatch();

    const newsArticles = useSelector(state => {
        return state.newsArticles.newsArticles;
    })

    const newsArticlesTotalResult = useSelector(state => state.newsArticles.totalResults);

    const page = useSelector(state => state.newsArticles.pageNumber)

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(updateNewsArticlesPageNumberAction(page + 1));
        return dispatch(fetchNewsArticles(page + 1));
    }

    return (
        <>
            <ul className={styles.newArticlesList}>
                {newsArticles
                    ? (newsArticles.map(item => <NewsArticlesItem key={item.url} article={item}/>))
                    : `No articles found`}
            </ul>
            <div className={styles.addMoreBtn_container}>
                {newsArticles.length < newsArticlesTotalResult ?
                    <button className={styles.addMoreBtn} onClick={handleClick}>Load more</button> : null}
            </div>
        </>
    )
}

export default NewsArticlesList;