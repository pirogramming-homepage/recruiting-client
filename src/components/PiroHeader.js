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
`

const StyledLogo = styled.h1`
margin-top: 0.5rem;
margin-bottom: 2rem;
font-size: 3rem;
letter-spacing: 0.5rem;

@media (max-width: 768px) {
    font-size: 2rem;
    letter-spacing: 0.1rem;
}
@font-face {
    font-family: 'SBAggroB';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/SBAggroB.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
font-family: 'SBAggroB';
`

const StyledLogoImage = styled.img`
width: 2rem;
height: 2rem;
margin: 1rem;
`

const StyledHr = styled.div`
border-bottom: 1px solid black;
margin: 1rem 0;
width: 100%;
`