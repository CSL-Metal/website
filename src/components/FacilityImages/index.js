import { useStaticQuery, graphql } from 'gatsby'
import Slider from 'react-styled-carousel'

import React from 'react'


const FacilityImages = () => {
    const { facilityImages } = useStaticQuery(query)
    console.log(facilityImages)
    return (
        <Slider
            cardsToShow={1}
            showArrows={true}
            showDots={true}
            infinite
            autoSlide={2500}
            pauseOnMouseOver={false}
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