import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useLocale } from '../hooks/locale'
import _ from 'lodash'

//THX 4 KADIR
//THX 4 KADIR
//THX 4 KADIR
//THX 4 KADIR
//THX 4 KADIR
function useNavbar() {
  // Grab the locale (passed through context) from the Locale Provider
  // through useLocale() hook
  const { locale } = useLocale()
  // Query the JSON files in <rootDir>/i18n/translations
  const { rawData } = useStaticQuery(query)

  // Simplify the response from GraphQL
  // const simplified = rawData.edges.map(item => {
  //     return {
  //         name: item.node.name,
  //         menuItems: item.node.translations.menuItems,
  //     }
  // })
  let enItems = []
  let trItems = []
  let df = [
    { name: 'en', menuItems: enItems },
    { name: 'tr', menuItems: trItems },
  ]

  const menuData = rawData.group.map(item => {
    if (item.edges[0].node.fields.locale === 'en') {
      enItems.push({
        locale: '',
        link: `/${item.fieldValue}`,
        name: item.fieldValue,
        maincategory: item.edges[0].node.frontmatter.maincategory
      })
    } else {
      trItems.push({
        locale: locale,
        link: `/${item.fieldValue}`,
        name: item.fieldValue,
        maincategory: item.edges[0].node.frontmatter.maincategory
      })
    }
  })

  const { menuItems } = df.filter(lang => lang.name === locale)[0]
  return menuItems
}
export default useNavbar


const query = graphql`
query MyQuery2 {
    rawData: allMarkdownRemark {
      group(field: frontmatter___productcategory) {
        edges {
          node {
            id
            fields {
              isDefault
              locale
            }
            frontmatter {
              description
              maincategory
            }
          }
        }
        fieldValue
      }
    }
  }
`
