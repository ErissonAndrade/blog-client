import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import postCard from './styles/postCard.module.css';

export default function PostCard({
    image,
    imageAlt,
    title,
    date,
    text,
    url
}) {
  return (
    <div className={postCard.container}>
      <CardMedia
        component="img"
        alt={imageAlt}
        height="400"
        image={image}
      />
      <CardContent className={postCard.textContainer}>
        <Typography gutterBottom class={postCard.title} component="div">
          {title}
        </Typography>
        <Typography variant="inherit" color="text.secondary" class={postCard.text}>
          {text}
        </Typography>
        <Typography variant="inherit" class={postCard.date}>
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={url}>
          <Button variant="contained" color="secondary" size="small">Learn More</Button>
        </Link>
      </CardActions>
    </div>
  );
}
