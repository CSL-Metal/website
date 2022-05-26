import React from 'react'
import Slider from 'react-styled-carousel'
import { ArrowDropLeft } from 'styled-icons/remix-line'
import { ArrowDropRight } from 'styled-icons/remix-line'

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
            LeftArrow={
                <ArrowDropLeft
                    style={{
                        color: 'var(--primary-color)',
                        position: 'absolute',
                        width: '10vh',
                        left: '-25px',
                        top: 'calc(50% - 5px)',
                        cursor: 'pointer',
                        zIndex: '99999',
                    }}
                />
            }
            RightArrow={
                <ArrowDropRight
                    style={{
                        color: 'var(--primary-color)',
                        position: 'absolute',
                        width: '10vh',
                        right: '-25px',
                        top: 'calc(50% - 5px)',
                        cursor: 'pointer',
                        zIndex: '99999',
                    }}
                />
            }
        >
            {props.children}
        </Slider>
    )
}

export default Banner
