import { useStaticQuery, graphql } from 'gatsby'
import { useLocale } from '../hooks/locale'
import React from 'react'

function sliderItems() {
  const { locale } = useLocale()
  const rawData = useStaticQuery(query).allMarkdownRemark.group
  let sliderData = []
  rawData.map(items => sliderData.push({ lang: items.edges[0].node.fields.locale, product: items.edges[0].node.frontmatter.description, img: items.edges[0].node.frontmatter.image }))
  sliderData = sliderData.filter(data => data.lang === locale)
  return sliderData
}


export default sliderItems;


const query = graphql` query productSliderQuery {
    allMarkdownRemark(filter: {frontmatter: {product: {eq: true}}}) {
      group(field: frontmatter___description) {
        edges {
          node {
            frontmatter {
              description
              image
            }
            fields {
              locale
            }
          }
        }
      }
    }
  }
`