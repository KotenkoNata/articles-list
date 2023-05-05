import SvgSearchIcon from "../../img/SvgSearchIcon";
import styles from "./SearchUserArticle.module.css";

function SearchUserArticle() {
    return <form autoComplete="off" className={styles.articleSearchForm}>
            <input
                className = {styles.textField}
                type={"text"}
                id="search"
                name = "articlename"
                placeholder="Search article by name"
            />
            <button className={styles.articleSearchFormButton}>
                <SvgSearchIcon />
            </button>
    </form>
}

export default SearchUserArticle;