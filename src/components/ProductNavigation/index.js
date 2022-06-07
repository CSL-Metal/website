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
        background: '#eaeaea',
        height: '50px',
        position: 'sticky',
        overflow: 'visible',
        zIndex: 999,
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
            style={{ background: '#797D7F', justifyContent: 'center' }}
        >
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    className={classes.subcats}
                >
                    <Typography style={{ fontSize: '15px' }}>{item}</Typography>
                </AccordionSummary>

                {menuElements
                    .filter(products => products.productCategory === item)
                    .map(item => (
                        <AccordionDetails className={classes.products}>
                            <Typography>
                                <LocalizedLink
                                    to={`/products/${item.link}`}
                                    style={{ fontSize: '15px', color: 'white' }}
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
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                className={classes.root}
                                style={{ height: '100px' }}
                            >
                                <Typography style={{ fontSize: '20px' }}>
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
                    style={{ position: 'sticky', overflow: 'visible' }}
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
