import NewsArticlesView from "./views/NewsArticlesView";
import Layout from "./components/Layout";
import routes from "./routes";
import UserArticlesView from "./views/NewsArticlesView";
import ErrorPage from "./views/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

const routing = createBrowserRouter(
    [
        {
            path: routes.home,
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
                {
                    element: <UserArticlesView />,
                    index: true,
                },
                {
                    path: routes.newsArticles,
                    element: <NewsArticlesView />,
                },
            ],
        },
    ],
    {
        basename: `${process.env.PUBLIC_URL}`,
    },
);

export default routing;