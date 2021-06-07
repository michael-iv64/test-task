import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { fetchPosts } from '../../redux/actions/actions';
import Post from '../Post';
import { Loader } from '../Loader';

function FetchedPosts() {
    const dispatch = useDispatch()
    // const posts = useSelector((state) => {
    //      return state.posts.fetchedPosts
    // })
    const posts = useSelector(state => state.posts.fetchedPosts)
    const loading = useSelector(state => state.app.loading)
    if (loading) {
        return <Loader />
    }
    if (posts.length === 0) {
        return (<>
        <p>Постов пока нет</p>
        <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
        >Загрузить</button>
        </>)

    }
    return (
        <>
            <button
            className="btn btn-primary"
            onClick={() => dispatch(fetchPosts())}
        >Загрузить</button>
        {posts.message.tasks.map(post => <Post post={post} key={post.id} />)}
        </>

    )
}

export default FetchedPosts;