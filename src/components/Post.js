import React from 'react';


function Post({ post }) {
    console.log('post from server', post)
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}&emsp; &emsp;{post.username}</h5>
                <h5 className="card-title"> { post.text}</h5>
                <h5 className="card-title"> { post.email}</h5>
            </div>
        </div>
    );
}

export default Post;