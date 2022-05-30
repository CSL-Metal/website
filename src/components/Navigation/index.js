import React from 'react'
import useMenu from '../useMenu'
import useTranslations from '../useTranslations'
import { useMenu as asd } from '../../hooks/menu'

import * as S from './styled'

const Navigation = ({ isActive, handleToggleMenu }) => {
    const menuItems = useMenu()
    const { openedMenu, toggleMenu } = asd()
    const { button } = useTranslations()

    return (
        <>
            <S.Navigation>
                {menuItems.map((menu, index) => (
                    <S.NavigationLink
                        to={menu.link}
                        aria-label={menu.name}
                        activeClassName="active"
                        key={`${menu.link}${index}`}
                        onClick={toggleMenu}
                    >
                        {menu.name}
                    </S.NavigationLink>
                ))}

                {/* <S.NavigationButton to="" aria-label="Login">
                    {button}
                </S.NavigationButton> */}
            </S.Navigation>
        </>
    )
}

export default Navigation
