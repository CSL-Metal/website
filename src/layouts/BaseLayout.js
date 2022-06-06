import React from 'react'
import GlobalStyles from '../styles/global'

import Header from '../components/Header'
import Footer from '../components/Footer'

import Banner from '../components/Banner'
import SubBanner from '../components/SubBanner'

import { useLocale } from '../hooks/locale'

import * as S from './styled'

const styleBackground = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'var(--bg-light)',
    opacity: '0.04',
    backgroundImage:
        'linear-gradient(30deg, #BF1C2D 12%, transparent 12.5%, transparent 87%, #BF1C2D 87.5%, #BF1C2D), linear-gradient(150deg, #BF1C2D 12%, transparent 12.5%, transparent 87%, #BF1C2D 87.5%, #BF1C2D), linear-gradient(30deg, #BF1C2D 12%, transparent 12.5%, transparent 87%, #BF1C2D 87.5%, #BF1C2D), linear-gradient(150deg, #BF1C2D 12%, transparent 12.5%, transparent 87%, #BF1C2D 87.5%, #BF1C2D), linear-gradient(60deg, #BF1C2D77 25%, transparent 25.5%, transparent 75%, #BF1C2D77 75%, #BF1C2D77), linear-gradient(60deg, #BF1C2D77 25%, transparent 25.5%, transparent 75%, #BF1C2D77 75%, #BF1C2D77)',
    backgroundSize: '22px 39px',
    backgroundPosition: '0 0, 0 0, 11px 19px, 11px 19px, 0 0, 11px 19px',
}

const BaseLayout = ({ children, pageContext: { locale } }) => {
    // Using the useLocale() hook to define the correct locale
    // that will be available in all components of the tree thought its context
    const { changeLocale } = useLocale()
    changeLocale(locale)

    return (
        <>
            <GlobalStyles />
            <div style={styleBackground}></div>
            <S.Wrapper>
                <Header />
                <Banner></Banner>
                <SubBanner></SubBanner>
                <S.SiteContent role="main">
                    <S.Container>{children}</S.Container>
                </S.SiteContent>
            </S.Wrapper>
        </>
    )
}

export { BaseLayout }
