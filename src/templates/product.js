import React from 'react'
import { graphql } from 'gatsby'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'
import ThreeD from '../components/Threedviewer'
import * as D from '../components/ListWrapper/styled'
import * as S from '../components/Content/styled'
import ProductNavigation from '../components/ProductNavigation'

var paragraphs = require('lines-to-paragraphs')

const Product = props => {
    const post = props.data.markdownRemark
    console.log(post)

    return (
        <>
            <div style={{ display: 'flex', filexDirection: 'row' }}>
                <ProductNavigation />
                <div style={{ marginLeft: '10px' }}>
                    <SEO
                        title={post.frontmatter.title}
                        description={post.frontmatter.description}
                        image={post.frontmatter.image}
                    />
                    <TitlePage text={post.frontmatter.title} />
                    <hr />
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
                            <D.ListWrapper>
                                <img
                                    src={post.frontmatter.image}
                                    style={{ alignSelf: 'center' }}
                                />
                                <img src={post.frontmatter.techimage} />
                            </D.ListWrapper>
                        </div>

                        <hr />
                        <D.ListWrapper>
                            <img
                                src={post.frontmatter.threedlogo}
                                style={{
                                    background: 'var(--gray-extra-light)',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '10px',
                                    marginBottom: '10px',
                                }}
                            />
                            <ThreeD threed={post.frontmatter.threedmodel} scale={post.frontmatter.threedscale} />
                        </D.ListWrapper>

                        <hr />

                        <img src={post.frontmatter.specsimage} width={'100%'} />

                        <hr />

                        <div
                            dangerouslySetInnerHTML={{
                                __html: paragraphs(post.frontmatter.specs),
                            }}
                        ></div>
                    </S.Content>
                </div>
            </div>
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
                specs
                threedmodel
                threedscale
                threedlogo
            }
            html
        }
    }
`

export default Product
