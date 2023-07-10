import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <p>Visit my GitHub page!</p>
            <Link to="https://github.com/ErissonAndrade">
                <GitHubIcon fontSize="large"/>
            </Link>
        </footer>
    );
};

export default Footer;