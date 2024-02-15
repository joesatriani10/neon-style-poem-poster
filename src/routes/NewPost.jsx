import classes from '../components/NewPost.module.css';
import Modal from "../components/Modal.jsx";
import {Form, Link, redirect} from 'react-router-dom';
import postData from '../postData.json';

const NewPost = () => {

    return (
        <Modal>
            <Form method={"post"} className={classes.form}>
                <p>
                    <label htmlFor="body">Text</label>
                    <textarea id="body" name="body" required rows={3}/>
                </p>
                <p>
                    <label htmlFor="name">Author</label>
                    <input type="text" id="name" name="author" required/>
                </p>
                <p className={classes.actions}>
                    <Link to={'..'} type='button'>Cancel</Link>
                    <button type='submit'>Create</button>
                </p>
            </Form>
        </Modal>
    );
}

export default NewPost;

export const action = async ({request}) => {
    const formData = await request.formData();
    // const postData = Object.fromEntries(formData); // { body: '...', author: '...'}
    // const response = await fetch('http://localhost:8080/posts', {
    //     method: 'POST', body: JSON.stringify(postData), headers: {
    //         'Content-Type': 'application/json'
    //     }
    // });

    return redirect('/');
}