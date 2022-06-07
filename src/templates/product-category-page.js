import React from 'react'
import { graphql } from 'gatsby'
import PostItem from '../components/PostItem'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'

import Pagination from '../components/Pagination'

import * as S from '../components/ListWrapperProducts/styled'
import ProductNavigation from '../components/ProductNavigation'

const ProductCategoryPage = props => {
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
            <SEO title="products" />
            <TitlePage text="products" />

            {/* <ProductNavigation /> */}

            <S.ListWrapperProducts>
                {postList.map(
                    ({
                        node: {
                            frontmatter: {
                                background,
                                category,
                                date,
                                description,
                                title,
                                image,
                            },
                            timeToRead,
                            fields: { slug },
                        },
                    }) => (
                        <PostItem
                            slug={`/products/${slug}`}
                            background={background}
                            category={category}
                            date={date}
                            timeToRead={timeToRead}
                            title={title}
                            description={description}
                            image={image}
                            key={slug}
                        />
                    )
                )}
            </S.ListWrapperProducts>

            <Pagination
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                numPages={numPages}
                prevPage={prevPage}
                nextPage={nextPage}
            />
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
 query ProductCategoryList($locale: String!, $dateFormat: String!, $skip: Int!, $limit: Int!, $tag: String!) {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, filter: {fields: {locale: {eq: $locale}}, fileAbsolutePath: {regex: "/(products)/.*\\.md$/"}, frontmatter: {productcategory: {eq: $tag}}}, limit: $limit, skip: $skip) {
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

export default ProductCategoryPage
