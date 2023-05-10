import styles from "../UserArticlesItem/UserArticlesItem.module.css";
import SvgAuthorIcon from "../../img/SvgAuthorIcon";

const NewsArticlesItem  = ({article}) => {

    return <li className={styles.articleItem}>
        <div className={styles.articleItem_imageContainer}>
            <img src={article.urlToImage}
                 alt={article.title}/>
        </div>
        <div className={styles.articleItem_descriptionContainer}>
            <div>
                <h3>{article.title}</h3>
            </div>
            <div>
                <SvgAuthorIcon />
                <span className={styles.articleItem_author}>{article.author}</span>
            </div>

            <p className={styles.articleItem_description}>{article.description}</p>
        </div>
    </li>
}

export default NewsArticlesItem;