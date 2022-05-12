import React from 'react'
import useNavbar from '../useNavbar'
import useTranslations from '../useTranslations'

import * as S from './styled'

const ProductNavigation = ({ isActive, handleToggleMenu }) => {
    const menuItems = useNavbar()
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
