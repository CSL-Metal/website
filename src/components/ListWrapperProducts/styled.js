import styled from 'styled-components'
import media from 'styled-media-query'

export const ListWrapperProducts = styled.section`
    margin-bottom: 20px;
    ${media.greaterThan('small')`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    `}
    ${media.greaterThan('large')`
        grid-template-columns: repeat(auto-fit, minmax(100px, calc(30% - 10px)));
    `}
`
