import React from 'react'
import { saveAs } from 'file-saver'
import { graphql } from 'gatsby'
import { useLocale } from '../hooks/locale'
import SEO from '../components/seo'
import TitlePage from '../components/TitlePage'
import useTranslations from '../components/useTranslations'
import ProductSlider from '../components/ProductSlider'
import FacilityImages from '../components/FacilityImages'
import Certificates from '../components/Certificates'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import * as S from '../components/ListWrapper/styled'
import * as SD from '../components/PostItem/styled'

const Index = ({ data: { listImages, catalogues } }) => {
    // useTranslations is aware of the global context (and therefore also "locale")
    // so it'll automatically give back the right translations
    const { hello, catalog, ourimages, home, documents } = useTranslations()
    const { locale } = useLocale()
    let pdf
    let image
    catalogues.nodes.map(item => {
        if (item.extension === 'pdf' && item.name === 'CSL_Katalog_1' && locale === 'tr') {
            pdf = item.publicURL
        } else if (item.extension === 'pdf' && item.name === 'CSL_Katalog_1_en' && locale === 'en') {
            pdf = item.publicURL
        }
    })
    console.log(pdf)
    const saveFile = () => {
        if (locale === "tr") {
            saveAs(pdf, 'CSL_KATALOG.pdf')
        } else if (locale === "en") {
            saveAs(pdf, 'CSL_CATALOGUE.pdf')
        }
    }
    listImages.edges.map(item => { if (item.node.childImageSharp.fluid.src.includes("Cover_1_tr") && locale === "tr") { image = item.node.childImageSharp.fluid } else if (item.node.childImageSharp.fluid.src.includes("Cover_1_en") && locale === "en") { image = item.node.childImageSharp.fluid } })
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
                            width: '100%',
                            maxWidth: "400px"
                        }}
                        fluid={image}
                    />
                </div>
                <TitlePage text={ourimages} />
                <hr style={{ margin: `2rem 0` }} />
                <FacilityImages />
                <TitlePage text={documents} />
                <hr style={{ margin: `2rem 0` }} />
                <Certificates />
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
  listImages: allFile(filter: {relativePath: {regex: "/Katalog_Cover/"}}) {
    nodes {
      publicURL
      extension
      name
    }
    edges {
                node {
                    childImageSharp {
                        fluid(
                            maxWidth: 500
                            quality: 90
                            srcSetBreakpoints: [400, 800, 1040]
                            toFormat: WEBP
                        ) {
                            src
                            ...GatsbyImageSharpFluid_withWebp_noBase64
                        }
                    }
                }
            }
  }
  catalogues: allFile(filter: {relativePath: {regex: "/Katalog/"}}) {
    nodes {
      publicURL
      extension
      name
    }
  }
}


`
