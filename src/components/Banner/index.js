import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import Slider from 'react-styled-carousel'
import { ArrowDropLeft } from 'styled-icons/remix-line'
import { ArrowDropRight } from 'styled-icons/remix-line'
import { globalHistory } from '@reach/router'
import * as S from '../PostItem/styled'

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
                            fluid(maxWidth: 1920, quality: 90, toFormat: WEBP) {
                                src
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                }
            }
            listImagesSmall: allFile(
                filter: {
                    childImageSharp: { fluid: { src: { regex: "/hpsmall_/" } } }
                }
                sort: {
                    fields: childImageSharp___fluid___originalName
                    order: ASC
                }
            ) {
                edges {
                    node {
                        childImageSharp {
                            fluid(
                                maxWidth: 1920
                                quality: 90
                                srcSetBreakpoints: [400, 800, 1040, 1440]
                            ) {
                                src
                                ...GatsbyImageSharpFluid_withWebp_noBase64
                            }
                        }
                    }
                }
            }
        }
    `)
    console.warn = () => {}
    console.error = () => {}

    return (
        <div
            style={{
                width: '100%',
                overflow: 'hidden',
            }}
        >
            <Slider
                cardsToShow={1}
                showArrows={true}
                showDots={true}
                infinite
                autoSlide={3000}
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
                {typeof window !== 'undefined'
                    ? window.innerWidth <= 600
                        ? data.listImagesSmall.edges.map(images => (
                              <S.PostItemImg
                                  fluid={images.node.childImageSharp.fluid}
                                  loading={'eager'}
                                  critical
                              />
                          ))
                        : data.listImages.edges.map(images => (
                              <S.PostItemImg
                                  fluid={images.node.childImageSharp.fluid}
                                  style={{ width: '100%' }}
                                  loading={'eager'}
                                  critical
                              />
                          ))
                    : null}
            </Slider>
        </div>
    )
}

export default Banner
