import {useDispatch, useSelector} from "react-redux";
import NewsArticlesItem from "../NewsArticlesItem/NewsArticlesItem";
import Button from "../Button";
import styles from "./NewsArticlesList.module.css"
import {fetchNewsArticles} from "../../redux/asyncActions/newsArticles";
import {updateNewsArticlesPageNumberAction} from "../../redux/userArticles/newsArticlesReducer";

function NewsArticlesList() {
    const dispatch = useDispatch();
    const newsArticles = useSelector(state => {
        return state.newsArticles.newsArticles;
    })

    const page = useSelector(state => state.newsArticles.pageNumber)

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(updateNewsArticlesPageNumberAction(page + 1));
        return dispatch(fetchNewsArticles(page + 1));
    }


    return (<>
        <ul className={styles.newArticlesList}>
            {newsArticles
                ? (newsArticles.map(item => <NewsArticlesItem key={item.url} article={item}/>))
                : `No articles found`}
        </ul>
        <div className={styles.addMoreBtn}>
            {newsArticles ? <button onClick={handleClick}>Add 10 more articles</button> : null}
        </div>
    </>)
}

export default NewsArticlesList;