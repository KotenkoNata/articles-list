import NewsArticlesView from "./views/NewsArticlesView";
import Layout from "./components/Layout";
import routes from "./routes";
import UserArticlesView from "./views/UserArticlesView";
import ErrorPage from "./views/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

const routing = createBrowserRouter(
    [
        {
            path: routes.userArticles,
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    element: <UserArticlesView />,
                    index: true
                },
            ],
        },
        {
            path: routes.newsArticles,
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    element: <NewsArticlesView />,
                    index: true
                },
            ]
        }
    ],
    {
        basename: `${process.env.PUBLIC_URL}`,
    },
);

export default routing;