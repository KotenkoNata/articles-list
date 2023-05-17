import UserArticlesList from "../components/UserArticlesList";
import NewUserArticlesForm from "../components/NewUserArticlesForm/NewUserArticlesForm";
import {useSelector} from "react-redux";

function UserArticlesView() {

    const showForm = useSelector(state => state.userArticles.showForm);

    return (
        <main>
            {showForm ? <NewUserArticlesForm/> : null}
            <UserArticlesList/>
            <h1>Test</h1>
        </main>
    )
}

export default UserArticlesView;
