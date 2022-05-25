import React from 'react'
import Slider from 'react-styled-carousel'
import { LeftArrow } from 'styled-icons/boxicons-regular'

// const responsive = [
//     { breakPoint: 1280, cardsToShow: 1 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
//     { breakPoint: 760, cardsToShow: 1 },
// ]

export const Banner = props => {
    return (
        <Slider
            cardsToShow={1}
            showArrows={true}
            showDots={true}
            infinite
            autoSlide={1500}
            pauseOnMouseOver
            hideArrowsOnNoSlides
            padding={0}
            LeftArrow={<LeftArrow style={{ width: 50 }} />}
        >
            {props.children}
        </Slider>
    )
}

export default Banner
