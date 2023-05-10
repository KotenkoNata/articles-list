import styles from "./Header.module.css"
import SearchUserArticle from "../SearchUserArticle";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateShowForm} from "../../redux/userArticles/userArticlesReducer";
import Navigation from "../Navigation/Navigation";
import {useLocation} from "react-router-dom";

function Header() {
    const dispatch = useDispatch();
    const location = useLocation();
    const show = useSelector(state => state.userArticles.showForm)
    const handleOnClick = (event) => {
        event.preventDefault();
        return dispatch(updateShowForm(!show));
    }
    return <header className={styles.Header}>
        <Navigation />
        {location.pathname === "/"
            ? <><SearchUserArticle />
            <button className={styles.showFormBtn} onClick={handleOnClick}>{show ? 'Close' : 'Post'}</button></>
            : null}
    </header>
}

export default Header;