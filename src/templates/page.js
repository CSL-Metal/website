import React from 'react'
import { graphql } from 'gatsby'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'
import MyMapComponent from '../components/Maps'
import { globalHistory } from '@reach/router'

import * as S from '../components/Content/styled'

const Maps = () => {
    return (
        <div
            style={{
                display:
                    globalHistory.location.pathname === '/en/contact'
                        ? 'block'
                        : globalHistory.location.pathname === '/iletisim'
                            ? 'block'
                            : 'none',
            }}
        >
            <MyMapComponent
                isMarkerShown
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-3Os_kH3U2p6d05DOlkEfqeapdAdwHok&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}

const Page = props => {
    const post = props.data.markdownRemark

    return (
        <>
            <SEO
                title={post.frontmatter.title}
                description={post.frontmatter.description}
                image={post.frontmatter.image}
            />
            <TitlePage text={post.frontmatter.title} />
            <hr style={{ margin: `2rem 0` }} />
            <S.Content>
                <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
            </S.Content>
            <Maps />
        </>
    )
}

export const query = graphql`
    query Page($locale: String!, $title: String!) {
        markdownRemark(
            frontmatter: { title: { eq: $title } }
            fields: { locale: { eq: $locale } }
        ) {
            frontmatter {
                title
                description
                image
            }
            html
        }
    }
`

export default Page
