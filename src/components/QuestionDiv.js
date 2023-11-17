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
margin-bottom: 1rem;
background: ${COLORS.bg_gray};
border-radius: 2rem;

@media (max-width: 1300px) {
    width: 70%;
}

@media (max-width: 768px) {
    width: 90%;
    padding: 0 0.8rem;
    font-size: 1rem;
    line-height: 1.2rem;
    border-radius: 1rem;
}
`

const Wapper = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: 1rem 0;
position: relative;

@media (max-width: 786px) {
    flex-direction: column;
}
`

const StyledHeader = styled.h1`
font-weight: 600;
font-size: 1.3rem;
line-height: 2rem;
margin: 0;
width: 90%;

@media (max-width: 786px) {
    font-size: 1rem;
    line-height: 1.2rem;
    width: 100%;
}
`

const StyledDesc = styled.h3`
font-weight: 400;
font-size: 1rem;
line-height: 1.5rem;
word-break: keep-all;
white-space: pre-line;

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
font-size: 0.8rem;
@media (max-width: 1300px) {
    display: flex;
    justify-content: right;
    align-items: center;
}
@media (max-width: 786px) {
    font-size: 0.7rem;
    padding-top: 0.3rem;
    display: flex;
    justify-content: left;
    align-items: center;
}
`