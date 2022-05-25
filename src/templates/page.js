import React from 'react'
import { graphql } from 'gatsby'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'
import MyMapComponent from '../components/Maps'

import * as S from '../components/Content/styled'

const Maps = () => {
    const pathname1 = 'iletisim'
    const pathname2 = 'contact'

    if (
        window.location.pathname.split('/').includes(pathname1) ||
        window.location.pathname.split('/').includes(pathname2)
    ) {
        console.log('123123123')
        return (
            <>
                <MyMapComponent
                    isMarkerShown
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA-3Os_kH3U2p6d05DOlkEfqeapdAdwHok&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
            </>
        )
    } else {
        return <></>
    }
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
