import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import _ from 'lodash'


function useNavbarElements() {

  const { rawData } = useStaticQuery(query)
  const menuElements = []
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  rawData.group.map(items => items.edges.map(item => menuElements.push({ link: item.node.fields.slug, lang: item.node.fields.locale, product: item.node.frontmatter.description, productCategory: capitalizeFirstLetter(item.node.frontmatter.productcategory), mainCategory: item.node.frontmatter.maincategory })))
  return menuElements
}

export default useNavbarElements

const query = graphql`
query NavbarElements {
  rawData: allMarkdownRemark {
    group(field: frontmatter___maincategory) {
      edges {
        node {
          fields {
            locale
            slug
          }
          frontmatter {
            description
            productcategory
            maincategory
          }
        }
      }
    }
  }
}
`
