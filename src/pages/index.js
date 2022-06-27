import React from 'react'
import { saveAs } from 'file-saver'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import TitlePage from '../components/TitlePage'
import useTranslations from '../components/useTranslations'
import ProductSlider from '../components/ProductSlider'
import FacilityImages from '../components/FacilityImages'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import * as S from '../components/ListWrapper/styled'
import * as SD from '../components/PostItem/styled'

const Index = ({ data: { listImages } }) => {
    // useTranslations is aware of the global context (and therefore also "locale")
    // so it'll automatically give back the right translations
    const { hello, catalog, ourimages, home } = useTranslations()
    let pdf
    let image
    listImages.nodes.map(item => {
        if (item.extension === 'pdf' && item.name === 'CSL_Katalog_1') {
            pdf = item.publicURL
        }
    })
    const saveFile = () => {
        saveAs(pdf, 'CSL_KATALOG.pdf')
    }

    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Banner />
            <div style={{ width: '100%', maxWidth: '1040px', padding: '2rem' }}>
                <SEO title={home} />
                <br />
                <TitlePage text={hello} />
                <hr style={{ margin: `2rem 0` }} />
                <ProductSlider />
                <br />
                <TitlePage text={catalog} />
                <hr style={{ margin: `2rem 0` }} />
                <div onClick={saveFile}>
                    <SD.PostItemImg
                        style={{
                            position: 'relative',
                            zIndex: 5000,
                            width: '300px',
                        }}
                        fluid={listImages.edges[0].node.childImageSharp.fluid}
                    />
                </div>
                <TitlePage text={ourimages} />
                <hr style={{ margin: `2rem 0` }} />
                <FacilityImages />
            </div>
            <Footer />
        </div>
    )
}

export default Index

export const query = graphql`
query Index($locale: String!, $dateFormat: String!) {
  allMarkdownRemark(filter: {fields: {locale: {eq: $locale}}, fileAbsolutePath: {regex: "/(blog)/.*\\.md$/"}}, sort: {fields: [frontmatter___date], order: DESC}, limit: 10) {
    edges {
      node {
        frontmatter {
          title
          description
          category
          background
          image
          date(formatString: $dateFormat)
        }
        timeToRead
        fields {
          locale
          slug
        }
      }
    }
  }
  listImages: allFile(filter: {relativePath: {regex: "/atalog/"}}) {
    nodes {
      publicURL
      extension
      name
    }
    edges {
                node {
                    childImageSharp {
                        fluid(maxWidth: 300, quality: 90, toFormat: WEBP) {
                            src
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
            }
  }
}


`
