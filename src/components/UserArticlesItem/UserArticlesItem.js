import SvgAuthorIcon from "../../img/SvgAuthorIcon";
import styles from './UserArticlesItem.module.css'
function UserArticlesItem ({article}) {

    return(
        <>
            <li className={styles.articleItem}>
                <div className={styles.articleItem_imageContainer}>
                    <img src={article.image}
                         alt={article.title}/>
                </div>
                <div className={styles.articleItem_descriptionContainer}>
                    <h3>{article.title}</h3>
                    <div>
                        <SvgAuthorIcon />
                        <span className={styles.articleItem_author}>{article.author}</span>
                    </div>
                    <p className={styles.articleItem_description}>{article.description}</p>
                </div>
            </li>
        </>
        )
}
export default UserArticlesItem;