import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import useTranslations from '../useTranslations'

import * as S from './styled'

const PostItem = ({
    slug,
    background,
    category,
    date,
    timeToRead,
    title,
    description,
    image,
}) => {
    const { toRead } = useTranslations()

    const { listImages } = useStaticQuery(
        graphql`
            query {
                listImages: allFile (filter: {childImageSharp: {fluid: {src: {regex: "/static/"}}}}) {
                    edges {
                        node {
                            childImageSharp {
                                fluid {
                                    src
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        `
    )

    const postImgCover = listImages.edges.find(img => {
        return img.node.childImageSharp.fluid.src.includes('cover.jpg')
    })

    const imgName = image ? image.split('/')[3] : false
    const postImg = imgName
        ? listImages.edges.find(img => {
            return img.node.childImageSharp.fluid.src.includes(imgName)
        })
        : false
    return (
        <S.PostItemLink to={slug}>
            <S.PostItemWrapper>
                {postImg && (
                    <S.PostItemImg
                        fluid={postImg.node.childImageSharp.fluid}
                        alt={title}
                    />
                )}
                {!postImg && (
                    <S.PostItemImg
                        fluid={postImgCover.node.childImageSharp.fluid}
                        alt={title}
                    />
                )}
                <S.PostItemInfo>
                    <S.PostItemTitle>{title}</S.PostItemTitle>
                </S.PostItemInfo>
            </S.PostItemWrapper>
        </S.PostItemLink>
    )
}

PostItem.propTypes = {
    slug: PropTypes.string.isRequired,
    background: PropTypes.string,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    timeToRead: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default PostItem
