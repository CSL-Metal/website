import styled from 'styled-components'
import media from 'styled-media-query'
import LocalizedLink from '../LocalizedLink'
import { Link } from 'gatsby'

export const Navigation = styled.nav`
    background: var(--primary-color);
    z-index: 999;
    display: flex;
    flex-direction: column;
    margin-top: var(--space-sm);
    ${media.greaterThan('medium')`

    position: fixed;
    align-items: center;
    
  `}
`

export const NavigationLink = styled(LocalizedLink)`
    color: white;
    text-decoration: none;
    position: relative;
    padding: 0 var(--space-sm);
    margin-bottom: var(--space-sm);
    text-align: center;
    ${media.greaterThan('medium')`
    margin-left: var(--space-sm);
    margin-bottom: 0;
  `}
    ${media.greaterThan('large')`
    margin-left: var(--space);
  `} 

  &:after {
        ${media.greaterThan('medium')`
      content: '';
      display: inline-block;
      width: 0;
      height: 4px;
      background: var(--primary-color);
      position: absolute;
      left: 0;
      bottom: -10px;
      opacity: 0;
      transition: .3s ease-in-out;
    `}
    }

    &:hover,
    &.active {
        background-color: white;
        color: var(--primary-color)
        font-weight: bold;
        ${media.greaterThan('medium')`
      font-weight: normal;
    `}

        &:after {
            opacity: 0;
            bottom: -10px;
            width: 100%;
        }
    }
`

export const NavigationButton = styled(Link)`
    background: var(--primary-color);
    border-radius: 2px;
    color: #fff;
    display: inline-block;
    padding: var(--space-sm) var(--space);
    text-decoration: none;
    font-weight: bold;
    text-align: center;
    ${media.greaterThan('medium')`
    margin-left: var(--space-lg);
  `}
`
