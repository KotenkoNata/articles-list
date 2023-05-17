import styles from "../UserArticlesItem/UserArticlesItem.module.css";
import SvgAuthorIcon from "../../img/SvgAuthorIcon";

const NewsArticlesItem = ({article}) => {
    const {title, urlToImage, author, description} = article
    return (
        <li className={styles.articleItem}>
            <div className={styles.articleItem_imageContainer}>
                <img src={urlToImage}
                     alt={title}/>
            </div>
            <div className={styles.articleItem_descriptionContainer}>
                <div className={styles.articleItem_titleContainer}>
                    <h3>{title}</h3>
                </div>
                {author ? <div className={styles.articleItem_authorContainer}>
                    <div>
                        <SvgAuthorIcon/>
                    </div>
                    <span className={styles.articleItem_author}>{author}</span>
                </div> : null}

                <p className={styles.articleItem_description}>{description}</p>
            </div>
        </li>
    )
}

export default NewsArticlesItem;
