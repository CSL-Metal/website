import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-styled-carousel'

import React from 'react'


const FacilityImages = () => {
    const { facilityImages } = useStaticQuery(query)
    return (
        <Slider
            cardsToShow={1}
            showArrows={true}
            showDots={true}
            infinite
            autoSlide={3500}
            pauseOnMouseOver={true}
        >
            {facilityImages.nodes.map(item => (
                <img src={item.publicURL} />
            ))}
        </Slider>
    )
}

export default FacilityImages

const query = graphql` query ImageElements { facilityImages: allFile(filter: {relativePath: {regex: "/fabrika/"}}) {
    nodes {
      publicURL
      extension
      name
    }
  }
}
`