import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import sliderItems from '../sliderItems'
import Slider from 'react-styled-carousel'
import LocalizedLink from '../LocalizedLink'

const responsive = [
    { breakPoint: 1280, cardsToShow: 6 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 4 },
    { breakPoint: 360, cardsToShow: 2 },
]

const useStyles = makeStyles({
    root: { margin: '0.5rem' },
    media: {},
})
const ProductSlider = () => {
    const classes = useStyles()
    const sliderData = sliderItems()
    return (
        <Slider
            responsive={responsive}
            showArrows={false}
            showDots={false}
            infinite
            autoSlide={2500}
            pauseOnMouseOver={false}
        >
            {sliderData.map(item => (
                <LocalizedLink
                    to={`products`}
                    style={{ textDecoration: 'none' }}
                >
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={item.img}
                            component="img"
                        />
                        <CardContent>
                            <Typography
                                variant="h6"
                                component="h6"
                                noWrap
                                align="center"
                            >
                                {item.product}
                            </Typography>
                        </CardContent>
                    </Card>
                </LocalizedLink>
            ))}
        </Slider>
    )
}

export default ProductSlider
