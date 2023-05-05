import styles from "./Header.module.css"
import Button from "../Button";
import SearchUserArticle from "../SearchUserArticle";
import React from "react";
function Header() {
    return <header className={styles.Header}>
        <div>
            <h1 className={styles.HeaderTitle}>Article</h1>
        </div>
        <SearchUserArticle />
        <Button>Add article</Button>
    </header>
}

export default Header;