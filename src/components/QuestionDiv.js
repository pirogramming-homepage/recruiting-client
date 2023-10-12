import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Variables'

export const QuestionDiv = (props) => {
    return (
        <StyledQuestionDiv style={{display: props.display}}>
            <Wapper>
                <StyledHeader>{props.header}</StyledHeader>
                {props.required === undefined && <RequiredQuestion>*필수응답</RequiredQuestion>}
            </Wapper>
            <StyledDesc>{props.desc}</StyledDesc>
            <StyledChildren>{props.children}</StyledChildren>
        </StyledQuestionDiv>
    )
}

const StyledQuestionDiv = styled.div`
width: 50%;
padding: 1rem 4rem;
margin: 1rem;
background: ${COLORS.bg_gray};
border-radius: 2rem;

@media (max-width: 768px) {
    width: 70%;
    padding: 1rem 2rem;
    font-size: 1rem;
    line-height: 1.2rem;
}
`

const Wapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 1rem 0;

@media (max-width: 1300px) {
    flex-direction: column;
}
`

const StyledHeader = styled.h1`
font-weight: 600;
font-size: 1.3rem;
line-height: 2rem;
margin: 0;

@media (max-width: 1080px) {
    font-size: 1rem;
    line-height: 1.2rem;
}
`

const StyledDesc = styled.h3`
font-weight: 400;
font-size: 1rem;
line-height: 1.5rem;

@media (max-width: 786px) {
    font-size: 0.8rem;
    line-height: 1rem;
}
`

const StyledChildren = styled.div`
display: flex;
flex-direction: column;
`
const RequiredQuestion = styled.span`
color: red;
`