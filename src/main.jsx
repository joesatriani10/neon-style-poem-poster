import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts, {loader as postLoader} from './routes/Posts.jsx'
import PostDetails, {loader as postDetailLoader} from "./components/PostDetails.jsx";
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import RootLayout from "./routes/RootLayout.jsx";
import NewPost, {action as newPostAction} from "./routes/NewPost.jsx";

const router = createBrowserRouter([
        {
            path: '/', element: <RootLayout/>,
            children: [
                {
                    path: '/',
                    element: <Posts/>,
                    loader: postLoader,
                    children: [
                        {path: '/create-poem', element: <NewPost/>, action: newPostAction},
                        {path: '/:id', element: <PostDetails/>, loader: postDetailLoader}
                    ]
                },
            ]
        },
    ])
;
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>
)
