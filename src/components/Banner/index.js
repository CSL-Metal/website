import React from 'react'
import Slider from 'react-styled-carousel'

const responsive = [
    { breakPoint: 1280, cardsToShow: 1 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 1 },
]

export const Banner = props => {
    return (
        <Slider
            responsive={responsive}
            showArrows={true}
            showDots={true}
            infinite
            aitoSlide={1500}
        >
            {props.children}
        </Slider>
    )
}

export default Banner
