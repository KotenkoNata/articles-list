import UserArticlesList from "../components/UserArticlesList";
import NewUserArticles from "../components/NewUserArticlesForm/NewUserArticlesForm";
import {useSelector} from "react-redux";
import NewUserArticlesForm from "../components/NewUserArticlesForm/NewUserArticlesForm";

function UserArticlesView () {

    const showForm = useSelector(state => state.userArticles.showForm);

        return(<>
                {showForm ? <NewUserArticlesForm/> : null}
                <UserArticlesList />
                <h1>Test</h1>
        </>)
}

export default UserArticlesView;