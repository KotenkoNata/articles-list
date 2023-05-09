import styles from "./UserArticlesList.module.css";
import UserArticlesItem from "../UserArticlesItem";
import {useSelector} from "react-redux";

function UserArticlesList() {

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
            : null}
    </ul>
}


export default UserArticlesList;