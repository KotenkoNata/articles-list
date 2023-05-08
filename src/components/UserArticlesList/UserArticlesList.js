import styles from "./UserArticlesList.module.css";
import UserArticlesItem from "../UserArticlesItem";
import {useSelector} from "react-redux";

function UserArticlesList() {

    const userArticles = useSelector(state => {
        return state.userArticles;
    });

    return <ul className={styles.articlesList}>
        {userArticles.length > 0
            ? (userArticles.map(item => <UserArticlesItem key={item.title} article={item} />))
            : null}
    </ul>
}


export default UserArticlesList;