import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import PostCard from '../components/PostCard.js';
import image1 from '../assets/40659.jpg';
import image2 from '../assets/64287.jpg';
import image3 from '../assets/jz6g_pti6_210907.jpg';

function Homepage() {
    const posts = [
        {
            title: "Mock Title",
            date_formatted: "Mock Date",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper velit quis elit gravida, quis.",
            image: image1
        },
        {
            title: "Mock Title",
            date_formatted: "Mock Date",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper velit quis elit gravida, quis.",
            image: image2
        },
        {
            title: "Mock Title",
            date_formatted: "Mock Date",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas semper velit quis elit gravida, quis.",
            image: image3
        },
    ]
    return (
        <>
            <Header />
            <main>
                {posts.map(post => {
                    return (
                        <div>
                            <PostCard
                                title={post.title}
                                date={post.date_formatted}
                                text={post.text}
                                image={post.image}
                            />
                        </div>
                    );
                })
                }
            </main>
            <Footer />
        </>
    );
};

export default Homepage;