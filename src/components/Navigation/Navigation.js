import {NavLink} from "react-router-dom";
import routes from "../../routes";
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (<div>
            <nav className={styles.navigation}>
                <NavLink to={routes.userArticles}
                         className={({ isActive, isPending }) =>
                             isPending ? `${styles.pending}` : isActive ? `${styles.active}` : ""
                         }
                >Home </NavLink>
                <NavLink className={({ isActive, isPending }) =>
                    isPending ? `${styles.pending}` : isActive ? `${styles.active}` : ""
                } to={routes.newsArticles}>News Articles</NavLink>
            </nav>
        </div>
    )
}

export default Navigation;