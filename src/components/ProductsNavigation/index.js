import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import useNavbarElements from '../useNavbarElements'
import useTranslations from '../useTranslations'
import { useLocale } from '../../hooks/locale'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '200px',
        position: 'sticky',
        zIndex: 999,
        overflow: 'visible',
        top: 0,
        background: '#eaeaea',
        height: '50px',
        wordWrap: 'break-word',

    },
    subcats: {
        width: '200px',
        background: '#eaeaea',

    },
    products: {
        width: '200px',
        background: '#797D7F',
        boxShadow: 'none',

    },
}));


function ProductCats(props) {
    const classes = useStyles();
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
        <AccordionDetails style={{ background: '#797D7F', justifyContent: 'center' }}>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.subcats}>
                    <Typography style={{ fontSize: '15px', }}>{item}</Typography>
                </AccordionSummary>

                {menuElements
                    .filter(products => products.productCategory === item)
                    .map(item => (
                        <AccordionDetails className={classes.products}>
                            <Typography >
                                <Link href={`${item.link}`} style={{ fontSize: '15px', color: 'white' }}>
                                    {item.product}
                                </Link>
                            </Typography>
                        </AccordionDetails>
                    ))}
            </Accordion>
        </AccordionDetails>
    ))
}

export default function ProductsNavigation({ isActive, handleToggleMenu }) {
    const classes = useStyles();
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
        <div className={classes.root}>
            {mainCategories.map(maincat => (
                <Accordion >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />} className={classes.root} style={{ height: '75px', }}>
                        <Typography style={{ fontSize: '20px', }}>{maincat}</Typography>
                    </AccordionSummary>
                    <ProductCats item={maincat} />
                </Accordion>
            ))}
        </div>
    )
}
