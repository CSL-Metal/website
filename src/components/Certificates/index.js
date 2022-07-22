import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-styled-carousel'
import * as S from '../PostItem/styled'

import React from 'react'

const Certificates = () => {
    const { listImages } = useStaticQuery(query)
    console.log(listImages)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
        }}
        >
            {listImages.edges.map(item => (
                <S.PostItemImg
                    style={{
                        position: 'relative',
                        zIndex: 5000,
                        width: '500px',
                    }}
                    fluid={item.node.childImageSharp.fluid}
                />

            ))}
        </div>
    )
}

export default Certificates

const query = graphql`
    query {
        listImages: allFile(
            filter: {
                childImageSharp: { fluid: { src: { regex: "/certificates/" } } }
            }
            sort: { fields: childImageSharp___fluid___originalName, order: ASC }
        ) {
            edges {
                node {
                    childImageSharp {
                        fluid(
                            maxWidth: 500
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
