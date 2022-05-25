import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'

export const HeaderWrapper = styled.div`
    background-color: var(--bg-light);
    ${media.greaterThan('large')`
    margin-bottom: var(--space);
  `}
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: var(--width-container);
    margin: 0 auto;
    justify-content: flex-start;
    align-items: center;
    padding: calc(var(--space) * 1.3) var(--space);
    position: relative;
    ${media.greaterThan('medium')`
    flex-direction: row;
  `}
    ${media.greaterThan('large')`
    padding: 0px;
  `}
`

export const LogoLink = styled(LocalizedLink)`
    margin-top: 1.5rem;
    display: inline-block;
    margin-right: 0.5rem;
    width: 250px;
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
