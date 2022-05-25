import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useNavbarElements from '../useNavbarElements'
import useTranslations from '../useTranslations'
import { useLocale } from '../../hooks/locale'

function ProductCats(props) {
    const maincat = props.item
    let menuElements = useNavbarElements()
    menuElements = menuElements.filter(item => item.mainCategory === maincat)
    let productCategories = []

    menuElements.map(item => productCategories.push(item.productCategory))
    console.log(productCategories)
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index
    }
    productCategories = productCategories.filter(onlyUnique)
    console.log(productCategories)
    return productCategories.map(item => (
        <AccordionDetails>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{item}</Typography>
                </AccordionSummary>

                {menuElements
                    .filter(products => products.productCategory === item)
                    .map(item => (
                        <AccordionDetails>
                            {' '}
                            <Typography>
                                <Link href={`products/${item.link}`}>
                                    {item.product}
                                </Link>
                            </Typography>{' '}
                        </AccordionDetails>
                    ))}
            </Accordion>
        </AccordionDetails>
    ))
}

export default function ProductNavigation({ isActive, handleToggleMenu }) {
    const { locale } = useLocale()
    let menuElements = useNavbarElements()
    menuElements = menuElements.filter(item => item.lang === locale)
    let mainCategories = []

    menuElements.map(item => mainCategories.push(item.mainCategory))

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index
    }
    mainCategories = mainCategories.filter(onlyUnique)

    const { button } = useTranslations()
    return (
        <div style={{ width: '20%' }}>
            {mainCategories.map(maincat => (
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>{maincat}</Typography>
                    </AccordionSummary>
                    <ProductCats item={maincat} />
                </Accordion>
            ))}
        </div>
    )
}
