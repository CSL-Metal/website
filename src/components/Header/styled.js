import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'

export const HeaderWrapper = styled.div`
    background-color: var(--bg-light);
    ${media.greaterThan('large')`
    margin-bottom: 0;
  `}
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: var(--width-container);
    margin: 0 auto;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    position: relative;

    ${media.greaterThan('medium')`
    flex-direction: row;
  `}
    ${media.greaterThan('large')`
    padding: 0px;
  `}
`

export const LogoLink = styled(LocalizedLink)`
    margin-top: 8rem;
    ${media.greaterThan('medium')`
    margin: 2rem;
    display: inline-block;
    margin-right: 0.5rem;
    width: 250px;
    `} ${media.greaterThan('large')`
    margin: 3rem;
    display: inline-block;
    margin-right: 0.5rem;
    width: 250px;
    `};
`

export const ButtonMenu = styled.div`
    &.is-active {
    }
`

export const NavMenu = styled.div`
    margin: 0;
    padding: 0;
    width: 100%;
    display: none;
    ${media.greaterThan('medium')`
    margin-bottom: 1.5rem;
    margin-left: auto;
    width: auto;
    display: block;
  `}
    &.is-active {
        display: block;
    }
`

export const NavLanguages = styled.div`
    margin-left: var(--space);
`
