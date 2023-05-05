import SvgAuthorIcon from "../../img/SvgAuthorIcon";
import styles from './UserArticlesItem.module.css'
function UserArticlesItem () {
    return(
        <>
        <li className={styles.articleItem}>
            <div className={styles.articleItem_imageContainer}>
                <img src="https://www.allthingsdistributed.com/images/ngb-tusimple.jpg"
                     alt="Can autonomous trucks transform the global supply chain?"/>
            </div>
            <div className={styles.articleItem_descriptionContainer}>
                <h3>Can autonomous trucks transform the global supply chain?</h3>
                <div>
                    <SvgAuthorIcon />
                    <span className={styles.articleItem_author}>werner@allthingsdistributed.com (Dr. Werner Vogels)</span>
                </div>
                <p className={styles.articleItem_description}>For the season finale of Now Go Build,
                    I traveled to Arizona, to see first-hand how autonomous trucking has
                    the potential to revolutionize the global supply chain.
                </p>
            </div>
        </li>
        <li className={styles.articleItem}>
            <div className={styles.articleItem_imageContainer}>
                <img src="https://c.biztoc.com/p/b28d745b78e8297d/og.webp"
                     alt="Can autonomous trucks transform the global supply chain?"/>
            </div>
            <div className={styles.articleItem_descriptionContainer}>
                <h3>AI 'Godfather' Warns His Advice To Musk, Sanders May Be Unpopular</h3>
                <div>
                    <SvgAuthorIcon />
                    <span className={styles.articleItem_author}>benzinga.com</span>
                </div>
                <p className={styles.articleItem_description}>Dr. Geoffrey Hinton, aka \"Godfather of AI\" was in the news recently as he quit Alphabet, Inc's Google. It appears that he has got his next assignment in hand. What Happened: Hinton, aged 75 years, received requests for help from Tesla CEO Elon Musk, Sen. Bern…
                </p>
            </div>
        </li>
        </>
        )
}
export default UserArticlesItem;