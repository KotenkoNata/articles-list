import routes from "../../routes";
import styles from "./Navigation.module.css";
import NavLinkElement from "../NavLinkElement";

const Navigation = () => {
    return (
        <nav className={styles.navigation}>
            <NavLinkElement path={routes.userArticles}>
                Home
            </NavLinkElement>
            <NavLinkElement path={routes.newsArticles}>
                News Articles
            </NavLinkElement>
        </nav>
    )
}

export default Navigation;
