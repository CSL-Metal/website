import React from 'react'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '@material-ui/core/Button'
import useNavbarElements from '../useNavbarElements'
import useTranslations from '../useTranslations'
import OutsideClickHandler from '../../utils/OutsideClickHandler.js'
import { useLocale } from '../../hooks/locale'
import LocalizedLink from '../LocalizedLink'

const useStyles = makeStyles(theme => ({
    sidebarroot: {
        width: '200px',
        top: 0,
        background: 'green',
        height: '50px',
        position: 'sticky',
        overflow: 'visible',
        zIndex: 999,
    },
    subcats: {
        width: '100%',
        background: 'var(--primary-color)',
        color: 'white',
        boxShadow: '0px 0px 2px 0px var(--primary-color)',
    },
    products: {
        boxShadow: '0px 0px 1px 0px var(--gray-light)',
        width: '100%',
        background: 'var(--secondary-color)',
    },
}))

function ProductCats(props) {
    const classes = useStyles()
    const maincat = props.item
    let menuElements = useNavbarElements()
    menuElements = menuElements.filter(item => item.mainCategory === maincat)
    let productCategories = []

    menuElements.map(item => productCategories.push(item.productCategory))
    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index
    }
    productCategories = productCategories.filter(onlyUnique)
    return productCategories.map(item => (
        <AccordionDetails
            style={{
                background: 'green',
                justifyContent: 'left',
                width: '100%',
                padding: '0px',
            }}
        >
            <Accordion style={{ width: '100%' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.subcats}
                >
                    <Typography
                        style={{ fontSize: '1.6rem', fontWeight: '600' }}
                    >
                        {item}
                    </Typography>
                </AccordionSummary>
                {menuElements
                    .filter(products => products.productCategory === item)
                    .map(item => (
                        <AccordionDetails className={classes.products}>
                            <Typography>
                                <LocalizedLink
                                    to={`/products/${item.link}`}
                                    style={{
                                        fontSize: '1.4rem',
                                        color: 'white',
                                    }}
                                >
                                    {item.product}
                                </LocalizedLink>
                            </Typography>
                        </AccordionDetails>
                    ))}
            </Accordion>
        </AccordionDetails>
    ))
}

export default function ProductNavigation(props) {
    const [sidebarOpen, setSideBarOpen] = React.useState(false)
    const [sidebarButtonOpen, setSideBarButtonOpen] = React.useState(true)

    const handleViewSidebar = () => {
        setSideBarOpen(true)
        setSideBarButtonOpen(false)
    }

    const sidebarClass = sidebarOpen ? 'sidebar open' : 'sidebar'
    const sidebarButtonClass = sidebarButtonOpen
        ? 'sidebar-toggle'
        : 'sidebar-toggle off'

    const classes = useStyles()
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
        <OutsideClickHandler
            onOutsideClick={() => {
                setSideBarOpen(false)
                setSideBarButtonOpen(true)
            }}
        >
            <div className={sidebarClass}>
                <div className={classes.sidebarroot}>
                    {mainCategories.map(maincat => (
                        <Accordion
                            style={{
                                margin: 0,
                                boxShadow: '0px 0px 1px 0px var(--gray-light)',
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className={classes.root}
                            >
                                <Typography style={{ fontSize: '2rem' }}>
                                    {maincat}
                                </Typography>
                            </AccordionSummary>
                            <ProductCats item={maincat} />
                        </Accordion>
                    ))}
                </div>
                <Button
                    onClick={handleViewSidebar}
                    className={sidebarButtonClass}
                    variant="contained"
                    style={{
                        position: 'sticky',
                        overflow: 'visible',
                    }}
                >
                    {locale === 'tr' ? (
                        <p
                            style={{
                                writingMode: 'vertical-rl',
                                fontSize: '2rem',
                                alignContent: 'center',
                            }}
                        >
                            Ürün Menüsü
                        </p>
                    ) : (
                        <p
                            style={{
                                writingMode: 'vertical-rl',
                                fontSize: '2rem',
                                alignContent: 'center',
                            }}
                        >
                            Product Menu
                        </p>
                    )}
                </Button>
            </div>
        </OutsideClickHandler>
    )
}
