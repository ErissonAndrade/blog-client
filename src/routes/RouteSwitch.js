import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Postpage from '../pages/PostPage'
import axios from 'axios';
import { useState, useEffect } from 'react';

const RouteSwitch = () => {
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
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                {posts.map(post => {
                    return [
                        <Route key={post._id} path={post.url} element={<Postpage key={post._id} postId={post._id}/>} />
                    ];
                })};
                {/* <Route path="/about" element={} /> */}
            </Routes>    
        </BrowserRouter>
    );
}

export default RouteSwitch