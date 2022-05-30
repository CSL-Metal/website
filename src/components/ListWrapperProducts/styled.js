import styled from 'styled-components'
import media from 'styled-media-query'

export const ListWrapperProducts = styled.section`
    margin-bottom: 20px;
    ${media.greaterThan('small')`
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    `}
    ${media.greaterThan('medium')`
    grid-gap: 50px;
         grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    `}
`
