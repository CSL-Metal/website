import React from 'react'
import { saveAs } from 'file-saver';
import { useStaticQuery, graphql } from 'gatsby'
import SEO from '../components/seo'
import TitlePage from '../components/TitlePage'
import useTranslations from '../components/useTranslations'
import ProductSlider from '../components/ProductSlider'
import FacilityImages from '../components/FacilityImages'

import * as S from '../components/ListWrapper/styled'

const Index = () => {
  // useTranslations is aware of the global context (and therefore also "locale")
  // so it'll automatically give back the right translations
  const {
    hello,
    catalog,
    ourimages,
  } = useTranslations()

  const listImages = useStaticQuery(graphql`
  query { allFile(filter: {relativePath: {regex: "/atalog/"}}) {
      nodes {
        publicURL
        extension
        name
      }
    }
  }
  `)
  let pdf;
  let image;
  listImages.allFile.nodes.map(item => {
    if (item.extension === "pdf" && item.name === "CSL_Katalog_1") {
      pdf = item.publicURL
    } else if (item.extension === "jpg" && item.name === "CSL_Katalog_Cover_1") {
      image = item.publicURL
    }
  }
  )
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
      <br />
      <TitlePage text={hello} />
      <hr style={{ margin: `2rem 0` }} />
      <br />
      <ProductSlider />
      <br />
      <br />
      <TitlePage text={catalog} />
      <hr style={{ margin: `2rem 0` }} />
      <br />
      <img style={{ position: "relative", zIndex: 500, width: "300px" }} src={image} onClick={saveFile} />
      <br />
      <br />
      <TitlePage text={ourimages} />
      <hr style={{ margin: `2rem 0` }} />
      <br />
      <FacilityImages />
    </div>
  )
}

export default Index