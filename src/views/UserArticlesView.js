import Container from "../components/Container";
import UserArticlesList from "../components/UserArticlesList";
import NewUserArticles from "../components/NewUserArticlesForm/NewUserArticlesForm";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {useState} from "react";

function UserArticlesView () {
    const [showForm, setShowForm] = useState(false);
        return(
            <Container>
                    <Header showForm={showForm} setShowForm={setShowForm}/>
                    {showForm ? <NewUserArticles setShowForm={setShowForm}/> : null}
                    <UserArticlesList />
                    <Footer />
            </Container>
            )
}

export default UserArticlesView;