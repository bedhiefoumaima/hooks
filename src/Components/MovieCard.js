
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MovieCard({movie}) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image= {movie.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movie.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {movie.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={movie.rating} readOnly />
      </Box>
      </CardActions>
    </Card>
  );
}
