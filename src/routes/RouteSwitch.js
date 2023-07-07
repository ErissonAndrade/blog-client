import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';
import Postpage from '../pages/PostPage'

const RouteSwitch = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/posts/1" element={<Postpage />} />
                {/* <Route path="/about" element={} /> */}
            </Routes>    
        </BrowserRouter>
    );
}

export default RouteSwitch