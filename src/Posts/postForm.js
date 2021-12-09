import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router";
import { updatePost } from '../Redux/Actions/posts'

const PostForm = (props) => {
    const { isEdit, setEdit } = props;
    let postData = useSelector(state => state.postReducer.posts)
    const [title, setTitle] = useState('')
    const [id, setId] = useState(0)
    const params = useParams();
    const history = useHistory();

    const dispatch = useDispatch();
    useEffect(() => {
        if (params.id !== undefined) {
            postData = postData.find(item => item.id == params.id);
            console.log(postData, 'postData')
            setTitle(postData.title)
            setId(params.id)
        }
    }, [isEdit])

    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target)
        const obj = {
            id: id,
            title: title,
        }
        dispatch(updatePost(obj))
        setTimeout(() => {
            history.push('/post-list');
        }, 3000)
        return false
    }

    return (
        <>
            <form onSubmit={submitForm} method='post'>
                <input type="hidden" name="id" value={id} />
                <div className="form-group">
                    <label htmlFor="titleName">Title</label>
                    <input type="text" name="title" className="form-control" id="titleName" placeholder="Enter title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary" >{params.id !== undefined ? "Update" : "Add Post"}</button>
            </form>
        </>
    )

}

export default PostForm