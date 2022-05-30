import styled from 'styled-components'
import media from 'styled-media-query'

export const ListWrapperProducts = styled.section`
    margin-bottom: 20px;
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
    ${media.greaterThan('small')`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    `}
    ${media.greaterThan('medium')`
    grid-gap: 50px;
         grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    `}
`
