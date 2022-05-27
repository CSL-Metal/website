import React from 'react'
import { graphql } from 'gatsby'
import PostItem from '../components/PostItem'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'
import Pagination from '../components/Pagination'
import "./styles.css";
import * as S from '../components/ListWrapperProducts/styled'
import ProductNavigation from '../components/ProductNavigation'

const ProductPage = props => {

    const postList = props.data.allMarkdownRemark.edges

    // Logic for Pagination Component
    const { currentPage, numPages } = props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage =
        currentPage - 1 === 1 ? '/products' : `/products/${currentPage - 1}`
    const nextPage = `/products/page/${currentPage + 1}`

    return (
        <>
            <ProductNavigation />
            <div    >
                <div style={{ marginLeft: '10px' }}>
                    <SEO title="products" />
                    <TitlePage text="Products" />
                    <hr />
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

                </div>
            </div>
        </>
    )
}

// export const query = graphql`
//  query ProductList($locale: String!, $dateFormat: String!, $skip: Int!, $limit: Int!, $productCategory: String!) {
//   allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {locale: {eq: $locale}}, fileAbsolutePath: {regex: "/(products)/.*\\.md$/"}, frontmatter: {productcategory: {eq: $productCategory}}}, limit: $limit, skip: $skip) {
//     edges {
//       node {
//         frontmatter {
//           title
//           description
//           category
//           background
//           image
//           date(formatString: $dateFormat)
//           product
//           maincategory
//         }
//         timeToRead
//         fields {
//           locale
//           slug
//         }
//       }
//     }
//   }
// }

// `
export const query = graphql`
 query ProductList($locale: String!, $dateFormat: String!, $skip: Int!, $limit: Int!) {
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

`

export default ProductPage
