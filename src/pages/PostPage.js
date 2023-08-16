import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import postPage from './styles/postPage.module.css';
import CommentPaper from '../components/CommentPaper.js';
import axios from 'axios';
import { useState, useEffect } from 'react';
import CommentInput from '../components/CommentInput.js';
import Button from '@mui/material/Button';

function PostPage({ postId }) {
    const [post, setPost] = useState([]);
    const [showCommentInput, setShowCommentInput] = useState(false)

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

    const postComment = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const user = formData.get('user');
        const message = formData.get('message');
        axios
            .post(`http://localhost:5000/posts/${postId}/comments`, {
                user,
                message
            })
            .then(response => {
                const data = response.data;
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            })
    };

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
                        <h1 className={postPage.title}>{post.title}</h1>
                        <p className={postPage.date}>{post.date_formatted}</p>
                    </header>
                    <article className={postPage.article}>
                        <div className={postPage.articleText}>{post.text}</div>
                    </article>
                </div>
            </main>
            <div className={postPage.commentsInputsContainer}>
                {showCommentInput ? 
                    <form action='' method="post" onSubmit={(e) => postComment(e)} className={postPage.commentsForm}>
                        <CommentInput />
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            size="small" 
                            type="submit"
                        >   
                            Submit
                        </Button>
                    </form> :
                    <Button 
                        onClick={() => setShowCommentInput(true)}
                        variant="contained" 
                        color="secondary" size="small"
                    >
                        Add a coment!
                    </Button>
                }
            </div>
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