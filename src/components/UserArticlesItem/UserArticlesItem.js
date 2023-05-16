import SvgAuthorIcon from "../../img/SvgAuthorIcon";
import styles from './UserArticlesItem.module.css'
import SvgTrashIcon from "../../img/SvgTrashIcon";
import {useDispatch} from "react-redux";
import {addPinnedUserArticleAction, removeUserArticleAction} from "../../redux/userArticles/userArticlesReducer";
import SvgPinIcon from "../../img/SvgPinIcon";

function UserArticlesItem ({article}) {
    const dispatch = useDispatch();

    const  handleDelete = (id) =>{
        return dispatch(removeUserArticleAction(id))
    }
    const handlePin = (id) => {
        return dispatch(addPinnedUserArticleAction(id));
    }

    return(
        <>
            <li className={styles.articleItem}>
                <div className={styles.articleItem_imageContainer}>
                    <img src={article.image}
                         alt={article.title}/>
                    <button className={styles.articleItem_pinIcon} onClick={()=> handlePin(article.id)}>
                        <SvgPinIcon fill={article.isPinned ? "#FF0000": "#333333"}/>
                    </button>
                    <button className={styles.articleItem_trashBtn}
                            onClick={()=> handleDelete(article.id)}>
                        <SvgTrashIcon />
                    </button>
                </div>
                <div className={styles.articleItem_descriptionContainer}>
                    <div className={styles.articleItem_titleContainer}>
                        <h3>{article.title}</h3>
                    </div>
                    <div className={styles.articleItem_authorContainer}>
                        <div>
                            <SvgAuthorIcon />
                        </div>
                        <span className={styles.articleItem_author}>{article.author}</span>
                    </div>
                    <p className={styles.articleItem_description}>{article.description}</p>
                </div>
            </li>
        </>
        )
}
export default UserArticlesItem;