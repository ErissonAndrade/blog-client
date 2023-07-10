import header from './styles/header.module.css';
import { Link } from 'react-router-dom'

function Header ({ subtitle }) {
    return (
        <header>
            <Link className={header.title} to="/">
                <h1>Platypus Blog</h1>
            </Link>
            {subtitle &&
                <div className={header.banner}>
                <h1>Welcome to platypus blog!</h1>
                <p>Learn everything about these wonderful creatures!</p>
            </div>
            } 
        </header>
    );
};

export default Header;