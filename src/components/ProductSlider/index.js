import React from 'react'
import { graphql } from 'gatsby'
import PostItem from '../PostItem'
import TitlePage from '../TitlePage'
import SEO from '../seo'
import "../../templates/styles.css";
import * as S from '../ListWrapperProducts/styled'
import ProductNavigation from '../ProductNavigation'
import { useLocale } from '../../hooks/locale'


const ProductSlider = props => {
  const query = useStaticQuery(graphql`
    query ProductSlider($locale: String!, $dateFormat: String!, $skip: Int!, $limit: Int!) {
      allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {locale: {eq: $locale}}, fileAbsolutePath: {regex: "/(products)/.*\\.md$/"}}, limit: $limit, skip: $skip) {
        edges {
          node {
            frontmatter {
              title
              description
              category
              background
              image
              date(formatString: $dateFormat)
              product
              maincategory
            }
            timeToRead
            fields {
              locale
              slug
            }
          }
        }
      }
    }

`)

  console.log(query)
  const { locale } = useLocale()

  return (
    <>
      <S.ListWrapperProducts style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'left', marginLeft: 0, marginRight: 'auto' }}>
        {postList.map(
          ({
            node: {
              frontmatter: {
                background,
                title,
                image,
              },
              fields: { slug },
            },
          }) => (
            <PostItem
              slug={`/products/${slug}`}
              background={background}
              title={title}
              image={image}
              key={slug}
            />
          )
        )}
      </S.ListWrapperProducts>
    </>
  )
}



export default ProductSlider
