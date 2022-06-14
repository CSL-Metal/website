import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-styled-carousel'
import * as S from '../PostItem/styled'

import React from 'react'

const FacilityImages = () => {
    const { listImages } = useStaticQuery(query)
    return (
        <Slider
            cardsToShow={1}
            showArrows={true}
            showDots={true}
            infinite
            autoSlide={3500}
            pauseOnMouseOver={true}
        >
            {listImages.edges.map(item => (
                <S.PostItemImg fluid={item.node.childImageSharp.fluid} />
            ))}
        </Slider>
    )
}

export default FacilityImages

const query = graphql`
    query {
        listImages: allFile(
            filter: {
                childImageSharp: { fluid: { src: { regex: "/fabrika/" } } }
            }
            sort: { fields: childImageSharp___fluid___originalName, order: ASC }
        ) {
            edges {
                node {
                    childImageSharp {
                        fluid(
                            maxWidth: 900
                            quality: 90
                            srcSetBreakpoints: [400, 800, 1040]
                        ) {
                            src
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
            }
        }
    }
`
