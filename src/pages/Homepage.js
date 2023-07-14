import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import PostCard from '../components/PostCard.js';
import axios from 'axios';
import { useState, useEffect } from 'react';

function Homepage() {
    const [posts, setPosts] = useState([]);
 
    useEffect(() => {
        axios
            .get('http://localhost:5000/posts')
            .then(response => {
                const data = response.data;
                setPosts(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <Header subtitle={true} />
            <main>
                {posts.map(post => {
                    return (
                        <article key={post._id}>
                            <PostCard
                                title={post.title}
                                date={post.date_formatted}
                                text={post.preview}
                                image={post.images[0].imageURL}
                                imageAlt={post.images[0].name}
                                url={post.url}
                            />
                        </article>
                    );
                })
                }
            </main>
            <Footer />
        </>
    );
};

export default Homepage;