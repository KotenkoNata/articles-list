import styles from "./NewUserArticlesForm.module.css";
import Button from "../Button";
function NewUserArticlesForm() {
    return (
        <form className={styles.newArticleForm}>
            <input
                type='text'
                placeholder="Add article title"
            />
            <input
                type="text"
                placeholder="Add author"
            />
            <input
                type="text"
                placeholder="Add description"
            />
            <input
                type="text"
                placeholder="Add link to image"
            />
            <Button>Post</Button>
        </form>
    )
}

export default NewUserArticlesForm;