import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import sliderItems from '../sliderItems'
import Slider from 'react-styled-carousel'
import LocalizedLink from '../LocalizedLink'


const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  media: {
    height: 140,
    width: "100%"
  },
});
const ProductSlider = () => {

  const classes = useStyles();
  const sliderData = sliderItems()
  return (
    < Slider
      cardsToShow={5}
      showArrows={false}
      showDots={false}
      infinite
      autoSlide={1500}
      pauseOnMouseOver={false}
    >
      {
        sliderData.map(item =>
          <LocalizedLink to={`products`}>
            <Card className={classes.root}>
              <CardMedia
                className={classes.media}
                image={item.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {item.product}
                </Typography>
              </CardContent>
            </Card>
          </LocalizedLink>
        )
      }
    </Slider >
  );
}



export default ProductSlider
