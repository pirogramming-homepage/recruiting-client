import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Variables'

export const QuestionDiv = (props) => {
    return (
        <StyledQuestionDiv>
            <StyledHeader>{props.header}</StyledHeader>
            <StyledDesc>{props.desc}</StyledDesc>
            {props.children}
        </StyledQuestionDiv>
    )
}

const StyledQuestionDiv = styled.div`
max-width: 50%;
padding: 1rem 4rem;
margin: 1rem;
background: ${COLORS.bg_gray};
border-radius: 2rem;
`

const StyledHeader = styled.h1`
font-weight: 600;
font-size: 1.3rem;
line-height: 2rem;
`

const StyledDesc = styled.h1`
font-weight: 400;
font-size: 1rem;
line-height: 1.5rem;
`