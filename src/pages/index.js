import React from 'react'
import { saveAs } from 'file-saver';
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import TitlePage from '../components/TitlePage'
import useTranslations from '../components/useTranslations'
import ProductSlider from '../components/ProductSlider'

import * as S from '../components/ListWrapper/styled'

const Index = ({ data: { listImages } }) => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const {
    hello,
    catalog,
  } = useTranslations()
  let pdf;
  let image;
  listImages.nodes.map(item => {
    if (item.extension === "pdf" && item.name === "CSL_Katalog_1") {
      pdf = item.publicURL
    } else if (item.extension === "jpg" && item.name === "CSL_Katalog_Cover_1") {
      image = item.publicURL
    }
  }
  )
  console.log(pdf)
  const saveFile = () => {
    saveAs(
      pdf,
      "CSL_KATALOG.pdf"
    )
  };

  return (
    <div className="homepage">
      <SEO title="Home" />
      <br />
      <TitlePage text={hello} />
      <hr style={{ margin: `2rem 0` }} />
      <ProductSlider />
      <br />
      <TitlePage text={catalog} />
      <hr style={{ margin: `2rem 0` }} />
      <img style={{ width: "300px" }} src={image} onClick={saveFile} />
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
    }

  
}


`
