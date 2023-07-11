import Paper from '@mui/material/Paper';

export default function CommentPaper({
    user,
    date,
    message
}) {
    return (
        <Paper elevation={0} sx={{
            backgroundImage: 'linear-gradient(to right, #667eea, #764ba2)',
            padding: '.8rem',
        }}>
            <header>
                <h2>{user}</h2>
                <p>{date}</p>
            </header>
            <div>
                <p>{message}</p>
            </div>
        </Paper>
    );
}

