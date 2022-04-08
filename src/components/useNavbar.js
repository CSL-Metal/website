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
    let ptItems = []
    let df = [
        { name: 'en', menuItems: enItems },
        { name: 'pt', menuItems: ptItems },
    ]

    const menuData = rawData.group.map(item => {
        if (item.edges[0].node.fields.locale === 'en') {
            enItems.push({
                locale: '',
                link: `/${item.fieldValue}`,
                name: item.fieldValue,
            })
        } else {
            ptItems.push({
                locale: locale,
                link: `/${item.fieldValue}`,
                name: item.fieldValue,
            })
        }

        // if (item.edges[0].node.fields.isDefault) {
        //     return {
        //         name: 'en',
        //         menuItems: [{
        //             link: `/${item.fieldValue}`,
        //             name: item.fieldValue,
        //         }],
        //     }
        // } else {
        //     return {
        //         name: 'pt',
        //         menuItems: [{
        //             link: `/${item.fieldValue}`,
        //             name: item.fieldValue,
        //         }],
        //     }
        // }
    })

    // const test1 = _.groupBy(menuData, 'name')

    // console.log(df)

    // let simplified = menuData.groupBy(({ name }) => name)

    // Only return menu for the current locale
    const { menuItems } = df.filter(lang => lang.name === locale)[0]
    console.log(menuItems)
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
                    }
                }
                fieldValue
            }
        }
    }
`
