import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function PostCard({
    image,
    imageAlt,
    title,
    date,
    text,
    url
}) {
  return (
    <Card sx={{ maxWidth: '300px', backgroundColor: '#f2c04e' }}>
      <CardMedia
        component="img"
        alt={imageAlt}
        height="200"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {date}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={url}>
          <Button variant="contained" color="secondary" size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}
