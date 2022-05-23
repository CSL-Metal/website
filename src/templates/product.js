import React from 'react'
import { graphql } from 'gatsby'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'

import * as S from '../components/Content/styled'

const Product = props => {
    const post = props.data.markdownRemark

    return (
        <>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                image={post.frontmatter.image}
            />
            <TitlePage text={post.frontmatter.title} />
            <S.Content>
                <div
                    style={{
                        display: 'flex',
                        'flex-direction': 'row',
                        'flex-wrap': 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}
                >
                    <img src={post.frontmatter.image} width={'45%'} />
                    <img src={post.frontmatter.techimage} width={'45%'} />
                    <img src={post.frontmatter.specsimage} width={'100%'} />
                </div>

                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </S.Content>
        </>
    )
}

export const query = graphql`
    query Product($locale: String!, $title: String!) {
        markdownRemark(
            frontmatter: { title: { eq: $title } }
            fields: { locale: { eq: $locale } }
        ) {
            frontmatter {
                title
                description
                image
                techimage
                specsimage
            }
            html
        }
    }
`

export default Product
