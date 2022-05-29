import { useStaticQuery } from 'gatsby'
import React from 'react'
import Slider from 'react-styled-carousel'
import { ArrowDropLeft } from 'styled-icons/remix-line'
import { ArrowDropRight } from 'styled-icons/remix-line'
import { globalHistory } from '@reach/router'

const Banner = props => {
    console.log(globalHistory.location.pathname)
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
        <div
            style={{
                display:
                    globalHistory.location.pathname === '/'
                        ? 'flex'
                        : globalHistory.location.pathname === '/en'
                        ? 'flex'
                        : globalHistory.location.pathname === '/en/'
                        ? 'flex'
                        : 'none',
            }}
        >
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
            </Slider>
        </div>
    )
}

export default Banner
