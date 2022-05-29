import React from 'react'
import GlobalStyles from '../styles/global'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Banner from '../components/Banner'

import { useLocale } from '../hooks/locale'

import * as S from './styled'

const BaseLayout = ({ children, pageContext: { locale } }) => {
    // Using the useLocale() hook to define the correct locale
    // that will be available in all components of the tree thought its context
    const { changeLocale } = useLocale()
    changeLocale(locale)

    let banner
    if (
        window.location.pathname === '/' ||
        window.location.pathname === '/en' ||
        window.location.pathname === '/en/'
    ) {
        banner = <Banner></Banner>
    }

    return (
        <>
            <GlobalStyles />
            <S.Wrapper>
                <Header />
                {banner}
                <S.SiteContent role="main">
                    <S.Container>{children}</S.Container>
                </S.SiteContent>
                <Footer />
            </S.Wrapper>
        </>
    )
}

export { BaseLayout }
