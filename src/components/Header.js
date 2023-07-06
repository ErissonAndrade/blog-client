import header from './styles/header.module.css';

function Header() {
    return (
        <header>
            <div className={header.title}>
                <h1>Platypus Blog</h1>
            </div>
            <div className={header.banner}>
                <h1>Welcome to platypus blog!</h1>
                <p>Learn everything about these wonderful creatures!</p>
            </div>

        </header>
    );
};

export default Header;