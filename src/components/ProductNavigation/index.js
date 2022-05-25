import React from 'react'
import useNavbar from '../useNavbar'
import useNavbarElements from '../useNavbarElements'
import useTranslations from '../useTranslations'
import { useLocale } from '../../hooks/locale'

import * as S from './styled'

const ProductNavigation = ({ isActive, handleToggleMenu }) => {
    const menuItems = useNavbar()
    const menuElements = useNavbarElements()

    function onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    let mainCategories = []

    menuItems.map(items => mainCategories.push(items.maincategory))
    mainCategories = mainCategories.filter(onlyUnique)

    const { button } = useTranslations()
    return (
        <>
            <S.Navigation>
                {menuItems.map((menu, index) => (
                    <S.NavigationLink
                        to={`/products${menu.link}`}
                        aria-label={menu.name}
                        activeClassName="active"
                        key={`${menu.link}${index}`}
                    >
                        {menu.name}
                    </S.NavigationLink>
                ))}
            </S.Navigation>
        </>
    )
}

export default ProductNavigation
