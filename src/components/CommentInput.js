import TextField from '@mui/material/TextField';
import commentInput from './styles/commentInput.module.css';

const CommentInput = () => {
    return(
        <div className={commentInput.container}>
            <TextField 
                label="User" 
                type="text" 
                name="user" 
                id="user"
                className={commentInput.input} 
            />
            <TextField 
                label="Message" 
                type="textarea" 
                name="message" 
                id="message" 
                multiline
                rows={10}
                className={commentInput.input} 
            />
        </div>
    )
}

export default CommentInput