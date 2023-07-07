import Paper from '@mui/material/Paper';

export default function CommentPaper({
    username,
    date,
    text
}) {
    return (
        <Paper elevation={5} sx={{backgroundImage: 'linear-gradient(to right, #667eea, #764ba2)'}}>
            <header>
                <h2>{username}</h2>
                <p>{date}</p>
            </header>
            <div>
                <p>{text}</p>
            </div>
        </Paper>
    );
}

