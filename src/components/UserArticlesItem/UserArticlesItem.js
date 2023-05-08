import SvgAuthorIcon from "../../img/SvgAuthorIcon";
import styles from './UserArticlesItem.module.css'
import SvgTrashIcon from "../../img/SvgTrashIcon";
import {useDispatch} from "react-redux";
import {removeUserArticleAction} from "../../redux/userArticles/userArticlesReducer";

function UserArticlesItem ({article}) {
    const dispatch = useDispatch();

    const  handleDelete = (id) =>{
        return dispatch(removeUserArticleAction(id))
    }

    return(
        <>
            <li className={styles.articleItem}>
                <div className={styles.articleItem_imageContainer}>
                    <img src={article.image}
                         alt={article.title}/>
                </div>
                <div className={styles.articleItem_descriptionContainer}>
                    <div>
                        <h3>{article.title}</h3>

                    </div>
                    <div>
                        <SvgAuthorIcon />
                        <span className={styles.articleItem_author}>{article.author}</span>
                        <div className={styles.articleItem_trashContainer}>
                            <button className={styles.articleItem_trashBtn}
                                    onClick={()=> handleDelete(article.id)}>
                                <SvgTrashIcon />
                            </button>
                        </div>
                    </div>

                    <p className={styles.articleItem_description}>{article.description}</p>
                </div>
            </li>
        </>
        )
}
export default UserArticlesItem;