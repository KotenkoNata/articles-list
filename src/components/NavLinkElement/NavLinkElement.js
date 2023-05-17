import styles from "../Navigation/Navigation.module.css";
import {NavLink} from "react-router-dom";

const NavLinkElement = ({children, path}) => {
    return (<NavLink to={path}
                     className={({isActive, isPending}) => {
                         return isPending ? `${styles.pending}` : isActive ? `${styles.active}` : "";
                     }}>
        {children}
    </NavLink>)
}

export default NavLinkElement;