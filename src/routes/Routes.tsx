import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import AddPage from "../pages/Add/AddPage";
import DetailPage from "../pages/Detail/DetailPage";
import { ListPage } from "../pages/List/ListPage";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <ListPage></ListPage>,
                loader: () => fetch('https://pokeapi.co/api/v2/pokemon/?limit=20')
            },
            {
                path: '/detail',
                element: <DetailPage></DetailPage>,
            },
            {
                path: '/add',
                element: <AddPage />,
            },
        ]
    }
])