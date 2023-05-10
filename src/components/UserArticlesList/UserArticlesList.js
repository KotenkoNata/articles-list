import styles from "./UserArticlesList.module.css";
import UserArticlesItem from "../UserArticlesItem";
import {useDispatch, useSelector} from "react-redux";
import {addNewsArticlesAction} from "../../redux/userArticles/newsArticlesReducer";
import {fetchNewsArticles} from "../../redux/asyncActions/newsArticles";

function UserArticlesList() {
const dispatch= useDispatch();
    const userArticles = useSelector(state => {
        const filteredValue = state.userArticles.searchValue;
        const articles = state.userArticles.articles;
        const pinned = state.userArticles.pinnedArticle;
        return pinned.concat(articles).filter(({title, description}) =>
                title.toLowerCase().includes(filteredValue.toLowerCase()) || description.toLowerCase().includes(filteredValue.toLowerCase()));
    });

    return <ul className={styles.articlesList}>
        {userArticles.length > 0
            ? (userArticles.map(item => <UserArticlesItem key={item.title} article={item} />))
            : `No articles found`}
    </ul>
}


export default UserArticlesList;