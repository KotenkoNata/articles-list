import {useSelector} from "react-redux";
import NewsArticlesItem from "../NewsArticlesItem/NewsArticlesItem";
import Button from "../Button";
import styles from "./NewsArticlesList.module.css"

function NewsArticlesList () {

    const newsArticles = useSelector(state => {
        return state.newsArticles.newsArticles[0];
    })

    return (<>
        <ul className={styles.newArticlesList}>
            {newsArticles
                ? (newsArticles.map(item => <NewsArticlesItem key={item.publishedAt} article={item}/>))
                : `No articles found`}
        </ul>
        <div className={styles.addMoreBtn}>
            {newsArticles ? <Button>Add 10 more articles</Button> : null}
        </div>
    </>)
}

export default NewsArticlesList;