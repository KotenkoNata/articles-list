import styles from "./UserArticlesList.module.css";
import UserArticlesItem from "../UserArticlesItem";

const UserArticlesList = () => (
    <ul className={styles.articlesList}>
        <UserArticlesItem />
    </ul>
);

export default UserArticlesList;