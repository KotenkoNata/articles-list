import styles from "./NewUserArticlesForm.module.css";
import Button from "../Button";
import {useDispatch, useSelector} from "react-redux";
import {addUserArticleAction} from "../../redux/userArticles/userArticlesReducer";
import {useCallback, useState} from "react";

function NewUserArticlesForm() {
    const [newArticle, setNewArticle] = useState({title: "", author: "", description: "", image: ""});
    const dispatch = useDispatch();

    const handleChange = useCallback(
        ({target: {name, value}}) => {
            setNewArticle({
                ...newArticle,
                [name]: value,
            });
        },
        [newArticle],
    );

    const handleSubmit = useCallback(event => {
        event.preventDefault();
        dispatch(addUserArticleAction(newArticle));
        setNewArticle({title: "", author: "", description: "", image: ""});
    }, [newArticle])

    return (
        <form className={styles.newArticleForm} onSubmit={handleSubmit}>
            <input
                type='title'
                placeholder="Add article title"
                name="title"
                value={newArticle.title}
                onChange={handleChange}
            />
            <input
                type="text"
                name="author"
                placeholder="Add author"
                value={newArticle.author}
                onChange={handleChange}
            />
            <input
                type="text"
                name="description"
                placeholder="Add description"
                value={newArticle.description}
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Add link to image"
                name="image"
                value={newArticle.image}
                onChange={handleChange}
            />
            <Button type="submit">Post</Button>
        </form>
    )
}

export default NewUserArticlesForm;