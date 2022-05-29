import { useStaticQuery } from 'gatsby'
import React from 'react'
import Slider from 'react-styled-carousel'
import { ArrowDropLeft } from 'styled-icons/remix-line'
import { ArrowDropRight } from 'styled-icons/remix-line'

const Banner = props => {
    const data = useStaticQuery(graphql`
        query {
            listImages: allFile(
                filter: {
                    childImageSharp: { fluid: { src: { regex: "/hp_/" } } }
                }
                sort: {
                    fields: childImageSharp___fluid___originalName
                    order: ASC
                }
            ) {
                edges {
                    node {
                        childImageSharp {
                            fluid(maxWidth: 2080, quality: 100) {
                                src
                            }
                        }
                    }
                }
            }
        }
    `)

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
            {data.listImages.edges.map(images => (
                <img src={images.node.childImageSharp.fluid.src} />
            ))}
            {props.children}
        </Slider>
    )
}

export default Banner
