import {Outlet} from "react-router-dom";
import PostList from "../components/PostList.jsx";
import post from "../components/Post.jsx";
import postData from '../postData.json';

const Posts = () => {

    return (
        <>
            <Outlet/>
            <main>
                <PostList/>
            </main>
        </>);
}

export default Posts;

export const loader = async () =>{
    //const response = await fetch('http://localhost:8080/posts');
    //const restData = await response.json();
    //return restData.posts;

    return postData.posts;
}
