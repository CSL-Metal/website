import React from 'react'
import { graphql } from 'gatsby'
import PostItem from '../components/PostItem'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'
import './styles.css'
import * as S from '../components/ListWrapperProducts/styled'
import ProductNavigation from '../components/ProductNavigation'
import { useLocale } from '../hooks/locale'

const ProductPage = props => {
    const postList = props.data.allMarkdownRemark.edges
    const { locale } = useLocale()

    return (
        <>
            <ProductNavigation />
            <div>
                <div>
                    <SEO title="products" />
                    {locale === 'tr' ? (
                        <TitlePage text="Ürünler" />
                    ) : (
                        <TitlePage text="Products" />
                    )}

                    <hr />
                    <S.ListWrapperProducts>
                        {postList.map(
                            ({
                                node: {
                                    frontmatter: { background, title, image },
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

export const query = graphql`
 query ProductList($locale: String!, $dateFormat: String!, $skip: Int!, $limit: Int!) {
  allMarkdownRemark(sort: {fields: frontmatter___description, order: ASC}, filter: {fields: {locale: {eq: $locale}}, fileAbsolutePath: {regex: "/(products)/.*\\.md$/"}}, limit: $limit, skip: $skip) {
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
