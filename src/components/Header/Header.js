import styles from "./Header.module.css"
import SearchUserArticle from "../SearchUserArticle";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateShowForm} from "../../redux/userArticles/userArticlesReducer";
import NewUserArticles from "../NewUserArticlesForm/NewUserArticlesForm";
function Header() {
    const dispatch = useDispatch();

    const show = useSelector(state => state.userArticles.showForm)
    const handleOnClick = (event) => {
        event.preventDefault();
        return dispatch(updateShowForm(!show));
    }
    return <header className={styles.Header}>
        <div>
            <h1 className={styles.HeaderTitle}>Article</h1>
        </div>
        <SearchUserArticle />
        <button className={styles.showFormBtn} onClick={handleOnClick}>{show ? 'Close' : 'Post'}</button>
    </header>
}

export default Header;