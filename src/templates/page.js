import React from 'react'
import { graphql } from 'gatsby'
import TitlePage from '../components/TitlePage'
import SEO from '../components/seo'
import MyMapComponent from '../components/Maps'
import Certificates from '../components/Certificates'
import { globalHistory } from '@reach/router'
import Footer from '../components/Footer'
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
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKzs0ihkg4tEv9kE2HJLmyOmeWCIoxbZs&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}

const CertificatesPageCheck = () => {
    console.log(globalHistory.location.pathname)
    return (
        <div
            style={{
                display:
                    globalHistory.location.pathname === '/en/certificate'
                        ? 'block'
                        : globalHistory.location.pathname === '/sertifika'
                            ? 'block'
                            : 'none',
            }}
        >
            <Certificates />
        </div>
    )
}

const Page = props => {
    // console.log("next")
    // console.log(props)
    const post = props.data.markdownRemark
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    width: '100%',
                    overflow: 'hidden',
                    display: 'flex',
                    justifyContent: 'center',
                    backgroundSize: 'contain',
                }}
            >
                <img
                    src={post.frontmatter.image}
                    style={{
                        width: 'calc(90vw + 400px)',
                        maxWidth: 'calc(90vw + 800px)',
                        maxHeight: '400px',
                    }}
                />
            </div>

            <div style={{ width: '100%', maxWidth: '1040px', padding: '2rem' }}>
                <SEO
                    title={post.frontmatter.title}
                    description={post.frontmatter.description}
                    image={post.frontmatter.image}
                />
                <br />
                <br />
                <TitlePage text={post.frontmatter.title} />
                <hr style={{ margin: `2rem 0` }} />
                <S.Content>
                    <div
                        style={{ position: 'relative', zIndex: 999 }}
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    ></div>
                </S.Content>
                <Maps />
                <CertificatesPageCheck />
            </div>
            <Footer />
        </div>
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
