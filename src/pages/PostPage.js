import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import postPage from './styles/postPage.module.css';
import CommentPaper from '../components/CommentPaper.js';
import axios from 'axios';
import { useState, useEffect } from 'react';

function PostPage({ postId }) {
    const [post, setPost] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:5000/posts/${postId}`)
            .then(response => {
                const data = response.data;
                setPost(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, [postId]);

    return (
        <>
            <Header subtitle={false} />
            <main>
                <div className={postPage.body}>
                    <header className={postPage.header}>
                        <div className={postPage.banner}>
                            {post.images &&
                                <img key={post._id} src={post.images[0].imageURL} alt={post.images[0].imageAlt} />
                            }  
                        </div>
                        <h1>{post.title}</h1>
                        <p>{post.date_formatted}</p>
                    </header>
                    <article className={postPage.article}>
                        <div>{post.text}</div>
                    </article>
                </div>
            </main>
            <div className={postPage.commentsContainer}>
                <h1>Comments</h1>
                {post.comments &&
                    post.comments.map(comment => {
                        return (
                            <div key={comment._id} className={postPage.commentContainer}>
                                <CommentPaper
                                    key={comment.id}
                                    user={comment.user}
                                    date={comment.date_formatted}
                                    message={comment.message}
                                />
                            </div>
                        );
                    })}
            </div>
            <Footer />
        </>
    )
}

export default PostPage