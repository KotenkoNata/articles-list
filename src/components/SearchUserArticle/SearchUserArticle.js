import SvgSearchIcon from "../../img/SvgSearchIcon";
import styles from "./SearchUserArticle.module.css";
import {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {updateSearchValue} from "../../redux/userArticles/userArticlesReducer";

function SearchUserArticle() {
    const [searchValue, setSearchValue ] = useState("");
    const handleChange  = useCallback(
        ({target: {value}}) => {
            setSearchValue(value);
        },
        [searchValue],
    );

    const dispatch = useDispatch();

    const onChange = event =>{
        event.preventDefault();
        return dispatch(updateSearchValue(searchValue));
    }

    return <form autoComplete="off" className={styles.articleSearchForm} onSubmit={onChange}>
            <input
                className = {styles.textField}
                type={"text"}
                id="search"
                name = "articlename"
                placeholder="Search article by title or description"
                onChange={handleChange}
            />
            <button className={styles.articleSearchFormButton}>
                <SvgSearchIcon />
            </button>
    </form>
}

export default SearchUserArticle;