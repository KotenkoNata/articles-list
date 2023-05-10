import styles from "./Header.module.css"
import SearchUserArticle from "../SearchUserArticle";
import React from "react";
function Header({setShowForm, showForm}) {
    return <header className={styles.Header}>
        <div>
            <h1 className={styles.HeaderTitle}>Article</h1>
        </div>
        <SearchUserArticle />
        <button className={styles.showFormBtn} onClick={()=>setShowForm(()=>!showForm)}>{showForm ? 'Close' : 'Post'}</button>
    </header>
}

export default Header;