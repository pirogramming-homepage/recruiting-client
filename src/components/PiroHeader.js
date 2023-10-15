import React from 'react'
import styled from 'styled-components'
import { COLORS } from './Variables'

export const PiroHeader = (props) => {
    return (
        <StyledPiroHeader>
            <StyledSlogan>비전공자를 위한 웹 프로그래밍 동아리</StyledSlogan>
            <StyledRowDiv>
            <StyledLogoImage alt="logo" src="piro_logo.png" />
            <StyledLogo>PIROGRAMMING</StyledLogo>
            </StyledRowDiv>
            {props.children}
            <StyledHr />
        </StyledPiroHeader>
    )
}

const StyledPiroHeader = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem 0;
width: 100%;
`

const StyledSlogan = styled.h3`
margin-bottom: 0.1rem;
font-weight: 400;
font-size: 1rem;
`

const StyledRowDiv = styled.div`
display: flex;
align-items: center;
`

const StyledLogo = styled.h1`
font-size: 3rem;
letter-spacing: 0.5rem;

@media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 0.1rem;
}
@media (max-width: 380px) {
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
}
`

const StyledLogoImage = styled.img`
width: 2rem;
height: 2rem;
margin-right: 1rem;

@media (max-width: 380px) {
    width: 1.5rem;
    height: 1.5rem;
    margin-right: 0.5rem;
}
`

const StyledHr = styled.div`
border-bottom: 1px solid black;
margin: 1rem 0;
width: 100%;
`