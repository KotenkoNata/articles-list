import Container from "../components/Container";
import UserArticlesList from "../components/UserArticlesList";
import React from "react";
import NewUserArticles from "../components/NewUserArticlesForm/NewUserArticlesForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

function UserArticlesView () {
        return(
            <Container>
                    <Header />
                    <NewUserArticles />
                    <UserArticlesList />
                    <Footer />
            </Container>
            )
}

export default UserArticlesView;