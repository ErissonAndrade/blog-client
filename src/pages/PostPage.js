import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import image1 from '../assets/40659.jpg';
import postPage from './styles/postPage.module.css';
import CommentPaper from '../components/CommentPaper.js';

function PostPage() {
    const post = 
        {
            title: "Mock Title",
            date_formatted: "Mock Date",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper velit quis elit gravida, quis.",
            image: image1,
            comments: [
                {
                    username: "Test",
                    date: "Test Date",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper velit quis elit gravid"
                },
                {
                    username: "Test",
                    date: "Test Date",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper velit quis elit gravid"
                },
                {
                    username: "Test",
                    date: "Test Date",
                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper velit quis elit gravid"
                }
            ]
        }
    
    return (
        <>
            <Header subtitle={false}/>
            <main>
                <div className={postPage.body}>
                    <header className={postPage.header}>
                        <h1>{post.title}</h1>
                        <p>{post.date_formatted}</p>
                    </header>
                    <article>
                        {post.text}
                    </article>
                </div>
            </main>
            <div className={postPage.commentsContainer}>
                <h1>Comments</h1>
                {post.comments.map(comment => {
                    return(
                        <div className={postPage.commentContainer}>
                            <CommentPaper
                                username={comment.username}
                                date={comment.date}
                                text={comment.text}
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